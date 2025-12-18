import type { Dirent } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as sass from 'sass';

const ROOT_THEME_FILE_RE = /-(dark|light)\.scss$/;

type ThemeCandidate = {
  file: string;
  outFile: string;
};

async function walkForScssFiles(dir: string): Promise<string[]> {
  const results: string[] = [];

  async function walk(currentDir: string): Promise<void> {
    let entries: Dirent[];
    try {
      entries = await fs.readdir(currentDir, { withFileTypes: true });
    } catch {
      return;
    }

    await Promise.all(
      entries.map(async (entry) => {
        const fullPath = path.join(currentDir, entry.name);

        if (entry.isDirectory()) {
          await walk(fullPath);
          return;
        }

        if (entry.isFile() && entry.name.endsWith('.scss')) {
          results.push(fullPath);
        }
      }),
    );
  }

  await walk(dir);
  return results;
}

function isThemeEntrypoint(filePath: string, frameworkRoot: string): boolean {
  const base = path.basename(filePath);
  if (base.startsWith('_')) return false;

  const rel = path.relative(frameworkRoot, filePath);
  const relParts = rel.split(path.sep);
  const isDirectlyUnderRoot = relParts.length === 1;

  if (relParts[0] === 'themes' && relParts[1] === 'lara') return false;

  if (isDirectlyUnderRoot && ROOT_THEME_FILE_RE.test(base)) return true;
  if (isDirectlyUnderRoot && base.endsWith('-theme.scss')) return true;

  if (base === 'theme.scss' && relParts.includes('themes')) return true;

  return false;
}

function themeNameFromEntrypoint(filePath: string): string {
  const base = path.basename(filePath);

  if (base === 'theme.scss') {
    const parent = path.basename(path.dirname(filePath));
    const grandparent = path.basename(path.dirname(path.dirname(filePath)));
    return `${grandparent}-${parent}`;
  }

  if (base.endsWith('-theme.scss')) return base.slice(0, -'-theme.scss'.length);

  // e.g. labs-dark.scss -> labs-dark
  return path.parse(base).name;
}

function buildThemeCandidates(
  frameworkRoot: string,
  outDir: string,
  files: string[],
): ThemeCandidate[] {
  const candidates: ThemeCandidate[] = [];
  for (const file of files) {
    if (!isThemeEntrypoint(file, frameworkRoot)) continue;
    const name = themeNameFromEntrypoint(file);
    candidates.push({
      file,
      outFile: path.join(outDir, `${name}-theme.css`),
    });
  }

  return candidates;
}

async function main(): Promise<void> {
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const repoRoot = path.resolve(scriptDir, '..');

  const reactThemesDir = path.join(repoRoot, 'src', 'themes', 'react');
  const vueThemesDir = path.join(repoRoot, 'src', 'themes', 'vue');

  const outDir = path.join(repoRoot, 'dist', 'themes');
  await fs.mkdir(outDir, { recursive: true });

  try {
    const existing = await fs.readdir(outDir, { withFileTypes: true });
    await Promise.all(
      existing
        .filter((entry) => entry.isFile() && entry.name.endsWith('-theme.css'))
        .map((entry) => fs.unlink(path.join(outDir, entry.name))),
    );
  } catch {
    // ignore
  }

  const reactAllScss = await walkForScssFiles(reactThemesDir);
  const vueAllScss = await walkForScssFiles(vueThemesDir);

  const candidates = [
    ...buildThemeCandidates(reactThemesDir, outDir, reactAllScss),
    ...buildThemeCandidates(vueThemesDir, outDir, vueAllScss),
  ].sort((a, b) => a.outFile.localeCompare(b.outFile));

  if (candidates.length === 0) {
    console.log('No theme entrypoints found. Expected one of:');
    console.log(`- ${reactThemesDir}/*-(dark|light).scss`);
    console.log(`- ${vueThemesDir}/*-(dark|light).scss`);
    console.log(`- ${reactThemesDir}/*-theme.scss`);
    console.log(`- ${vueThemesDir}/*-theme.scss`);
    return;
  }

  const loadPaths = [
    reactThemesDir,
    vueThemesDir,
    path.join(repoRoot, 'src', 'themes'),
    repoRoot,
  ];

  const seenOutFiles = new Set<string>();

  for (const { file, outFile } of candidates) {
    if (seenOutFiles.has(outFile)) {
      console.warn(
        `Skipping duplicate output ${path.relative(repoRoot, outFile)} from ${path.relative(repoRoot, file)}`,
      );
      continue;
    }
    seenOutFiles.add(outFile);

    const result = sass.compile(file, {
      style: 'expanded',
      loadPaths: [path.dirname(file), ...loadPaths],
      quietDeps: true,
    });

    await fs.writeFile(outFile, result.css, 'utf8');
    console.log(
      `${path.relative(repoRoot, file)} -> ${path.relative(repoRoot, outFile)}`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

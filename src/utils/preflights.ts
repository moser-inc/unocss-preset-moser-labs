import { readFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Preflight } from 'unocss';
import type { MoserLabsAppThemeKey } from '../theme';

const _dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url));

export function moserLabsPreflights(defaultApp: MoserLabsAppThemeKey) {
  return [
    {
      getCSS: () => {
        const darkThemeCss = readFileSync(
          `${_dirname}/themes/${defaultApp}-dark-theme.css`,
          { encoding: 'utf-8', flag: 'r' },
        );

        const lightThemeCss = readFileSync(
          `${_dirname}/themes/${defaultApp}-light-theme.css`,
          { encoding: 'utf-8', flag: 'r' },
        );

        return `
          @media (prefers-color-scheme: dark) {
            ${darkThemeCss}
          }
          @media (prefers-color-scheme: light) {
            ${lightThemeCss}
          }
        `.trim();
      },
    },
  ] satisfies Preflight[];
}

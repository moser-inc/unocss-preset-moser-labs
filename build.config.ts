import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    './src/index',
    './src/theme',
    { builder: 'copy', input: './icons', outDir: './dist/icons' },
  ],
  declaration: true,
  externals: ['@unocss/preset-mini'],
});

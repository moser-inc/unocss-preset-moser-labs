import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    { input: './src/index' },
    { builder: 'copy', input: './icons', outDir: './dist/icons' },
  ],
  declaration: true,
});

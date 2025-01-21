import { execSync } from 'node:child_process';
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  hooks: {
    'build:done': () => {
      console.log('Build done! Copying icons to dist...');
      execSync('cp -a ./icons ./dist');
    },
  },
});

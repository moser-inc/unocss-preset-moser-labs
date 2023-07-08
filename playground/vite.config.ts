import react from '@vitejs/plugin-react-swc';
import unocss from 'unocss/vite';
import { defineConfig } from 'vite';
import { presetMoserLabs } from '../dist';

// https://vitejs.dev/config/
export default defineConfig({
  root: './playground',
  plugins: [react(), unocss({ presets: [presetMoserLabs()] })],
});

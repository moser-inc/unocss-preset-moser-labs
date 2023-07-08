import react from '@vitejs/plugin-react-swc';
import unocss from 'unocss/vite';
import { defineConfig } from 'vite';
import { moserLabsAppThemeKeys, presetMoserLabs } from '../dist';

// https://vitejs.dev/config/
export default defineConfig({
  root: './playground',
  plugins: [
    react(),
    unocss({
      presets: [presetMoserLabs()],
      safelist: moserLabsAppThemeKeys.flatMap((appThemeKey) => [
        `bg-${appThemeKey}-primary`,
        `bg-${appThemeKey}-primary-text`,
        `bg-${appThemeKey}-secondary`,
        `bg-${appThemeKey}-secondary-text`,
        `bg-${appThemeKey}-gradient`,
        `text-${appThemeKey}-primary`,
        `text-${appThemeKey}-primary-text`,
        `text-${appThemeKey}-secondary`,
        `text-${appThemeKey}-secondary-text`,
        `text-${appThemeKey}-gradient`,
        `i-app-${appThemeKey}`,
        `i-logo-${appThemeKey}`,
        `i-logo-${appThemeKey}-large`,
      ]),
    }),
  ],
});

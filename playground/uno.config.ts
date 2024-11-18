import { defineConfig } from 'unocss';
import {
  moserLabsAppThemeKeys,
  moserLabsThemeKeys,
  presetMoserLabs,
} from '../dist';

const allThemeKeys = [...moserLabsThemeKeys, ...moserLabsAppThemeKeys];

const safeColors = allThemeKeys.flatMap((appThemeKey) => [
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
]);

const safeIcons = moserLabsAppThemeKeys.flatMap((appThemeKey) => [
  `i-mli-${appThemeKey}`,
  `i-mli-${appThemeKey}-badge`,
  `i-mli-${appThemeKey}-badge-lg`,
]);

export default defineConfig({
  presets: [
    presetMoserLabs({
      defaultApp: 'labs',
      extendUnoOptions: {
        dark: 'class',
      },
    }),
  ],
  safelist: [...safeColors, ...safeIcons],
});

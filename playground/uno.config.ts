import { defineConfig } from 'unocss';
import { presetMoserLabs } from '../dist';
import { moserLabsAppThemeKeys, moserLabsThemeKeys } from '../dist/theme';

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
      extendWind3Options: {
        dark: 'class',
      },
    }),
  ],
  safelist: [...safeColors, ...safeIcons],
});

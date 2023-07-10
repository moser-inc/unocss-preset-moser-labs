import { defineConfig } from 'unocss';
import { moserLabsAppThemeKeys, presetMoserLabs } from '../dist';

export default defineConfig({
  presets: [
    presetMoserLabs({
      extendWindOptions: {
        dark: 'class',
      },
    }),
  ],
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
    `i-labs-${appThemeKey}`,
    `i-labs-logo-${appThemeKey}`,
    `i-labs-logo-${appThemeKey}-badge`,
    `i-labs-logo-${appThemeKey}-badge-lg`,
  ]),
});

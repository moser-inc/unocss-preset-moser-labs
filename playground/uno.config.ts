import { defineConfig } from 'unocss';
import { presetMoserLabs } from '../dist';
import { moserLabsAppThemeKeys, moserLabsThemeKeys } from '../dist/theme';

const allThemeKeys = [...moserLabsThemeKeys, ...moserLabsAppThemeKeys];

const safeColors = allThemeKeys.flatMap((themeKey) => [
  `bg-${themeKey}-primary`,
  `bg-${themeKey}-primary-text`,
  `bg-${themeKey}-secondary`,
  `bg-${themeKey}-secondary-text`,
  `bg-${themeKey}-gradient`,
  `text-${themeKey}-primary`,
  `text-${themeKey}-primary-text`,
  `text-${themeKey}-secondary`,
  `text-${themeKey}-secondary-text`,
  `text-${themeKey}-gradient`,
]);

const safeIcons = moserLabsAppThemeKeys.flatMap((appThemeKey) => [
  `i-mli-${appThemeKey}`,
  `i-mli-${appThemeKey}-badge`,
  `i-mli-${appThemeKey}-badge-lg`,
]);

const safeTiles = allThemeKeys.flatMap((themeKey) => [
  `labs-${themeKey}-tile`,
  `labs-${themeKey}-tile-lg`,
]);

export default defineConfig({
  presets: [presetMoserLabs({ defaultApp: 'labs', preflight: true })],
  safelist: [...safeColors, ...safeIcons, ...safeTiles],
});

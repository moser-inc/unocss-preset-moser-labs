import { type Theme } from '@unocss/preset-mini';
import {
  MOSER_LABS_APP_CONFIGS,
  type MoserLabsAppKey,
  type MoserLabsAppThemeKey,
  type MoserLabsAppThemeValue,
} from '@/utils/theme';

export function generateTheme() {
  const colors = MOSER_LABS_APP_CONFIGS.reduce((result, { key, theme }) => {
    return { ...result, [key]: theme };
  }, {} as { [K in MoserLabsAppKey]: MoserLabsAppThemeValue });

  return { colors } as const satisfies Theme;
}

export function generateShortcuts() {
  return MOSER_LABS_APP_CONFIGS.reduce((shortcutsResult, { key, theme }) => {
    const colorNames = Object.keys(theme) as MoserLabsAppThemeKey[];

    const colorShortcuts = colorNames.reduce((colorShortcutsResult, color) => {
      return {
        ...colorShortcutsResult,
        [`bg-${key}-${color}`]: `bg-${key}-${color}-dark light:bg-${key}-${color}-light`,
        [`text-${key}-${color}`]: `text-${key}-${color}-dark light:text-${key}-${color}-light`,
      };
    }, {} as Record<string, string>);

    return {
      ...shortcutsResult,
      ...colorShortcuts,
      ['bg-gradient-base']: 'bg-gradient-linear bg-gradient-shape-[111deg]',
      ['text-gradient-base']: 'bg-clip-text text-transparent',
      [`bg-${key}-gradient`]: `bg-gradient-base from-${key}-primary-dark light:from-${key}-primary-light to-${key}-secondary-dark light:to-${key}-secondary-light`,
      [`text-${key}-gradient`]: `text-gradient-base bg-${key}-gradient`,
    } as const;
  }, {} as Record<string, string>);
}

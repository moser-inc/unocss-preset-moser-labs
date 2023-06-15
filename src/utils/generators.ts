import { type Theme } from '@unocss/preset-mini';
import { type UserShortcuts } from 'unocss';
import {
  MOSER_LABS_APP_CONFIGS,
  type MoserLabsAppKey,
  type MoserLabsAppThemeKey,
  type MoserLabsAppThemeValue,
} from '@/utils/theme';

const configs = MOSER_LABS_APP_CONFIGS;

export function generateTheme() {
  const colors = configs.reduce((result, { key: appKey, theme }) => {
    return { ...result, [appKey]: theme };
  }, {} as { [K in MoserLabsAppKey]: MoserLabsAppThemeValue });

  return { colors } as const satisfies Theme;
}

export function generateShortcuts(defaultApp?: MoserLabsAppKey) {
  const shortcuts = configs.reduce(
    (shortcutsResult, { key: appKey, theme }) => {
      const isDefaultApp = defaultApp === appKey;

      const themeColorKeys = Object.keys(theme) as MoserLabsAppThemeKey[];

      const colorShortcuts = themeColorKeys.reduce(
        (colorShortcutsResult, themeColorKey) => {
          const bgClass = `bg-${appKey}-${themeColorKey}` as const;
          const textClass = `text-${appKey}-${themeColorKey}` as const;

          const defaultColorShortcuts = isDefaultApp
            ? ({
                [`bg-${themeColorKey}`]: bgClass,
                [`text-${themeColorKey}`]: textClass,
              } as const)
            : undefined;

          return {
            ...colorShortcutsResult,
            [bgClass]: `bg-${appKey}-${themeColorKey}-dark light:bg-${appKey}-${themeColorKey}-light`,
            [textClass]: `text-${appKey}-${themeColorKey}-dark light:text-${appKey}-${themeColorKey}-light`,
            ...defaultColorShortcuts,
          } as const;
        },
        {} as Record<string, string>,
      );

      const bgGradientClass = `bg-${appKey}-gradient` as const;
      const textGradientClass = `text-${appKey}-gradient` as const;

      const fromColor = 'primary' satisfies MoserLabsAppThemeKey;
      const toColor = 'secondary' satisfies MoserLabsAppThemeKey;

      const gradientShortcuts = {
        [bgGradientClass]: `bg-gradient-base from-${appKey}-${fromColor}-dark light:from-${appKey}-${fromColor}-light to-${appKey}-${toColor}-dark light:to-${appKey}-${toColor}-light`,
        [textGradientClass]: `text-gradient-base ${bgGradientClass}`,
      } as const;

      const defaultGradientShortcuts = isDefaultApp
        ? ({
            ['bg-primary-gradient']: bgGradientClass,
            ['text-primary-gradient']: textGradientClass,
          } as const)
        : undefined;

      return {
        ...shortcutsResult,
        ...colorShortcuts,
        ...gradientShortcuts,
        ...defaultGradientShortcuts,
      } as const;
    },
    {} as Record<string, string>,
  );

  return {
    ['bg-gradient-base']: 'bg-gradient-linear bg-gradient-shape-[111deg]',
    ['text-gradient-base']: 'bg-clip-text text-transparent',
    ...shortcuts,
  } as const satisfies UserShortcuts;
}

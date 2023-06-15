import { type Theme } from '@unocss/preset-mini';
import { type UserShortcuts } from 'unocss';
import {
  moserLabsAppsConfig as config,
  type MoserLabsAppsConfig,
  type MoserLabsAppKey,
  type MoserLabsAppThemeKey,
} from '@/utils/theme';

const keys = Object.keys(config) as MoserLabsAppKey[];

const appThemes = keys.map((key) => ({ key, ...config[key] } as const));

export function generateTheme() {
  const colors = appThemes.reduce((result, { key, ...theme }) => {
    return { ...result, [key]: theme };
  }, {} as { [K in MoserLabsAppKey]: MoserLabsAppsConfig[K] });

  return { colors } as const satisfies Theme;
}

export function generateShortcuts(defaultApp?: MoserLabsAppKey) {
  const shortcuts = appThemes.reduce((shortcutsResult, appConfig) => {
    const { key, ...theme } = appConfig;

    const isDefaultApp = defaultApp === key;

    const themeColorKeys = Object.keys(theme) as MoserLabsAppThemeKey[];

    const colorShortcuts = themeColorKeys.reduce(
      (colorShortcutsResult, themeColorKey) => {
        const bgClass = `bg-${key}-${themeColorKey}` as const;
        const textClass = `text-${key}-${themeColorKey}` as const;

        const defaultColorShortcuts = isDefaultApp
          ? ({
              [`bg-${themeColorKey}`]: bgClass,
              [`text-${themeColorKey}`]: textClass,
            } as const)
          : undefined;

        return {
          ...colorShortcutsResult,
          [bgClass]: `bg-${key}-${themeColorKey}-dark light:bg-${key}-${themeColorKey}-light`,
          [textClass]: `text-${key}-${themeColorKey}-dark light:text-${key}-${themeColorKey}-light`,
          ...defaultColorShortcuts,
        } as const;
      },
      {} as Record<string, string>,
    );

    const bgGradientClass = `bg-${key}-gradient` as const;
    const textGradientClass = `text-${key}-gradient` as const;

    const fromColor = 'primary' satisfies MoserLabsAppThemeKey;
    const toColor = 'secondary' satisfies MoserLabsAppThemeKey;

    const gradientShortcuts = {
      [bgGradientClass]: `bg-gradient-base from-${key}-${fromColor}-dark light:from-${key}-${fromColor}-light to-${key}-${toColor}-dark light:to-${key}-${toColor}-light`,
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
  }, {} as Record<string, string>);

  return {
    ['bg-gradient-base']: 'bg-gradient-linear bg-gradient-shape-[111deg]',
    ['text-gradient-base']: 'bg-clip-text text-transparent',
    ...shortcuts,
  } as const satisfies UserShortcuts;
}

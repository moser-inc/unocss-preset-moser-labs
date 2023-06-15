import { type Theme } from '@unocss/preset-mini';
import { type UserShortcuts } from 'unocss';
import {
  moserLabsThemes as themesObj,
  type MoserLabsThemeValue,
  type MoserLabsThemeColor,
  moserLabsAppThemes as appThemesObject,
  type MoserLabsAppThemeKey,
} from '@/utils/theme';

function themeObjectToArray<Themes extends Record<string, MoserLabsThemeValue>>(
  themes: Themes,
) {
  const keys = Object.keys(themes) as (keyof Themes)[];
  return keys.map((key) => ({ key, ...themes[key] } as const));
}

function generateThemeColors<
  Themes extends Record<string, MoserLabsThemeValue>,
>(themes: Themes) {
  return themeObjectToArray(themes).reduce(
    (result, { key, ...theme }) => ({ ...result, [key]: theme }),
    {} as { [K in keyof Themes]: Themes[K] },
  );
}

export function generateTheme() {
  const themeColors = generateThemeColors(themesObj);
  const appThemeColors = generateThemeColors(appThemesObject);

  return {
    colors: {
      ...themeColors,
      ...appThemeColors,
    },
  } as const satisfies Theme;
}

function generateThemeShortcuts<
  Themes extends Record<string, MoserLabsThemeValue>,
>(themes: Themes, defaultTheme?: keyof Themes) {
  return themeObjectToArray(themes).reduce((shortcutsResult, themeItem) => {
    const { key, ...theme } = themeItem;
    const themeKey = key as string;

    const isDefaultApp = defaultTheme === key;

    const themeColorKeys = Object.keys(theme) as MoserLabsThemeColor[];

    const colorShortcuts = themeColorKeys.reduce(
      (colorShortcutsResult, themeColorKey) => {
        const bgClass = `bg-${themeKey}-${themeColorKey}` as const;
        const textClass = `text-${themeKey}-${themeColorKey}` as const;

        const defaultColorShortcuts = isDefaultApp
          ? ({
              [`bg-${themeColorKey}`]: bgClass,
              [`text-${themeColorKey}`]: textClass,
            } as const)
          : undefined;

        return {
          ...colorShortcutsResult,
          [bgClass]: `bg-${themeKey}-${themeColorKey}-dark light:bg-${themeKey}-${themeColorKey}-light`,
          [textClass]: `text-${themeKey}-${themeColorKey}-dark light:text-${themeKey}-${themeColorKey}-light`,
          ...defaultColorShortcuts,
        } as const;
      },
      {} as Record<string, string>,
    );

    const bgGradientClass = `bg-${themeKey}-gradient` as const;
    const textGradientClass = `text-${themeKey}-gradient` as const;

    const fromColor = 'primary' satisfies MoserLabsThemeColor;
    const toColor = 'secondary' satisfies MoserLabsThemeColor;

    const gradientShortcuts = {
      [bgGradientClass]: `bg-gradient-base from-${themeKey}-${fromColor}-dark light:from-${themeKey}-${fromColor}-light to-${themeKey}-${toColor}-dark light:to-${themeKey}-${toColor}-light`,
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
}

export function generateShortcuts(defaultApp?: MoserLabsAppThemeKey) {
  const baseShortcuts = {
    ['bg-gradient-base']: 'bg-gradient-linear bg-gradient-shape-[111deg]',
    ['text-gradient-base']: 'bg-clip-text text-transparent',
  } as const;

  const themeShortcuts = generateThemeShortcuts(themesObj);
  const appThemeShortcuts = generateThemeShortcuts(appThemesObject, defaultApp);

  return {
    ...baseShortcuts,
    ...themeShortcuts,
    ...appThemeShortcuts,
  } as const satisfies UserShortcuts;
}

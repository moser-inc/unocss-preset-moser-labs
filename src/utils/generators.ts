import type { Theme } from '@unocss/preset-wind3';
import type { UserShortcuts } from 'unocss';
import {
  type MoserLabsAppThemeKey,
  type MoserLabsAppThemes,
  type MoserLabsThemeColor,
  type MoserLabsThemeValue,
  moserLabsAppThemes as appThemesObject,
  moserLabsThemes as themesObj,
} from '../theme';

function themeObjectToArray<Themes extends Record<string, MoserLabsThemeValue>>(
  themes: Themes,
) {
  const keys = Object.keys(themes) as (keyof Themes)[];
  return keys.map((key) => ({ key, ...themes[key] }) as const);
}

function generateLabsThemeColors<
  Themes extends Record<string, MoserLabsThemeValue>,
>(themes: Themes) {
  return themeObjectToArray(themes).reduce(
    (result, { key, ...theme }) => ({ ...result, [key]: theme }),
    {} as { [K in keyof Themes]: Themes[K] },
  );
}

export function generateThemeColors() {
  const themeColors = generateLabsThemeColors(themesObj);
  const appThemeColors = generateLabsThemeColors(appThemesObject);

  return {
    ...themeColors,
    ...appThemeColors,
  } as const satisfies Theme['colors'];
}

function generateThemeShortcuts<
  Themes extends Record<string, MoserLabsThemeValue>,
>(themes: Themes, defaultTheme?: keyof Themes) {
  return themeObjectToArray(themes).reduce(
    (shortcutsResult, themeItem) => {
      const { key, ...theme } = themeItem;

      const themeKey = String(key);

      const isDefaultTheme = defaultTheme === key;

      const themeColorKeys = Object.keys(theme) as MoserLabsThemeColor[];

      const colorShortcuts = themeColorKeys.reduce(
        (colorShortcutsResult, themeColorKey) => {
          const bgClass = `bg-${themeKey}-${themeColorKey}` as const;
          const textClass = `text-${themeKey}-${themeColorKey}` as const;

          const defaultColorShortcuts = isDefaultTheme
            ? ({
                [`bg-${themeColorKey}`]: bgClass,
                [`text-${themeColorKey}`]: textClass,
                [`text-${themeColorKey}-text`]: `text-${themeKey}-${themeColorKey}-text`,
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
      const bgGradientReverseClass = `${bgGradientClass}-reverse` as const;
      const textGradientClass = `text-${themeKey}-gradient` as const;
      const textGradientReverseClass = `${textGradientClass}-reverse` as const;

      const fromColor = 'primary' satisfies MoserLabsThemeColor;
      const toColor = 'secondary' satisfies MoserLabsThemeColor;

      const gradientShortcuts = {
        [bgGradientClass]: `bg-gradient-base from-${themeKey}-${fromColor}-dark light:from-${themeKey}-${fromColor}-light to-${themeKey}-${toColor}-dark light:to-${themeKey}-${toColor}-light`,
        [bgGradientReverseClass]: `bg-gradient-base from-${themeKey}-${toColor}-dark light:from-${themeKey}-${toColor}-light to-${themeKey}-${fromColor}-dark light:to-${themeKey}-${fromColor}-light`,
        [textGradientClass]: `text-gradient-base ${bgGradientClass}`,
        [textGradientReverseClass]: `text-gradient-base ${bgGradientReverseClass}`,
      } as const;

      const defaultGradientShortcuts = isDefaultTheme
        ? ({
            ['bg-primary-gradient']: bgGradientClass,
            ['bg-primary-gradient-reverse']: bgGradientReverseClass,
            ['text-primary-gradient']: textGradientClass,
            ['text-primary-gradient-reverse']: textGradientReverseClass,
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
}

const generateIconShortcuts = (
  themes: MoserLabsAppThemes,
  defaultApp?: MoserLabsAppThemeKey,
) => {
  const iconShortcuts = themeObjectToArray(themes).reduce(
    (result, { key }) => ({
      ...result,
      [`i-mli-${key}-badge`]: `i-mli-${key}-badge-dark light:i-mli-${key}-badge-light`,
      [`i-mli-${key}-badge-lg`]: `i-mli-${key}-badge-lg-dark light:i-mli-${key}-badge-lg-light`,
    }),
    {} as Record<string, string>,
  );

  const defaultIconShortcuts = defaultApp
    ? ({
        ['i-mli-app-badge']: `i-mli-${defaultApp}-badge`,
        ['i-mli-app-badge-lg']: `i-mli-${defaultApp}-badge-lg`,
      } as const)
    : undefined;

  return { ...iconShortcuts, ...defaultIconShortcuts } as const;
};

export function generateShortcuts(defaultApp?: MoserLabsAppThemeKey) {
  const baseShortcuts = {
    ['bg-gradient-base']: 'bg-gradient-linear bg-gradient-shape-[111deg]',
    ['text-gradient-base']: 'bg-clip-text text-transparent',
  } as const;

  const themeShortcuts = generateThemeShortcuts(themesObj);
  const appThemeShortcuts = generateThemeShortcuts(appThemesObject, defaultApp);
  const iconShortcuts = generateIconShortcuts(appThemesObject, defaultApp);

  return {
    ...baseShortcuts,
    ...themeShortcuts,
    ...appThemeShortcuts,
    ...iconShortcuts,
  } as const satisfies UserShortcuts;
}

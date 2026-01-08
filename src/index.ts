import { dirname } from 'node:path';
import { fileURLToPath, resolve } from 'node:url';
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';
import {
  type Preset,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
} from 'unocss';
import type { IconsOptions as PresetIconsOptions } from 'unocss/preset-icons';
import type { TypographyOptions as PresetTypographyOptions } from 'unocss/preset-typography';
import type { WebFontsOptions as PresetWebFontsOptions } from 'unocss/preset-web-fonts';
import type { PresetWind4Options, Theme } from 'unocss/preset-wind4';
import { type PresetPrimeOptions, presetPrime } from 'unocss-preset-prime';
import { type MoserLabsAppThemeKey, moserLabsTheme } from './theme';
import { moserLabsPreflights } from './utils/preflights';
import { moserLabsRules } from './utils/rules';
import { moserLabsShortcuts } from './utils/shortcuts';

export interface PresetMoserLabsOptions {
  /**
   * Set the default theme when the application name is not included in the class (e.g. `bg-primary-gradient`).
   */
  defaultApp?: MoserLabsAppThemeKey;
  /**
   * Whether to include Prime themes as a preflight. Requires `defaultApp` to be set.
   *
   * @default false
   */
  preflight?: boolean;
  /**
   * Extend `presetWind4` options.
   *
   * https://unocss.dev/presets/wind4
   */
  extendWind4Options?: PresetWind4Options;
  /**
   * Extend `presetPrime` options.
   *
   * https://github.com/danielwaltz/unocss-preset-prime
   */
  extendPrimeOptions?: PresetPrimeOptions;
  /**
   * Extend `presetIcons` options.
   *
   * https://unocss.dev/presets/icons
   */
  extendIconsOptions?: PresetIconsOptions;
  /**
   * Extend `presetTypography` options.
   *
   * https://unocss.dev/presets/typography
   */
  extendTypographyOptions?: PresetTypographyOptions;
  /**
   * Extend `presetWebFonts` options.
   *
   * https://unocss.dev/presets/web-fonts
   */
  extendWebFontsOptions?: PresetWebFontsOptions;
}

export { Theme };

const _dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url));

/**
 * Shared UnoCSS preset for the Moser Labs suite of applications.
 *
 * Readme: https://github.com/moser-inc/unocss-preset-moser-labs/blob/main/README.md
 *
 * Shortcuts: https://github.com/moser-inc/unocss-preset-moser-labs/blob/main/src/utils/shortcuts.ts
 *
 * ```ts
 * // uno.config.ts
 * import { defineConfig } from 'unocss';
 * import { presetMoserLabs } from '@moser-inc/unocss-preset-moser-labs';
 *
 * export default defineConfig({
 *   presets: [presetMoserLabs({ defaultApp: 'labs' })],
 * });
 * ```
 */
export function presetMoserLabs(options?: PresetMoserLabsOptions): Preset {
  const {
    defaultApp,
    preflight,
    extendWind4Options,
    extendPrimeOptions,
    extendIconsOptions,
    extendTypographyOptions,
    extendWebFontsOptions,
  } = options ?? {};

  if (preflight && !defaultApp) {
    throw new Error(
      '[presetMoserLabs]: `preflight` option requires `defaultApp` to be set.',
    );
  }

  return {
    name: '@moser-inc/unocss-preset-moser-labs',
    presets: [
      presetWind4({
        dark: 'media',
        ...extendWind4Options,
        preflights: {
          reset: false,
          ...extendWind4Options?.preflights,
        },
      }),
      presetPrime({ icons: true, ...extendPrimeOptions }),
      presetIcons({
        ...extendIconsOptions,
        collections: {
          mli: FileSystemIconLoader(resolve(_dirname, 'dist/icons')),
          ...extendIconsOptions?.collections,
        },
        extraProperties: {
          display: 'inline-block',
          'vertical-align': 'middle',
          ...extendIconsOptions?.extraProperties,
        },
      }),
      presetTypography({
        ...extendTypographyOptions,
        colorScheme: {
          body: ['inherit', 'inherit'],
          headings: ['inherit', 'inherit'],
          lead: ['inherit', 'inherit'],
          links: ['inherit', 'inherit'],
          bold: ['inherit', 'inherit'],
          counters: ['inherit', 'inherit'],
          bullets: ['inherit', 'inherit'],
          hr: ['inherit', 'inherit'],
          quotes: ['inherit', 'inherit'],
          'quote-borders': ['inherit', 'inherit'],
          captions: ['inherit', 'inherit'],
          kbd: ['inherit', 'inherit'],
          'kbd-shadows': ['inherit', 'inherit'],
          code: ['inherit', 'inherit'],
          'pre-code': ['inherit', 'inherit'],
          'pre-bg': ['inherit', 'inherit'],
          'th-borders': ['inherit', 'inherit'],
          'td-borders': ['inherit', 'inherit'],
          ...extendTypographyOptions?.colorScheme,
        },
        cssExtend: (theme) => ({
          '*:only-child': {
            'margin-block': '0',
          },
          '*:first-child': {
            'margin-block-start': '0',
          },
          '*:last-child': {
            'margin-block-end': '0',
          },
          ...(typeof extendTypographyOptions?.cssExtend === 'function'
            ? extendTypographyOptions?.cssExtend(theme)
            : extendTypographyOptions?.cssExtend),
        }),
      }),
      presetWebFonts({
        ...extendWebFontsOptions,
        fonts: {
          sans: 'Inter:300,400,500,600,700',
          ...extendWebFontsOptions?.fonts,
        },
      }),
    ],
    theme: moserLabsTheme,
    rules: moserLabsRules,
    shortcuts: moserLabsShortcuts(defaultApp),
    preflights:
      preflight && defaultApp ? moserLabsPreflights(defaultApp) : undefined,
  };
}

export * from './theme';

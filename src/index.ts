import { dirname } from 'node:path';
import { fileURLToPath, resolve } from 'node:url';
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';
import {
  type Preset,
  presetIcons,
  presetTypography,
  presetWind4,
} from 'unocss';
import type { IconsOptions as PresetIconsOptions } from 'unocss/preset-icons';
import type { TypographyOptions as PresetTypographyOptions } from 'unocss/preset-typography';
import type { PresetWind4Options, Theme } from 'unocss/preset-wind4';
import { type PresetPrimeOptions, presetPrime } from 'unocss-preset-prime';
import { type MoserLabsAppThemeKey, moserLabsTheme } from './theme';
import { moserLabsRules } from './utils/rules';
import { moserLabsShortcuts } from './utils/shortcuts';

export interface PresetMoserLabsOptions {
  /**
   * Set the default theme when the application name is not included in the class (e.g. `bg-primary-gradient`).
   */
  defaultApp?: MoserLabsAppThemeKey;
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
    extendWind4Options,
    extendPrimeOptions,
    extendIconsOptions,
    extendTypographyOptions,
  } = options ?? {};

  return {
    name: '@moser-inc/unocss-preset-moser-labs',
    presets: [
      presetWind4({
        dark: 'media',
        preflights: {
          reset: false,
          ...extendWind4Options?.preflights,
        },
        ...extendWind4Options,
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
        ...extendTypographyOptions,
      }),
    ],
    theme: moserLabsTheme,
    rules: moserLabsRules,
    shortcuts: moserLabsShortcuts(defaultApp),
  };
}

export * from './theme';

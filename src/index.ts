import { dirname } from 'node:path';
import { fileURLToPath, resolve } from 'node:url';
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';
import { type Preset, presetIcons, presetWind3 } from 'unocss';
import type { IconsOptions as PresetIconsOptions } from 'unocss/preset-icons';
import type { PresetWind3Options, Theme } from 'unocss/preset-wind3';
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
   * Extend `presetWind3` options.
   *
   * https://unocss.dev/presets/wind
   */
  extendWind3Options?: PresetWind3Options;
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
}

const _dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url));

export function presetMoserLabs(
  options?: PresetMoserLabsOptions,
): Preset<Theme> {
  const {
    defaultApp,
    extendWind3Options,
    extendPrimeOptions,
    extendIconsOptions,
  } = options ?? {};

  return {
    name: '@moser-inc/unocss-preset-moser-labs',
    presets: [
      presetWind3({ dark: 'media', ...extendWind3Options }),
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
    ],
    theme: moserLabsTheme,
    rules: moserLabsRules,
    shortcuts: moserLabsShortcuts(defaultApp),
  };
}

export * from './theme';

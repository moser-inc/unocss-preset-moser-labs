import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';
import { presetWind, presetIcons, type Preset } from 'unocss';
import { type IconsOptions as PresetIconsOptions } from 'unocss/preset-icons';
import { type PresetWindOptions, type Theme } from 'unocss/preset-wind';
import {
  presetPrime,
  primeThemeColors,
  type PresetPrimeOptions,
} from 'unocss-preset-prime';
import { moserLabsRules } from '@/utils/rules';
import { moserLabsShortcuts } from '@/utils/shortcuts';
import { moserLabsTheme, type MoserLabsAppThemeKey } from '@/utils/theme';

export interface PresetMoserLabsOptions {
  /**
   * Set the default theme when the application name is not included in the class (e.g. `bg-primary-gradient`).
   */
  defaultApp?: MoserLabsAppThemeKey;
  /**
   * Extend `presetWind` options.
   *
   * https://unocss.dev/presets/wind
   */
  extendWindOptions?: PresetWindOptions;
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

export function presetMoserLabs(
  options?: PresetMoserLabsOptions,
): Preset<Theme> {
  const {
    defaultApp,
    extendWindOptions,
    extendPrimeOptions,
    extendIconsOptions,
  } = options ?? {};

  return {
    name: '@moser-inc/unocss-preset-moser-labs',
    presets: [
      presetWind({ dark: 'media', ...extendWindOptions }),
      presetPrime(extendPrimeOptions),
      presetIcons({
        ...extendIconsOptions,
        collections: {
          app: FileSystemIconLoader('src/icons/app'),
          logo: FileSystemIconLoader('src/icons/logo'),
          ...extendIconsOptions?.collections,
        },
        extraProperties: {
          display: 'inline-block',
          'vertical-align': 'middle',
          scale: '1.75',
          ...extendIconsOptions?.extraProperties,
        },
      }),
    ],
    theme: moserLabsTheme,
    rules: moserLabsRules,
    shortcuts: moserLabsShortcuts(defaultApp),
  };
}

export { primeThemeColors };
export * from '@/utils/theme';

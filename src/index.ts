import { resolve } from 'node:path';
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';
import { presetUno, presetIcons, type Preset } from 'unocss';
import { type IconsOptions as PresetIconsOptions } from 'unocss/preset-icons';
import { type PresetUnoOptions, type Theme } from 'unocss/preset-uno';
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
   * Extend `presetUno` options.
   *
   * https://unocss.dev/presets/uno
   */
  extendUnoOptions?: PresetUnoOptions;
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
    extendUnoOptions,
    extendPrimeOptions,
    extendIconsOptions,
  } = options ?? {};

  return {
    name: '@moser-inc/unocss-preset-moser-labs',
    presets: [
      presetUno({ dark: 'media', ...extendUnoOptions }),
      presetPrime({ icons: false, ...extendPrimeOptions }),
      presetIcons({
        ...extendIconsOptions,
        collections: {
          mli: FileSystemIconLoader(resolve(__dirname, './icons')),
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

export { primeThemeColors };
export * from '@/utils/theme';

import { presetWind, presetIcons, type Preset } from 'unocss';
import { type IconsOptions as PresetIconsOptions } from 'unocss/preset-icons';
import { type PresetWindOptions } from 'unocss/preset-wind';
import {
  presetPrime,
  primeThemeColors,
  type Options as PresetPrimeOptions,
} from 'unocss-preset-prime';
import { generateTheme, generateShortcuts } from '@/utils/generators';

export interface PresetMoserLabsOptions {
  /**
   * Extend `presetWind` options
   */
  extendWindOptions?: PresetWindOptions;
  /**
   * Extend `presetPrime` options
   */
  extendPrimeOptions?: PresetPrimeOptions;
  /**
   * Extend `presetIcons` options
   */
  extendIconsOptions?: PresetIconsOptions;
}

export const moserLabsTheme = generateTheme();

const moserLabsShortcuts = generateShortcuts();

export function presetMoserLabs(options?: PresetMoserLabsOptions): Preset {
  const { extendWindOptions, extendPrimeOptions, extendIconsOptions } =
    options ?? {};

  return {
    name: 'moser-labs',
    presets: [
      presetWind({ dark: 'media', ...extendWindOptions }),
      presetPrime(extendPrimeOptions),
      presetIcons({
        ...extendIconsOptions,
        collections: {
          prime: () =>
            import('@iconify-json/prime/icons.json', {
              assert: { type: 'json' },
            }).then((i) => i.default),
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
    shortcuts: moserLabsShortcuts,
  };
}

export { primeThemeColors };
export * from '@/utils/theme';

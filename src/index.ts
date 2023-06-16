import { presetWind, presetIcons, type Preset } from 'unocss';
import { type IconsOptions as PresetIconsOptions } from 'unocss/preset-icons';
import { type PresetWindOptions, type Theme } from 'unocss/preset-wind';
import {
  presetPrime,
  primeThemeColors,
  type PresetPrimeOptions,
} from 'unocss-preset-prime';
import { generateTheme, generateShortcuts } from '@/utils/generators';
import { type MoserLabsAppThemeKey } from '@/utils/theme';

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

export const moserLabsTheme = generateTheme();

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
    shortcuts: [
      [/^pi-(.*?)$/, ([, d]) => `i-prime-${d}`],
      generateShortcuts(defaultApp),
    ],
  };
}

export { primeThemeColors };
export * from '@/utils/theme';

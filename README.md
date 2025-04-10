# UnoCSS Preset Moser Labs

Shared UnoCSS preset for the Moser Labs suite of applications.

<img src="preview.png" alt="Example of moser labs app classes in use" />

## Install

```bash
# npm
npm i -D @moser-inc/unocss-preset-moser-labs

# yarn
yarn add -D @moser-inc/unocss-preset-moser-labs

# pnpm
pnpm i -D @moser-inc/unocss-preset-moser-labs
```

## Initialize

```ts
// uno.config.ts

import { defineConfig } from 'unocss';
import { presetMoserLabs } from '@moser-inc/unocss-preset-moser-labs';

export default defineConfig({
  presets: [presetMoserLabs()], // No default
  presets: [presetMoserLabs({ defaultApp: 'wellness' })], // With default

  // Optionally include processing internal Prime components for utility
  // classes and icons
  content: {
    pipeline: {
      include: [
        /(.*\/)primereact(.*)\.(c|m)?(js)(x?)$/, // PrimeReact Components
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/, // Default
      ],
    },
  },
});
```

## Options

```ts
presetMoserLabs({
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
});
```

## Semantic Colors

This preset exports helpful types and the generated theme colors directly for extending the theme to support application specific semantic colors.

> :warning: For usage at runtime, use the dedicated export to prevent loading core UnoCSS logic: `import { primeThemeColors } from '@moser-inc/unocss-preset-moser-labs/theme'`.

```ts
// uno.config.ts

import { defineConfig } from 'unocss';
import { presetMoserLabs, primeThemeColors } from '@moser-inc/unocss-preset-moser-labs';

export default defineConfig({
  presets: [presetMoserLabs()],
  theme: {
    colors: {
      success: primeThemeColors.green[500],
      warning: primeThemeColors.orange[500],
      error: primeThemeColors.red[500],
    },
  },
});
```

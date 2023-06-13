# UnoCSS Preset Moser Labs

Shared UnoCSS preset for the Moser Labs suite of applications.

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
# uno.config.ts

import { defineConfig } from 'unocss';
import { presetMoserLabs } from '@moser-inc/unocss-preset-moser-labs';

export default defineConfig({
  presets: [presetMoserLabs()],

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
  /** Extend `presetWind` options */
  extendWindOptions?: PresetWindOptions,
  /** Extend `presetPrime` options */
  extendPrimeOptions?: PresetPrimeOptions,
  /** Extend `presetIcons` options */
  extendIconsOptions?: PresetIconsOptions,
});
```

## Extending

This preset exports helpful types and the generated theme colors directly for extending the theme to support application specific semantic colors.

```ts
# uno.config.ts

import { defineConfig } from 'unocss';
import { presetMoserLabs, primeThemeColors } from '@moser-inc/unocss-preset-moser-labs';

export default defineConfig({
  presets: [presetMoserLabs()],
  theme: {
    colors: {
      success: primeThemeColors.green.base,
      warning: primeThemeColors.orange.base,
      error: primeThemeColors.red.base,
    },
  },
});
```

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
});
```

## Options

```ts
presetMoserLabs({
  /* Use a preflight to set theme colors and font-family on body. Defaults to true. */
  preflight: true,
});
```

## Extending

This preset exports helpful types and the generated theme colors directly for extending the theme to support application specific semantic colors.

```ts
# uno.config.ts

import { defineConfig, presetUno } from 'unocss';
import { presetPrime, primeThemeColors } from 'unocss-preset-prime';

export default defineConfig({
  presets: [presetUno(), presetPrime()],
  theme: {
    colors: {
      success: primeThemeColors.green.base,
      error: primeThemeColors.red.base,
    },
  },
});
```

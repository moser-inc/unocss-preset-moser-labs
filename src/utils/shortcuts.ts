import { type UserShortcuts } from 'unocss';
import { type Theme } from 'unocss/preset-wind';
import { generateShortcuts } from '@/utils/generators';
import { type MoserLabsAppThemeKey } from '@/utils/theme';

export function moserLabsShortcuts(defaultApp?: MoserLabsAppThemeKey) {
  return [
    [/^pi-(.*?)$/, ([, d]) => `i-prime-${d} i-scale-175`],
    [/^mli-(.*?)$/, ([, d]) => `i-mli-${d} i-scale-175`],
    generateShortcuts(defaultApp),
  ] satisfies UserShortcuts<Theme>;
}

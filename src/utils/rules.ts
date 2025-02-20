import { h } from '@unocss/preset-mini/utils';
import type { Rule, RuleContext } from 'unocss';
import type { Theme } from 'unocss/preset-wind3';

export const moserLabsRules = [
  [
    /^grid-(cols|rows)-(fit|fill)-(.+)$/,
    ([, d, m, s]: string[], { theme }: RuleContext<Theme>) => {
      const directions: Record<string, string> = {
        cols: 'columns',
        rows: 'rows',
      };

      const modes: Record<string, string> = {
        fit: 'auto-fit',
        fill: 'auto-fill',
      };

      const wv = theme.width?.[s];
      const sv = theme.spacing?.[s];
      const fbv = h.bracket.cssvar.global.rem(s);
      const v = wv ?? sv ?? fbv;

      if (v === null || v === undefined) return;

      return {
        [`grid-template-${directions[d]}`]: `repeat(${modes[m]}, minmax(min(100%, ${v}), 1fr))`,
      };
    },
    {
      autocomplete: [
        'grid-(cols|rows)-(fit|fill)-$width',
        'grid-(cols|rows)-(fit|fill)-<num>',
      ],
    },
  ],
  [
    /^i-scale-(\d+)$/,
    ([, b]: string[]) => {
      const v = h.bracket.cssvar.fraction.percent(b);

      if (v === null || v === undefined) return;

      return { scale: v };
    },
    {
      autocomplete: 'i-scale-<num>',
    },
  ],
] satisfies Rule<Theme>[];

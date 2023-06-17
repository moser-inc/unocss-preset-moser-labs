import { type RuleContext, type Rule } from 'unocss';
import { type Theme } from 'unocss/preset-wind';

const directions: Record<string, string> = {
  cols: 'columns',
  rows: 'rows',
};

const modes: Record<string, string> = {
  fit: 'auto-fit',
  fill: 'auto-fill',
};

function handleAutoGrid([, d, m, s]: string[], { theme }: RuleContext<Theme>) {
  const isUnitNumber = /^\d+$/.test(s);
  const v = theme.width?.[s] ?? isUnitNumber ? `${s}rem` : s;
  if (!v) return;

  return {
    [`grid-template-${directions[d]}`]: `repeat(${modes[m]}, minmax(min(100%, ${v}), 1fr))`,
  };
}

export const moserLabsRules = [
  [/^grid-(cols|rows)-(fit|fill)-(.+)$/, handleAutoGrid],
] satisfies Rule<Theme>[];

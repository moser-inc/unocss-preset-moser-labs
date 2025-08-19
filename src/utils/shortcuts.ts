import type { UserShortcuts } from 'unocss';
import type { Theme } from 'unocss/preset-wind4';
import type { MoserLabsAppThemeKey } from '../theme';
import { generateShortcuts } from '../utils/generators';

export function moserLabsShortcuts(defaultApp?: MoserLabsAppThemeKey) {
  return [
    generateShortcuts(defaultApp),
    [/^mli-(.*?)$/, ([, d]) => `i-mli-${d} i-scale-prime`],
    {
      'min-h-viewport': 'min-h-full min-h-screen min-h-100dvh',
      'labs-code':
        'inline-block ws-nowrap rounded-lg bg-card p-inline-1 font-mono before:hidden after:hidden',
      'labs-content': 'labs-content-max labs-content-padding',
      'labs-content-max': 'w-full max-w-6xl mx-auto',
      'labs-content-padding': 'p-6 sm:p-8',
      'labs-layout': 'min-h-viewport flex bg-card',
      'labs-layout-header': 'h-auto flex items-center gap-4 p-4 sm:h-20',
      'labs-layout-header-actions': 'flex items-center gap-4',
      'labs-layout-header-content': 'mr-auto flex items-end gap-2',
      'labs-layout-header-title':
        'm-0 text-8 text-primary-gradient leading-tight',
      'labs-layout-header-title-link':
        'inline-block text-inherit decoration-none',
      'labs-layout-header-subtitle': 'm-0 text-sm leading-loose',
      'labs-layout-nav':
        'sticky top-0 h-full h-screen h-100dvh flex shrink flex-col gap-2 overflow-y-auto p-3 transition-all',
      'labs-layout-nav-closed': 'min-w-20! w-20!',
      'labs-layout-nav-open': 'min-w-62! w-62!',
      'labs-layout-nav-button': 'min-h-14 min-w-14 h-14! w-14!',
      'labs-layout-nav-icon': 'i-scale-175! min-w-1em text-inherit',
      'labs-layout-nav-menu':
        'shrink w-auto! min-w-auto! border-0! bg-transparent! py-0!',
      'labs-layout-nav-menu-list': 'flex flex-col gap-2',
      'labs-layout-nav-menu-list-item':
        'h-14 gap-6 text-surface-text b-0! rounded-full! text-left!',
      'labs-layout-nav-menu-list-item-active':
        'bg-primary! text-primary-text! hover:bg-primary-600!',
      'labs-layout-nav-mobile': 'fixed! bottom-4 right-4 z-2',
      'labs-layout-main': 'min-w-0 flex grow flex-col',
      'labs-layout-main-content':
        'relative flex grow flex-col overflow-hidden bg-ground pb-20 text-surface-text sm:rounded-tl-3xl sm:pb-0',
      'labs-main': 'flex grow flex-col',
      'labs-main-center': 'labs-main items-center justify-center',
      'labs-mask': 'backdrop-blur-5',
      'labs-prose':
        'text-surface-text-secondary prose prose-a:text-primary prose-blockquote:border-solid prose-blockquote:border-current prose-blockquote:border-is-3 prose-code:labs-code [&_h1>a,&_h2>a,&_h3>a,&_h4>a,&_h5>a,&_h6>a]:text-unset prose-pre:font-mono text-pretty',
    },
  ] satisfies UserShortcuts<Theme>;
}

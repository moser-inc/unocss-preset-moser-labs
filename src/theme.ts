import type { Theme } from '@unocss/preset-wind4';
import { primeThemeColors } from 'unocss-preset-prime/theme';
import { generateThemeColors } from './utils/generators';

export { primeThemeColors };

export const moserLabsThemes = {
  aero: {
    primary: {
      dark: primeThemeColors.blue[200],
      light: primeThemeColors.blue[500],
      text: primeThemeColors.surface.ground,
    },
    secondary: {
      dark: primeThemeColors.blue[500],
      light: primeThemeColors.blue[700],
      text: primeThemeColors.surface.ground,
    },
  },
  eventide: {
    primary: {
      dark: primeThemeColors.purple[300],
      light: primeThemeColors.purple[600],
      text: primeThemeColors.surface.ground,
    },
    secondary: {
      dark: primeThemeColors.pink[300],
      light: primeThemeColors.pink[600],
      text: primeThemeColors.surface.ground,
    },
  },
  lemonade: {
    primary: {
      dark: primeThemeColors.yellow[300],
      light: primeThemeColors.yellow[500],
      text: primeThemeColors.surface.ground,
    },
    secondary: {
      dark: primeThemeColors.pink[300],
      light: primeThemeColors.pink[500],
      text: primeThemeColors.surface.ground,
    },
  },
  peaches: {
    primary: {
      dark: primeThemeColors.orange[300],
      light: primeThemeColors.orange[500],
      text: primeThemeColors.surface.ground,
    },
    secondary: {
      dark: primeThemeColors.yellow[200],
      light: primeThemeColors.yellow[500],
      text: primeThemeColors.surface.ground,
    },
  },
  razzmatazz: {
    primary: {
      dark: '#dc19a4',
      light: '#a51080',
      text: primeThemeColors.surface.ground,
    },
    secondary: {
      dark: primeThemeColors.blue[500],
      light: primeThemeColors.blue[700],
      text: primeThemeColors.surface.ground,
    },
  },
  sapphire: {
    primary: {
      dark: primeThemeColors.blue[300],
      light: primeThemeColors.blue[700],
      text: primeThemeColors.surface.ground,
    },
    secondary: {
      dark: primeThemeColors.blue[500],
      light: primeThemeColors.indigo[900],
      text: primeThemeColors.surface.ground,
    },
  },
  sherbet: {
    primary: {
      dark: primeThemeColors.pink[200],
      light: primeThemeColors.pink[500],
      text: primeThemeColors.surface.ground,
    },
    secondary: {
      dark: primeThemeColors.orange[300],
      light: primeThemeColors.orange[500],
      text: primeThemeColors.surface.ground,
    },
  },
  sylvian: {
    primary: {
      dark: primeThemeColors.cyan[300],
      light: primeThemeColors.cyan[500],
      text: primeThemeColors.surface.ground,
    },
    secondary: {
      dark: primeThemeColors.green[300],
      light: primeThemeColors.green[500],
      text: primeThemeColors.surface.ground,
    },
  },
  tortuga: {
    primary: {
      dark: primeThemeColors.green[300],
      light: primeThemeColors.green[600],
      text: primeThemeColors.surface.ground,
    },
    secondary: {
      dark: primeThemeColors.teal[500],
      light: primeThemeColors.teal[800],
      text: primeThemeColors.surface.ground,
    },
  },
  vista: {
    primary: {
      dark: primeThemeColors.indigo[300],
      light: primeThemeColors.indigo[500],
      text: primeThemeColors.surface.ground,
    },
    secondary: {
      dark: primeThemeColors.blue[500],
      light: primeThemeColors.blue[500],
      text: primeThemeColors.surface.ground,
    },
  },
  zomp: {
    primary: {
      dark: primeThemeColors.teal[300],
      light: primeThemeColors.teal[600],
      text: primeThemeColors.surface.ground,
    },
    secondary: {
      dark: primeThemeColors.blue[400],
      light: primeThemeColors.blue[600],
      text: primeThemeColors.surface.ground,
    },
  },
} as const;

export type MoserLabsThemes = typeof moserLabsThemes;
export type MoserLabsThemeKey = keyof MoserLabsThemes;
export type MoserLabsThemeValue = MoserLabsThemes[MoserLabsThemeKey];
export type MoserLabsThemeColor = keyof MoserLabsThemeValue;

export const moserLabsThemeKeys = Object.keys(
  moserLabsThemes,
) as MoserLabsThemeKey[];

export const moserLabsAppThemes = {
  clearpath: moserLabsThemes.sapphire,
  eats: moserLabsThemes.lemonade,
  engagements: moserLabsThemes.aero,
  idealab: moserLabsThemes.peaches,
  labs: moserLabsThemes.razzmatazz,
  roomgrabber: moserLabsThemes.sylvian,
  spenio: moserLabsThemes.tortuga,
  tickets: moserLabsThemes.sherbet,
  timetracking: moserLabsThemes.zomp,
  training: moserLabsThemes.eventide,
  wellness: moserLabsThemes.vista,
} as const satisfies Record<string, MoserLabsThemeValue>;

export type MoserLabsAppThemes = typeof moserLabsAppThemes;
export type MoserLabsAppThemeKey = keyof MoserLabsAppThemes;
export type MoserLabsAppThemeValue = MoserLabsAppThemes[MoserLabsAppThemeKey];

export const moserLabsAppThemeKeys = Object.keys(
  moserLabsAppThemes,
) as MoserLabsAppThemeKey[];

export const moserLabsTheme = {
  colors: generateThemeColors(),
} as const satisfies Theme;

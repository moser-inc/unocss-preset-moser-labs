import { primeThemeColors } from 'unocss-preset-prime';

export const moserLabsAppsConfig = {
  eats: {
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
  engagements: {
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
  idealab: {
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
  ['room-grabber']: {
    primary: {
      dark: primeThemeColors.cyan[300],
      light: primeThemeColors.cyan[600],
      text: primeThemeColors.surface.ground,
    },
    secondary: {
      dark: primeThemeColors.green[300],
      light: primeThemeColors.green[600],
      text: primeThemeColors.surface.ground,
    },
  },
  spenio: {
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
  tickets: {
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
  ['time-tracking']: {
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
  training: {
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
  wellness: {
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
} as const;

export type MoserLabsAppsConfig = typeof moserLabsAppsConfig;
export type MoserLabsAppKey = keyof MoserLabsAppsConfig;
export type MoserLabsAppTheme = MoserLabsAppsConfig[MoserLabsAppKey];
export type MoserLabsAppThemeKey = keyof MoserLabsAppTheme;
export type MoserLabsAppThemeValue = MoserLabsAppTheme[MoserLabsAppThemeKey];

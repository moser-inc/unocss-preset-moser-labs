import { primeThemeColors } from 'unocss-preset-prime';

export const MOSER_LABS_APP_CONFIGS = [
  {
    key: 'eats',
    theme: {
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
  },
  {
    key: 'engagements',
    theme: {
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
  },
  {
    key: 'idealab',
    theme: {
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
  },
  {
    key: 'roomgrabber',
    theme: {
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
  },
  {
    key: 'spenio',
    theme: {
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
  },
  {
    key: 'tickets',
    theme: {
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
  },
  {
    key: 'timetracking',
    theme: {
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
  },
  {
    key: 'training',
    theme: {
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
  },
  {
    key: 'wellness',
    theme: {
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
  },
] as const;

export type MoserLabsAppConfigs = typeof MOSER_LABS_APP_CONFIGS;
export type MoserLabsAppConfig = MoserLabsAppConfigs[number];
export type MoserLabsAppKey = MoserLabsAppConfig['key'];
export type MoserLabsAppTheme = MoserLabsAppConfig['theme'];
export type MoserLabsAppThemeKey = keyof MoserLabsAppTheme;
export type MoserLabsAppThemeValue = MoserLabsAppTheme[MoserLabsAppThemeKey];

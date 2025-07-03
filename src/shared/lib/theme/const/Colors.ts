export type ColorNamesType = keyof typeof Colors.light &
  keyof typeof Colors.dark;

export const palette = {
  white: "#FFFFFF",
  black: "#000000",
  gray100: "#F8F9FA",
  gray200: "#EFEFEF",
  gray400: "#CED4DA",
  gray600: "#6C757D",
  gray700: "#3A3A3C",
  gray800: "#1C1C1E",
  blue: "#007AFF",
  red: "#FF453A",
  green: "#34C759",
  yellow: "#FFD60A",
};

export const lightTheme = {
  surface: palette.gray100,
  onSurface: palette.black,
  muted: palette.gray600,
  border: palette.gray400,
  accent: palette.blue,
  danger: palette.red,
  success: palette.green,
  background: palette.white,
};

export const darkTheme = {
  surface: palette.gray800,
  onSurface: palette.white,
  muted: palette.gray400,
  border: palette.gray700,
  accent: palette.blue,
  danger: palette.red,
  success: palette.green,
  background: palette.gray700,
};

export const Colors = {
  light: lightTheme,
  dark: darkTheme,
};

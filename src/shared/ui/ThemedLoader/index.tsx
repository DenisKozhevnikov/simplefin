import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import { ColorNamesType, useThemeColor } from "../../lib/theme";

type ThemedLoaderProps = ActivityIndicatorProps & {
  lightColor?: string;
  darkColor?: string;
  colorName?: ColorNamesType;
};

export const ThemedLoader = ({
  size,
  lightColor,
  darkColor,
  colorName = "accent",
}: ThemedLoaderProps) => {
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    colorName
  );

  return <ActivityIndicator size={size} color={color} />;
};

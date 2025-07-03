import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ComponentProps } from "react";
import { ColorNamesType, useThemeColor } from "../../lib/theme";
import { Units } from "../../lib/theme/const/Units";

type MaterialIconName = ComponentProps<typeof MaterialIcons>["name"];

type ThemedIconProps = {
  name: MaterialIconName;
  size?: number;
  lightColor?: string;
  darkColor?: string;
  colorName?: ColorNamesType;
};

export const ThemedIcon = ({
  lightColor,
  darkColor,
  colorName = "onSurface",
  name,
  size = Units.s24,
}: ThemedIconProps) => {
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    colorName
  );

  return <MaterialIcons name={name} size={size} color={color} />;
};

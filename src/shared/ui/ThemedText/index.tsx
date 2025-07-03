import { Text, TextProps, TextStyle } from "react-native";
import { useThemeColor } from "../../lib/theme";
import { ColorNamesType } from "../../lib/theme/const/Colors";
import { FontSize } from "../../lib/theme/utils/typography";
import { getTypographyStyles } from "./utils";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  colorName?: ColorNamesType;
  typography?: FontSize;
  weight?: TextStyle["fontWeight"];
};

export const ThemedText = ({
  style,
  lightColor,
  darkColor,
  colorName = "onSurface",
  typography = "text12",
  weight,
  ...rest
}: ThemedTextProps) => {
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    colorName
  );

  const typographyStyles = getTypographyStyles(typography, style);

  return (
    <Text
      style={[
        {
          color,
          fontWeight: weight,
          ...typographyStyles,
        },
        style,
      ]}
      {...rest}
    />
  );
};

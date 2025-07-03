import { PropsWithChildren } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { useThemeColor } from "../../lib/theme";
import { Units } from "../../lib/theme/const/Units";
import { ThemedText, ThemedTextProps } from "../ThemedText";

type ButtonSize = "small" | "medium" | "large";

export type ThemedButtonProps = PropsWithChildren &
  TouchableOpacityProps & {
    textProps?: ThemedTextProps;
    size?: ButtonSize;
  };

export const ThemedButton = ({
  size = "medium",
  textProps,
  children,
  style,
  ...rest
}: ThemedButtonProps) => {
  const backgroundColor = useThemeColor({}, "border");

  const sizeStyle = getSizeStyle(size);

  return (
    <TouchableOpacity
      style={[styles.btn, sizeStyle.button, { backgroundColor }, style]}
      {...rest}
    >
      <ThemedText weight={600} typography={sizeStyle.typography} {...textProps}>
        {children}
      </ThemedText>
    </TouchableOpacity>
  );
};

const getSizeStyle = (
  size: ButtonSize
): {
  button: ViewStyle;
  typography: ThemedTextProps["typography"];
} => {
  switch (size) {
    case "small":
      return {
        button: {
          paddingVertical: Units.s6,
          paddingHorizontal: Units.s12,
          minHeight: Units.s32,
        },
        typography: "text14",
      };
    case "large":
      return {
        button: {
          paddingVertical: Units.s18,
          paddingHorizontal: Units.s20,
          minHeight: Units.s52,
        },
        typography: "text18",
      };
    case "medium":
    default:
      return {
        button: {
          paddingVertical: Units.s14,
          paddingHorizontal: Units.s16,
          minHeight: Units.s44,
        },
        typography: "text16",
      };
  }
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: Units.s12,
    alignItems: "center",
    justifyContent: "center",
  },
});

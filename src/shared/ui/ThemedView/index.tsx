import React, { forwardRef } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { ColorNamesType, useThemeColor } from "../../lib/theme";

export type ThemedViewProps<T extends React.ElementType = typeof View> = {
  as?: T;
  lightColor?: string;
  darkColor?: string;
  colorName?: ColorNamesType;
  style?: StyleProp<ViewStyle>;
} & Omit<React.ComponentPropsWithoutRef<T>, "style">;

export const ThemedView = forwardRef(
  <T extends React.ElementType = typeof View>(
    {
      as,
      style,
      lightColor,
      darkColor,
      colorName = "background",
      ...rest
    }: ThemedViewProps<T>,
    ref: React.Ref<any>
  ) => {
    const Component = as || View;
    const backgroundColor = useThemeColor(
      { light: lightColor, dark: darkColor },
      colorName
    );

    return (
      <Component ref={ref} style={[{ backgroundColor }, style]} {...rest} />
    );
  }
);

ThemedView.displayName = "ThemedView";

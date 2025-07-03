import React, { forwardRef } from "react";
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInput,
  TextInputProps,
} from "react-native";
import { useTheme, useThemeColor } from "../../lib/theme";
import { Units } from "../../lib/theme/const/Units";

type ThemedInputProps = TextInputProps;

export const ThemedInput = forwardRef<RNTextInput, ThemedInputProps>(
  ({ style, ...rest }, ref) => {
    const { theme } = useTheme();
    const selectionColor = useThemeColor({}, "accent");
    const cursorColor = useThemeColor({}, "accent");
    const placeholderTextColor = useThemeColor({}, "muted");
    const backgroundColor = useThemeColor({}, "surface");
    const color = useThemeColor({}, "onSurface");

    return (
      <TextInput
        ref={ref}
        autoCorrect={false}
        selectionColor={selectionColor}
        cursorColor={cursorColor}
        placeholderTextColor={placeholderTextColor}
        keyboardAppearance={theme}
        spellCheck={false}
        textAlign="left"
        style={[styles.input, style, { backgroundColor, color }]}
        {...rest}
      />
    );
  }
);

ThemedInput.displayName = "ThemedInput";

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: Units.s12,
    height: Units.s48,
    borderRadius: Units.s12,
    fontSize: Units.s15,
    fontWeight: "500",
  },
});

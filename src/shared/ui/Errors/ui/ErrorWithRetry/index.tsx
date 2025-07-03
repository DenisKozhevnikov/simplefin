import { Units } from "@Shared/lib/theme";
import { Stack } from "@Shared/ui/Spacing";
import { ThemedButton } from "@Shared/ui/ThemedButton";
import { ThemedText } from "@Shared/ui/ThemedText";
import { StyleSheet, View } from "react-native";

type ErrorWithRetryProps = {
  errorText?: string;
  buttonText?: string;
  onPress: () => void;
};

export const ErrorWithRetry = ({
  errorText = "Failed to load.",
  buttonText = "Retry",
  onPress,
}: ErrorWithRetryProps) => {
  return (
    <View style={styles.container}>
      <ThemedText colorName="danger" style={styles.text}>
        {errorText}
      </ThemedText>
      <Stack size={4} />
      <ThemedButton size="small" onPress={onPress}>
        {buttonText}
      </ThemedButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: Units.s64,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});

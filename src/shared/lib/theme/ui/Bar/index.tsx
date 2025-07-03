import { ThemedView } from "@Shared/ui";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Bar = () => {
  const insets = useSafeAreaInsets();

  return <ThemedView style={{ height: insets.top }} />;
};

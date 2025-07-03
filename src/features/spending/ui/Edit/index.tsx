import { Units } from "@Shared/lib/theme/const/Units";
import { ThemedIcon } from "@Shared/ui";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

export const SpendingEdit = () => {
  const handlePressEdit = () => {
    router.navigate("/(transactions)/limit");
  };
  return (
    <TouchableOpacity onPress={handlePressEdit} hitSlop={Units.s10}>
      <ThemedIcon name="edit" size={Units.s12} />
    </TouchableOpacity>
  );
};

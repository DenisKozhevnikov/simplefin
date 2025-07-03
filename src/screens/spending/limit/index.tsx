import { useUpdateSpendingLimit } from "@Entities/settings";
import { Units } from "@Shared/lib/theme/const/Units";
import {
  ModalBottomSheet,
  Stack,
  ThemedButton,
  ThemedInput,
  ThemedLoader,
  ThemedText,
} from "@Shared/ui";
import { TitleWithClose } from "@Shared/ui/Modal/ui/TitleWithClose";
import { Decimal } from "decimal.js";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

export const SpendingLimitScreen = () => {
  const [limit, setLimit] = useState("");
  const [error, setError] = useState<string | null>(null);

  const updateLimit = useUpdateSpendingLimit();

  const handleChangeText = (text: string) => {
    const normalized = text.replace(",", ".");
    setLimit(normalized);

    try {
      const decimal = new Decimal(normalized);
      if (!decimal.isPositive() || decimal.isZero()) {
        setError("Limit must be greater than 0");
      } else {
        setError(null);
      }
    } catch {
      setError("Limit must be a valid number");
    }
  };

  const saveLimit = async (value: number) => {
    try {
      setError(null);
      await updateLimit.mutateAsync(value);
      setLimit("");
      router.back();
    } catch {
      setError("Failed to update the limit. Please try again.");
    }
  };

  const handleSubmit = async () => {
    try {
      const decimal = new Decimal(limit);
      if (!decimal.isPositive() || decimal.isZero()) {
        setError("Limit must be greater than 0");
        return;
      }

      saveLimit(decimal.toNumber());
    } catch {
      setError("Limit must be a valid number");
    }
  };

  return (
    <ModalBottomSheet>
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <Stack size={28} />
        <TitleWithClose title="Update limit" />
        <Stack size={24} />
        <ThemedInput
          autoFocus
          keyboardType="numeric"
          placeholder="Enter limit"
          value={limit}
          onChangeText={handleChangeText}
          onSubmitEditing={handleSubmit}
          submitBehavior="submit"
        />
        {!!error && (
          <>
            <Stack size={4} />
            <ThemedText colorName="danger" typography="text12">
              {error}
            </ThemedText>
          </>
        )}
        <Stack size={16} />
        <ThemedButton
          disabled={!limit || updateLimit.isPending}
          onPress={handleSubmit}
        >
          {updateLimit.isPending ? <ThemedLoader /> : "Update"}
        </ThemedButton>
        <Stack size={24} />
      </ScrollView>
    </ModalBottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Units.s16,
  },
});

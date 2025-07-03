import { useSpendingLimit } from "@Entities/settings";
import { useMonthlyTotal } from "@Entities/transactions";
import { formatAmount } from "@Shared/lib/numbers";
import { Units } from "@Shared/lib/theme/const/Units";
import {
  Queue,
  Stack,
  ThemedLoader,
  ThemedProgress,
  ThemedText,
  ThemedView,
} from "@Shared/ui";
import { ErrorWithRetry } from "@Shared/ui/Errors";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SpendingEdit } from "../Edit";

export const SpendingLimit = () => {
  const [year] = useState(new Date().getFullYear());
  const [month] = useState(new Date().getMonth());

  const total = useMonthlyTotal(year, month);
  const limit = useSpendingLimit();
  const isError = total.isError || limit.isError;

  const isOverBudget =
    total.data !== undefined &&
    limit.data !== undefined &&
    total.data > limit.data;
  const isLoading = total.isFetching || limit.isFetching;

  const getLimit = () => {
    if (isLoading) {
      return <ThemedLoader />;
    }

    if (typeof limit.data !== "number") {
      return <ThemedText>--</ThemedText>;
    }

    return (
      <>
        <ThemedText>${formatAmount(limit.data)}</ThemedText>
        <Queue size={4} />
        <SpendingEdit />
      </>
    );
  };

  const getTotal = () => {
    if (isLoading) {
      return <ThemedLoader />;
    }

    if (typeof total.data !== "number") {
      return <ThemedText>--</ThemedText>;
    }

    return <ThemedText>${formatAmount(total.data)}</ThemedText>;
  };

  return (
    <ThemedView colorName="surface" style={styles.container}>
      <ThemedText weight={600}>Monthly Spending Summary</ThemedText>
      <Stack size={12} />

      {isError ? (
        <ErrorWithRetry
          onPress={() => {
            total.refetch();
            limit.refetch();
          }}
        />
      ) : (
        <>
          <View style={styles.row}>
            <ThemedText>Spending limit: </ThemedText>
            {getLimit()}
          </View>
          <View style={styles.row}>
            <ThemedText>Spent this month: </ThemedText>
            {getTotal()}
          </View>
          <Stack size={8} />
          <ThemedProgress value={total.data} limit={limit.data} />
          <Stack size={8} />
          <ThemedText colorName={isOverBudget ? "danger" : "muted"}>
            {isOverBudget ? "Limit exceeded" : "Within budget"}
          </ThemedText>
        </>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Units.s8,
    borderRadius: Math.round(Units.s10),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

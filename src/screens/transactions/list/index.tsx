import { Header } from "@Features/header";
import { SpendingLimit } from "@Features/spending";
import { TransactionList } from "@Features/transactions";
import { Units } from "@Shared/lib/theme/const/Units";
import { Stack, ThemedView } from "@Shared/ui";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

export const TransactionsScreen = () => {
  return (
    <ThemedView style={styles.container} as={SafeAreaView}>
      <View style={styles.pad}>
        <Stack size={16} />
        <Header title="Transactions" />
        <Stack size={16} />
        <SpendingLimit />
        <Stack size={16} />
        <TransactionList />
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pad: {
    flex: 1,
    paddingHorizontal: Units.s8,
  },
});

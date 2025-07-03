import { useInfiniteTransactions } from "@Entities/transactions";
import { TransactionType } from "@Entities/transactions/model/types";
import { Units } from "@Shared/lib/theme/const/Units";
import { ThemedLoader } from "@Shared/ui";
import { ErrorWithRetry } from "@Shared/ui/Errors";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TransactionItem } from "../TransactionItem";

export const TransactionList = () => {
  const [year] = useState(new Date().getFullYear());
  const [month] = useState(new Date().getMonth());

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    isError,
    refetch,
  } = useInfiniteTransactions({ year, month });
  const transactions = data?.pages.flat() ?? [];
  const isInitialLoadError = isError && transactions.length === 0;

  const renderItem: ListRenderItem<TransactionType> = useCallback(
    ({ item }) => {
      return <TransactionItem {...item} />;
    },
    []
  );

  const loadNextPage = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const onRetry = () => {
    if (isInitialLoadError) {
      refetch();
    } else {
      fetchNextPage();
    }
  };

  const renderFooter = () => {
    if (isFetchingNextPage || isLoading) {
      return (
        <View style={styles.footer}>
          <ThemedLoader size="large" />
        </View>
      );
    }

    if (isError) {
      return (
        <ErrorWithRetry
          errorText="Failed to load transactions."
          onPress={onRetry}
        />
      );
    }

    return <View style={styles.footer} />;
  };

  return (
    <View style={styles.list}>
      <FlashList
        data={transactions}
        estimatedItemSize={Units.s50 + Units.s8}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onEndReached={loadNextPage}
        onEndReachedThreshold={0.6}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    borderRadius: Math.round(Units.s10),
    overflow: "hidden",
  },
  footer: {
    minHeight: Units.s64,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    marginBottom: Units.s4,
    textAlign: "center",
  },
});

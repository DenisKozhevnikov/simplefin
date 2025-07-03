import { TransactionType } from "@Entities/transactions/model/types";
import { formatAmount } from "@Shared/lib/numbers";
import { useThemeColor } from "@Shared/lib/theme";
import { Units } from "@Shared/lib/theme/const/Units";
import { Queue, ThemedText, ThemedView } from "@Shared/ui";
import { StyleSheet, View } from "react-native";

type TransactionItemProps = TransactionType;

export const TransactionItem = ({
  id,
  title,
  date,
  amount,
}: TransactionItemProps) => {
  const borderBottomColor = useThemeColor({}, "border");

  return (
    <ThemedView
      style={[styles.container, { borderBottomColor }]}
      colorName="surface"
    >
      <View style={styles.leftCol}>
        <ThemedText typography="text14" weight={"bold"} colorName="onSurface">
          {title}
        </ThemedText>
        <ThemedText style={[styles.date]} colorName="muted">
          {formatDate(date)}
        </ThemedText>
      </View>
      <Queue size={Units.s8} />
      <ThemedText
        typography="text14"
        style={[styles.amount]}
        colorName="onSurface"
      >
        {`$${formatAmount(amount)}`}
      </ThemedText>
    </ThemedView>
  );
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  const month = d.toLocaleString("en-US", { month: "long" });
  const day = d.getDate();
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: Units.s8,
    borderBottomWidth: 1,
  },
  leftCol: {
    flexShrink: 1,
  },
  title: {},
  date: {
    fontSize: 13,
    marginTop: 2,
  },
  amount: {
    flexShrink: 0,
    marginBottom: "auto",
  },
});

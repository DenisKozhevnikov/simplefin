import { ThemedText } from "@Shared/ui";
import { StyleSheet, View } from "react-native";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <View style={styles.container}>
        <ThemedText typography={"text24"}>{title}</ThemedText>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

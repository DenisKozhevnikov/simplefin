import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

const TransactionsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="limit"
        options={{
          presentation: "transparentModal",
          headerShown: false,
          animation: "none",
        }}
      />
    </Stack>
  );
};

export default TransactionsLayout;

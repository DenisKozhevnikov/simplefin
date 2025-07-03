import { ThemeProvider } from "@Shared/lib/theme";
import { Bar } from "@Shared/lib/theme/ui/Bar";
import { KeyboardHeightProvider } from "@Shared/services/Keyboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Platform } from "react-native";
import "react-native-reanimated";

const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <KeyboardHeightProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          {Platform.OS === "android" && <Bar />}
          <Stack>
            <Stack.Screen
              name="(transactions)"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      </QueryClientProvider>
    </KeyboardHeightProvider>
  );
}

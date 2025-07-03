import { StatusBar } from "expo-status-bar";
import React, { createContext, useContext } from "react";
import { useColorScheme } from "../hooks/useColorScheme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

type ThemeName = "light" | "dark";

type ThemeContextType = {
  theme: ThemeName;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useColorScheme() ?? "light";

  return (
    <ThemeContext.Provider value={{ theme }}>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

import { Stack } from "expo-router";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function StackLayout() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeContext.Provider>
  );
}

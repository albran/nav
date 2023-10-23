import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Root" }} />
      <Stack.Screen name="frame2" options={{ headerTitle: "Frame 2" }} />
      <Stack.Screen name="frame3" options={{ headerTitle: "Frame 3" }} />
      <Stack.Screen
        name="secret"
        options={{ headerTitle: "Secret", presentation: "modal" }}
      />
    </Stack>
  );
}

import { Stack } from "expo-router";
import { SessionProvider } from "./_context";

export default function StackLayout() {
  return (
    <SessionProvider>
      <Stack />
    </SessionProvider>
  );
}

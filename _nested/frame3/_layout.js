import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ tabBarLabel: "Tab 1" }} />
      <Tabs.Screen name="tab2" options={{ tabBarLabel: "Tab 2" }} />
    </Tabs>
  );
}

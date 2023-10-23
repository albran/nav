import { StyleSheet, Text, View } from "react-native";

export default function Frame() {
  return (
    <View style={styles.container}>
      <Text style={styles.link}>{"Tab 2"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    fontSize: 30,
  },
});

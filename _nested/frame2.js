import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Frame() {
  return (
    <View style={styles.container}>
      <Link href="/frame3" style={styles.link}>
        {"Frame 3 >"}
      </Link>
      <Link href="/secret" style={styles.link}>
        {"Secret >"}
      </Link>
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

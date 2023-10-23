import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Frame() {
  return (
    <View style={styles.container}>
      <Link href="/frame2" style={styles.link}>
        {"Frame 2 >"}
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

import { StyleSheet, Text, View } from "react-native";
import { useSession } from "../_context";

export default function Frame() {
  const { signOut } = useSession();
  return (
    <View style={styles.container}>
      <Text style={styles.link} onPress={() => signOut()}>
        {"Sign Out"}
      </Text>
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

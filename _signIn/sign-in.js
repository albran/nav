import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useSession } from "./_context";

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View style={styles.container}>
      <Text
        style={styles.link}
        onPress={() => {
          signIn();
          router.replace("/");
        }}
      >
        {"Sign In"}
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

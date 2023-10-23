import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "./_layout";

export default function Page() {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme === "dark" ? "dimgrey" : undefined,
      }}
    >
      <Box />
    </View>
  );
}

function Box() {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        ...styles.box,
        backgroundColor: theme === "dark" ? "dimgrey" : undefined,
        borderColor: theme === "dark" ? "white" : undefined,
      }}
    >
      <Text
        style={{
          ...styles.bigText,
          color: theme === "dark" ? "white" : undefined,
        }}
      >
        {"Lorem"}
      </Text>
      <Text
        style={{
          ...styles.lorem,
          color: theme === "dark" ? "white" : undefined,
        }}
      >
        {
          "Maecenas sit amet faucibus elit, id varius ante. Proin luctus euismod quam. Ut rhoncus porta fermentum. Nunc facilisis, elit non faucibus tempor, ante sem condimentum nibh, id pulvinar libero mi vel diam. Duis gravida odio at risus aliquet auctor. Suspendisse convallis dolor ante, sollicitudin tincidunt odio interdum quis. Nulla consequat consectetur turpis, in pellentesque dolor imperdiet vitae. Aliquam bibendum erat et metus ornare venenatis. Morbi venenatis rhoncus neque ac imperdiet. Proin feugiat sapien gravida volutpat tincidunt. Nam quis lacinia leo. Donec varius augue risus, eget rutrum nunc hendrerit eu."
        }
      </Text>
      <BoxButton />
    </View>
  );
}

function BoxButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Pressable
      style={{
        ...styles.boxButton,
        backgroundColor: theme === "dark" ? "dimgrey" : undefined,
        borderColor: theme === "dark" ? "white" : undefined,
      }}
      onPress={() => setTheme(theme == "light" ? "dark" : "light")}
    >
      <Text
        style={{
          ...styles.bigText,
          color: theme === "dark" ? "white" : undefined,
        }}
      >
        {"Toggle theme!"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "80%",
    padding: "3%",
    borderWidth: 1,
    borderRadius: "15%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bigText: {
    fontSize: 35,
  },
  lorem: {
    fontSize: 15,
    textAlign: "center",
  },
  boxButton: {
    height: "17%",
    width: "80%",
    margin: "3%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

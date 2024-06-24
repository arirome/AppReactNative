import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/registro" style={styles.button}>
        Registro
      </Link>
      <Link href="/login" style={styles.button}>
        Login
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
  button: {
    padding: 9,
    backgroundColor: "blue",
    margin: 4,
    borderRadius: 4,
    color: "white",
  },
});

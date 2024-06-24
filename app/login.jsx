import { Text, View, TextInput, Button, StyleSheet } from "react-native";

//REDUX
import { useDispatch, useSelector } from "react-redux";

//traemos  las acciones
import { loginUser } from "../components/redux/actions/login.actions";
import { useState } from "react";
import { router } from "expo-router";
//notificaciones
import Toast from "react-native-toast-message";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    if (email === "" || password === "") {
      return Toast.show({
        type: "error",
        text1: "datos incorrectos",
        position: "bottom",
      });
    } else {
      dispatch(loginUser(email, password));

      router.navigate("panel");
      return Toast.show({
        type: "success",
        text1: "estas registrado",
        position: "bottom",
      });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.title}> Login </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        name="email"
        onChangeText={(text) => {
          setEmail(text);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        name="password"
        onChangeText={(text) => {
          setPassword(text);
        }}
      />

      <Button title="Enviar" color="#F4D03F" onPress={() => handleLogin()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

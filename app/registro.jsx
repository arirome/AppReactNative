import { Text, View, TextInput, Button, StyleSheet } from "react-native";

//REDUX
//useDispatch: esta funcion te permite despachar acciones a la store de redux
import { useDispatch } from "react-redux";

//traemos  las acciones
import { fetchData } from "../components/redux/actions/registro.actions";
import { useState } from "react";

//notificaciones
import Toast from "react-native-toast-message";

export default function Registro() {
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
      dispatch(fetchData(email, password));
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
      <Text>Registro</Text>

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

      <Button
        title="Registrarse"
        color="#F4D03F"
        onPress={() => handleLogin()}
      />
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

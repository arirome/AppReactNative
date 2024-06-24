import { Button, Text, View } from "react-native";
import { persistor } from "./../components/redux/store/store";

import { router } from "expo-router";

export default function Panel() {


  const handleLogout = async () => {
    try {
      await persistor.purge();
      router.navigate("/");
    } catch (error) {
      console.error('Error purging persisted state:', error);
   
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
      <Button title="cerrar sesion" onPress={handleLogout} />
    </View>
  );
}

import { Button, Text, View,  } from "react-native";
import {persistor} from './../components/redux/store/store'

import { router } from 'expo-router';

export default function Panel() {

    const handleLogout = () => {
        persistor.purge() // Eliminar estado persistente
          .then(() => {
            router.navigate('/'); // Redirigir al inicio de sesión
          })
          .catch((error) => {
            console.error('Error al cerrar sesión:', error); // Manejar errores
          });
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

import { Stack, router } from "expo-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";


//Redux

export default function LayoutApp() {

  const { isAuthenticated } = useSelector((state) => state.login);

  useEffect(() => {
    if (isAuthenticated === true) {
      router.navigate('panel'); // Navigate to Panel screen
    } else {
      router.navigate('/'); 
    }
  }, [isAuthenticated]);

  return (
  
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home'}}/> 
      <Stack.Screen name="registro" options={{ title: 'registro'}}/>
      <Stack.Screen name="login" options={{ title: 'login'}}/>
      <Stack.Screen name="panel" options={{ title: 'panel'}}/>
    </Stack>
    
  );
}

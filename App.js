import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, extendTheme, Heading, Text } from "native-base";
import { useFonts } from 'expo-font';
import Carreira from './pages/Carreira';
import Habilidades from './pages/Habilidades';
import Home from './pages/Home';
import api from "./src/services/api"



const Stack = createNativeStackNavigator();

export default function MyStack() {
  


  const [fontsLoaded] = useFonts({
    'Quicksand': require('./assets/fonts/Quicksand-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  } 
  return (
    <NativeBaseProvider >
    <NavigationContainer>
    <Stack.Navigator>
       <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Carreira" component={Carreira} options={{ headerShown: false }} />
      <Stack.Screen name="Habilidades" component={Habilidades} options={{ headerShown: false }} />

    </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}


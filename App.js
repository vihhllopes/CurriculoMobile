import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, extendTheme, Heading, Text } from "native-base";
import { useFonts } from 'expo-font';
import Carreira from './pages/Carreira';
import Habilidades from './pages/Habilidades';
import Home from './pages/Home';


const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
       <Stack.Screen name="main" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Carreira" component={Carreira} options={{ headerShown: false }} />
      <Stack.Screen name="Habilidades" component={Habilidades} options={{ headerShown: false }} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}


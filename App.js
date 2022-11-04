import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, extendTheme, Heading, Text } from "native-base";
import { useFonts } from 'expo-font';
import Carreira from './pages/Carreira';
import Habilidades from './pages/Habilidades';
import Home from './pages/Home';
const theme = extendTheme({
  fontConfig: {
    Quicksand: {
      300: {
        normal: "Quicksand-Light",
      },
      400: {
        normal: "Quicksand-Regular",
      },
      500: {
        normal: "Quicksand-Medium",
      },
      600: {
        normal: "Quicksand-SemiBold",
      },
      700: {
        normal: "Quicksand-Bold",
      },
    },
   
  },
  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Quicksand",
    body: "RobotoSlab",
    mono: "Quicksand",
  },
  colors: {
      primary: '#9098E0',
      secondary: '#B2DECD',
      tertiary: '#273444',
      active: '#918ECB',
      black: '#1F2D3D',
      white: '#D3DCE6',
      whiteSnow: '#D3DCE6',
  },
  Text: {
      defaultProps: {
        size: 'sm',
        color: 'primary',
        fontFamily: 'Quicksand'
      },
  },
  Input: {
      defaultProps: {
        size: 'sm',
        borderColor: 'primary',
        color: 'primary',
        fontFamily: 'Quicksand',        
      },
  }
});

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Quicksand': require('./assets/fonts/Quicksand-VariableFont_wght.ttf'),
  
  });

  if (!fontsLoaded) {
    return null;
  } 

  return (
  
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="main" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Carreira" component={Carreira} options={{ headerShown: false }} />
      <Stack.Screen name="Habilidades" component={Habilidades} options={{ headerShown: false }} />

    
        </Stack.Navigator>
      </NavigationContainer>
  
  );
}
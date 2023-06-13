import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// assets or other files
import { styles } from "./Style";
import CardAsset from "./CardAsset";
import LoginScreen from './pages/login-screen';
import NextScreen from "./pages/next-screen";
import RegisterScreen from './pages/register-screen';
import HomeScreen from './pages/home-screen';
import ReportsMoreScreen from './pages/reports-more-screen';
import TestScreen from './pages/test-screen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Login'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name='Next' component={NextScreen} />
        <Stack.Screen name="Reports-More" component={ReportsMoreScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
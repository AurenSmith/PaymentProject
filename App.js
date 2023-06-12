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

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name='Next' component={NextScreen} />
        <Stack.Screen name="Reports-More" component={ReportsMoreScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
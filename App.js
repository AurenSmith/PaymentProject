import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Checkbox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Alert} from 'react-native';
// assets or other files
import { styles } from "./Style";
import CardAsset from "./CardAsset";


function LoginScreen({navigation}){
  
//  const [name, setName] = useState('');
  

  return (
    
    <View style={styles.container}>
      <View style={styles.login}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput 
        style={styles.input}
        placeholder='example@gmail.com'
        // onChangeText = {(val) => setName(val)}
        />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput 
        style={styles.input}
        placeholder='********'
        />  
      </View>
      
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Next')}
          >
          <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        
        <View style={styles.register}>
          <Text style={styles.registerText}>Not a member?</Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.navigate('Register')}
            >
            <Text style={styles.buttonText}>REGISTER</Text>          
          </TouchableOpacity>
        </View>
    </View>
    
    
  );
}
function RegisterScreen({navigation, route}){
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.registerDetails}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput 
        style={styles.input}
        placeholder='example@gmail.com'
        />
        <View style={styles.row}>
          <View>
          <Text style={styles.inputLabel}>First Name</Text>
          <TextInput 
          style={[styles.inputSmall, styles.fName]}
          placeholder='eg John'
          />
          </View>
          <View>
            <Text style={styles.inputLabel}>Last Name</Text>
            <TextInput 
          style={styles.inputSmall}
          placeholder='eg Doe'
          />
          </View>
        </View>
        <Text style={styles.inputLabel}>Phone Number</Text>
        <TextInput 
        style={styles.input}
        placeholder='021 234 5678'
        keyboardType='numeric'
        />
        <Text style={styles.inputLabel}>Company Name</Text>
        <TextInput 
        style={styles.input}
        />
        <TextInput 
        style={styles.inputLarge}
        />
        <View style={styles.checkboxRow}>
          <Checkbox 
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text> Agree to terms and conditions</Text>
        </View>
        
        
      </View>
      <TouchableOpacity 
          style={styles.registerButton}
          onPress={()=>Alert.alert('Success', 'Sign Up Successful')}
          >
            <Text>Sign Up</Text>
        </TouchableOpacity>
    </View>
  )
}
// aurens code is in here
function HomeScreen({navigation, route}) { 
  const MyButton = ({ onPress }) => {
    return (
      <TouchableOpacity style={styles.sidebarButton} onPress={onPress}>
        {/* Add content for the button */}
      </TouchableOpacity>
    );
  };
  
  const LiveChatButton = ({ onPress }) => {
    return (
      <TouchableOpacity style={styles.liveButton} onPress={onPress}>
        {/* Add content for the liveButton */}
      </TouchableOpacity>
    );
  };

  const [showAdditionalObject, setShowAdditionalObject] = useState(false);
  const [showLiveChat, setShowLiveChat] = useState(false);

  const handleSidebarButtonPress = () => {
    setShowAdditionalObject(true);
  };

  const handleSidebarClose = () => {
    setShowAdditionalObject(false);
  };

  const handleLiveChatButtonPress = () => {
    setShowLiveChat(true);
  };

  const handleLiveChatClose = () => {
    setShowLiveChat(false);
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, { dx }) => dx < -10, // Swipe left threshold
      onPanResponderMove: (_, { dx }) => {
        // Handle swipe left to close sidebar
        if (dx < -10) {
          handleSidebarClose();
        }
      },
    })
  ).current;
  return(
    <View style={styles.container}>
      {/* open side bar button */}
      <MyButton onPress={handleSidebarButtonPress} />

      {/* side bar asset */}
      {showAdditionalObject && (
        <View
          style={[
            styles.sidebar,
            {
              transform: [{ translateX: 0}],
            },
          ]}
          {...panResponder.panHandlers}
        >
          {/* add content for the sidebar */}
          <View style={styles.sidebar}></View>
        </View>
      )}

      {/* open live chat button */}
      <LiveChatButton onPress={handleLiveChatButtonPress} />

      {/* live chat asset */}
      {showLiveChat && (
        <View 
          style={[
            styles.liveChat,
            {
              height: 400,
            },
          ]}
        >
          {/* close live chat button */}
          <TouchableOpacity onPress={handleLiveChatClose} style={styles.liveChatCloseButton}>
            <FontAwesome name="times-circle-o" size={28} style={styles.liveChatCloseButtonText} />
          </TouchableOpacity>

          {/* top bar */}
          <View style={styles.liveTopbar}></View>

          {/* middle content section */}
          <View style={styles.liveContent}>
            <Text style={styles.liveChatText}>Live Chat Content</Text>
          </View>

          {/* bottom bar */}
          <View style={styles.liveBottombar}>
            <Text style={styles.liveMessage}>Message</Text>
            <View style={styles.sendContainer}>
              <FontAwesome name="paper-plane" size={20} style={styles.liveSend} />
            </View>
          </View>
        </View>
      )}

      {/* card asset */}
      <View style={styles.myCard}>
        <CardAsset />
      </View>

      <StatusBar style="auto" />
    </View>
    
  )
}
function NextScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <View  style={styles.row}>
        <View style={styles.circle}></View>
        <View style={styles.square}>
          <Text style={styles.nextAmountDollars}>-$0.00</Text>
          <Text style={styles.nextAmountPercentage}>-0.00%</Text>
          
        </View>
      </View>
    </View>
    
  )
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name='Next' component={NextScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;








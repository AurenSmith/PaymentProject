import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, PanResponder } from 'react-native';
import { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Sidebar({ onClose }) {
  const navigation = useNavigation();
  const [press, setPress] = useState(false);
  
  const HandlePress = () => {
    //navigation.replace('Screen');
    setPress(true);
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, { dx }) => dx < -10, // Swipe left threshold
      onPanResponderMove: (_, { dx }) => {
        // Handle swipe left to close sidebar
        if (dx < -10) {
          onClose();
        }
      },
    })
  ).current;

  return (
    <View 
      style={[
        styles.container,
        {
          transform: [{ translateX: 0}],
        },
      ]}
      {...panResponder.panHandlers}
    >
      <TouchableOpacity style={styles.buttons} onPress={HandlePress}>
        <Text style={styles.buttonText}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={()=>navigation.replace('HomeScreen',100)}>
        <Text style={styles.buttonText}>Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={()=>navigation.replace('HomeScreen',420)}>
        <Text style={styles.buttonText}>Payments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={()=>navigation.replace('HomeScreen',1000)}>
        <Text style={styles.buttonText}>Reports</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    width: '80%',
    height: 800,
    elevation: 5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,

    backgroundColor: 'white',
    
  }, 
  buttons: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    width: '50%',
    aspectRatio: 2.5, //3/2
    // borderTopRightRadius: '16.67% 50%',
    // borderBottomRightRadius: '16.67% 50%',
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,

    backgroundColor: '#292f34',
  },
  buttonText: {
    padding: 10,
    paddingRight: 20,

    color: '#ecf0f1',
    fontSize: 20,
  },
});

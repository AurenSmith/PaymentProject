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
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.buttonText}>Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.buttonText}>Payments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={()=>navigation.navigate('Reports-More')}>
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
    height: '100%',

    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,

    backgroundColor: 'orange',
  }, 
  buttons: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',

    width: '50%',
    aspectRatio: 2.5, //3/2
    // borderTopRightRadius: '16.67% 50%',
    // borderBottomRightRadius: '16.67% 50%',
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,

    backgroundColor: 'purple',
  },
  buttonText: {
    padding: 10,
    paddingRight: 20,

    color: 'orange',
    fontSize: 20,
  },
});

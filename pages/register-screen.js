import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';

export default function RegisterScreen({navigation, route}){
    const [isChecked, setChecked] = useState(false);
    return (
      <View style={styles.container}>
        <View style={styles.registerDetails}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput 
          style={styles.input}
          placeholder='example@gmail.com'
          placeholderTextColor='white'
          />
          <View style={{flexDirection: 'row'}}>
            <View>
            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput 
            style={[styles.inputSmall, styles.fName]}
            placeholder='eg John'
            placeholderTextColor='white'
            />
            </View>
            <View>
              <Text style={styles.inputLabel}>Last Name</Text>
              <TextInput 
            style={styles.inputSmall}
            placeholder='eg Doe'
            placeholderTextColor='white'
            />
            </View>
          </View>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput 
          style={styles.input}
          placeholder='021 234 5678'
          keyboardType='numeric'
          placeholderTextColor='white'
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
            onPress={()=>Alert.alert(
              'Sign Up Successful.', 
              'Thank you User. Please log in.',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Login')
                }
              ]

              )
                          
            }>
              <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
      },
      inputLabel: {
        marginLeft: 10,
      },
      input: {
        backgroundColor: '#258699',
        borderRadius: 30,
        marginBottom: 20,
        height: 40,
        width: 300,
        padding: 5,
        textAlign: 'center',
        color: 'white'
      },
      inputSmall: {
        backgroundColor: '#258699',
        borderRadius: 30,
        marginBottom: 20,
        height: 40,
        width: 130,
        marginTop: 0,
        padding: 5,
        textAlign: 'center',
      },
      inputLarge: {
        backgroundColor: '#258699',
        borderRadius: 30,
        marginBottom: 20,
        height: 200,
        width: 300,
        marginTop: 0,
        padding: 5,
        textAlign: 'center',
      },
      fName: {
        marginRight: 40 
      },
      checkbox: {
        marginLeft: 30,
        marginRight: 10
      },
      checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      registerButton: {
        width: 200,
        height: 40,
        backgroundColor: '#258699',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 20,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
      }
    
})
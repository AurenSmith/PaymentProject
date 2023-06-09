import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native';
import { useState, useEffect } from 'react';
import Checkbox from 'expo-checkbox';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';



{/* database stuff */}
const db = SQLite.openDatabase('userDatabase.db');

export default function RegisterScreen({navigation, route}){

  const [isChecked, setChecked] = useState(false);
  const [currentFirstName, setCurrentFirstName] = useState(undefined);
  const [currentLastName, setCurrentLastName] = useState(undefined);
  const [currentEmail, setCurrentEmail] = useState(undefined);
  const [currentPhone, setCurrentPhone] = useState(undefined);
  const [currentCompany, setCurrentCompany] = useState(undefined);
  const [currentPassword, setCurrentPassword] = useState(undefined);

  const [users, setUsers] = useState([]); // HERE



  useEffect(() => {
    db.transaction((tx) => {
      // tx.executeSql('DROP TABLE users');
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT, firstname TEXT, lastname TEXT, phone INTEGER, company TEXT)');
    });

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM users', null, 
        (txObj, resultSet) => {
          setUsers(resultSet.rows._array);
          console.log("import")
        },
        (txObj, error) => console.log(error)
      );
    });
  }, []);
  const pushToDB = () => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO users (email, password, firstname, lastname, phone, company) values (?, ?, ?, ?, ?, ?)', [currentEmail, currentPassword, currentFirstName, currentLastName, currentPhone, currentCompany],
        (txObj, resultSet) => {
          let existingUsers = [...users];    // HERE
          existingUsers.push({id: resultSet.insertId, email: currentEmail, firstname: currentFirstName, lastname: currentLastName, phone: currentPhone, company: currentCompany});
          setUsers(existingUsers);
          setCurrentEmail(undefined);
          setCurrentFirstName(undefined);
          setCurrentLastName(undefined);
          setCurrentPhone(undefined);
          setCurrentFirstName(undefined);
        },
        (txObj, error) => console.log(error)
      );
    });
  }

  const handlePress = () => {
    
    if(isChecked){
      alert("thank you "+currentFirstName+" you may now sign in");
      pushToDB();
      navigation.replace('Login');
    }else{
      Alert.alert("Error", "You must agree to the terms and conditons!");
    }
    
  }

    
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {/* <View style={styles.registerDetails}> */}
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput 
          style={styles.input}
          placeholder='example@gmail.com'
          placeholderTextColor='#ecf0f1'
          onChangeText={setCurrentEmail}
          />
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput 
          style={styles.input}
          placeholder='********'
          placeholderTextColor='#ecf0f1'
          onChangeText={setCurrentPassword}
          secureTextEntry={true}
          />
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.inputLabel}>First Name</Text>
              <TextInput 
              style={[styles.inputSmall, styles.fName]}
              placeholder='eg John'
              placeholderTextColor='#ecf0f1'
              onChangeText={setCurrentFirstName}
              />
            </View>
            <View style={styles.column}>
              <Text style={styles.inputLabel}>Last Name</Text>
              <TextInput 
              style={styles.inputSmall}
              placeholder='eg Doe'
              placeholderTextColor='#ecf0f1'
              onChangeText={setCurrentLastName}
              />
            </View>
          </View>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput 
          style={styles.input}
          placeholder='021 234 5678'
          keyboardType='numeric'
          placeholderTextColor='#ecf0f1'
          onChangeText={setCurrentPhone}
          />
          <Text style={styles.inputLabel}>Company Name</Text>
          <TextInput 
          style={styles.input}
          onChangeText={setCurrentCompany}
          />
          <View style={styles.terms}>
            <Text style ={[{fontWeight: 'bold', marginBottom: 10, paddingTop: 10}, styles.termsText]}>Terms & Conditions</Text>
            <Text style={styles.termsText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            </Text>
          </View>
          <View style={styles.checkboxRow}>
            <Checkbox 
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text> Agree to terms and conditions</Text>
          </View>
          
          
        
        <TouchableOpacity style={styles.registerButton} onPress={handlePress} >
              <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
      </ScrollView>
    )
  }

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        width: '100%',
        alignItems: 'center'

      },
      inputLabel: {
        textAlign: 'center',
        marginBottom: 10
      },
      row: {
        flexDirection: 'row',
        width: '80%',
        
      },
      column: {
        width: '50%',
        alignItems: 'center'
      },

      input: {
        backgroundColor: '#292f34',
        borderRadius: 30,
        marginBottom: 20,
        aspectRatio: 5.5,
        width: '75%',
        padding: 5,
        textAlign: 'center',
        color: 'white',
        elevation: 5,
      },
      inputSmall: {
        backgroundColor: '#292f34',
        borderRadius: 30,
        marginBottom: 20,
        aspectRatio: 2.7,
        width: '90%',
        padding: 5,
        textAlign: 'center',
        elevation: 5,
      },
      terms: {
        backgroundColor: '#292f34',
        borderRadius: 30,
        marginBottom: 20,
        height: 200,
        width: 300,
        marginTop: 0,
        padding: 5,
        alignItems: 'center',
        elevation: 5,
      },
      termsText: {
        color: '#ecf0f1',
        textAlign: 'center'
      },
      checkbox: {
        marginLeft: 30,
        marginRight: 10,
      },
      checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      registerButton: {
        width: '55%',
        aspectRatio: 4.2,
        backgroundColor: '#010b13',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 20,
        marginBottom: 20,
        elevation: 5,
      },
      buttonText: {
        color: '#ecf0f1',
        fontWeight: 'bold',
        fontSize: 16
      }
    
})
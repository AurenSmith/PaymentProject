import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';

// import SQLite from 'react-native-sqlite-storage';
import { useState, useEffect } from 'react';
import * as SQLite from 'expo-sqlite';

export default function LoginScreen({ navigation }){
      const db = SQLite.openDatabase('userDatabase.db');
      const [emailInput, setEmailInput] = useState(undefined);
      const [passwordInput, setPasswordInput] = useState(undefined);
      const [users, setUsers] = useState([[]]);
      // for logged in user
      const [currentUserEmail, setCurrentUserEmail] = useState(undefined);
      const [currentUserFirstName, setCurrentUserFirstName] = useState(undefined);
      const [currentUserLastName, setCurrentLastName] = useState(undefined);
      const [currentUserCompany, setCurrentUserCompany] = useState(undefined);



      {/* RUN ON LOAD */}
      useEffect(()=>{ 
        db.transaction(tx => { 
          tx.executeSql('SELECT * FROM users', null, // READ FROM DATABSE AND SET RESULTS TO ARRAY
            (txObj, resultSet) => {
              setUsers(resultSet.rows._array);
              console.log("imported database") // LOG SUCCESS
            },
            (txObj, error) => console.log(error) // LOG ERROR
          );
        });
      }, []);

      // not setting current user first name at first login, works fine when going to homescreen and then going back to login
      const login = () => {
        var found;
        users.map((user)=>{ // LOOP THROUGH USERS ARRAY
          if(user.email == emailInput && user.password == passwordInput){ // IF USER INPUT EMAIL AND PASSWORD ARE CORRECT
            found = true; // BOOL VARIABLE FOR USER FOUND
            // SET CURRENT USER
            setCurrentUserFirstName(user.firstname);
            setCurrentLastName(user.lastname);
            setCurrentUserEmail(user.email);
            setCurrentUserCompany(user.company);
          }
        })
        if(found == true){ // IF USER IS FOUND, DISPLAY SUCCESS ALERT WITH USERS NAME AND PROCEED TO HOME SCREEN
          Alert.alert("Successful Login", "Welcome back "+currentUserFirstName+"");
          navigation.replace('HomeScreen'); // USING REPLACE INSTEAD OF NAVIGATE ENSURES THAT THE USER CANT GO BACK TO LOGIN AFTER LOGGING IN
        }else{ 
          Alert.alert("Error", "No User Found!") // ARERT IF UNSUCCESSFULL 
          console.log("no user found"); // LOG 
        }
      }
      
      return (
        <View style={styles.container}>
          <View style={styles.login}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
            style={styles.input}
            placeholder={'example@gmail.com'}
            placeholderTextColor='white'
            onChangeText = {setEmailInput} // SET USER INPUT 
            />
            <Text style={styles.label}>Password</Text>
            <TextInput 
            style={styles.input}
            placeholder='********'
            placeholderTextColor='white'
            secureTextEntry={true}
            onChangeText={setPasswordInput}
            />  
          </View>
              <TouchableOpacity 
                style={styles.button}
                onPress={login}
              >
              <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            <View style={styles.register}>
              <Text style={styles.label}>Not a member?</Text>
              <TouchableOpacity 
                style={[styles.button, {marginBottom:30}]}
                onPress={()=>navigation.navigate('Register')}
                >
                <Text style={styles.buttonText}>Register</Text>          
              </TouchableOpacity>
            </View>
        </View>
        
        
      );
    }


// STYLESHEET
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: '#ecf0f1'
      },
      login: {
        marginTop: '20%',
        alignItems: 'center',
        width: '100%'
      },
      label: {
        marginBottom: 10
      },
      input: {
        backgroundColor: '#292f34',
        borderRadius: 30,
        marginBottom: 20,
        aspectRatio: 5.5,
        width: '75%',
        padding: 5,
        textAlign: 'center',
        elevation: 5,
      },
      button: {
        width: '55%',
        aspectRatio: 4.2,
        backgroundColor: '#010b13',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        elevation: 5,
      },
      buttonText: {
        color: '#ecf0f1',
        fontWeight: 'bold',
        fontSize: 16
      },
      registerText: {
        marginBottom: 10
      },
      register: {
        alignItems: 'center',
        position: 'absolute',
        bottom: '5%',
        width: '100%'
      },
})
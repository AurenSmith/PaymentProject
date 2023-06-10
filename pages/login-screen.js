import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';


  


function LoginScreen({ navigation }){
  
      return (
        <View style={styles.container}>
          <View style={styles.login}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput 
            style={styles.input}
            placeholder='example@gmail.com'
            placeholderTextColor='white'
            // onChangeText = {(val) => setName(val)}
            />
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput 
            style={styles.input}
            placeholder='********'
            placeholderTextColor='white'
            />  
          </View>
              <TouchableOpacity 
                style={styles.button}
                onPress={() => Alert.alert(
                  'Login Successful',
                  'Welcome Back User',
                  [
                    {
                      text: 'Ok',
                      onPress: () => navigation.navigate('Next')
                    }
                  ])
              }>
              <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            <View style={styles.register}>
              <Text style={styles.registerText}>Not a member?</Text>
              <TouchableOpacity 
                style={styles.button}
                onPress={()=>navigation.navigate('Register')}
                >
                <Text style={styles.buttonText}>Register</Text>          
              </TouchableOpacity>
            </View>
        </View>
        
        
      );
    }
    export default LoginScreen;



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
          },
          button: {
            width: 200,
            height: 40,
            backgroundColor: '#258699',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            
          },
          buttonText: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16
          },
          registerText: {
            marginLeft: 15
          },
          register: {
            marginTop: '70%'
          },
    })
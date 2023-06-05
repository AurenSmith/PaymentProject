import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

function LoginScreen({ navigation }){
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
            backgroundColor: 'lightgrey',
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
            backgroundColor: 'grey',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
          },
          buttonText: {
            color: 'black',
            fontWeight: 'bold'
          },
          registerText: {
            marginLeft: 15
          },
          register: {
            marginTop: '70%'
          },
    })
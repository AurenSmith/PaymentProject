import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sidebarButton: {
    position: 'absolute',
    top: 39,
    left: 23,
    width: 61,
    height: 61,
    backgroundColor: '#737373',
    borderRadius: 20,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '80%',
    height: '100%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#737373',
  },
  liveButton: {
    position: 'absolute',
    top: 39,
    right: 23,
    width: 61,
    height: 61,
    backgroundColor: '#737373',
    borderRadius: 20,
  },
  liveChat: {
    position: 'absolute',
    top: 39,
    right: 23,
    left: 23,
    height: 400,
    borderRadius: 20,
    backgroundColor: '#797979',
  },
  liveContent: {
    position: 'absolute',
    top: 61,
    left: 0,
    right: 0,
    height: 280,
  },
  liveChatText: {
    position: 'relative',
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
  liveChatCloseButton: {
    position: 'absolute',
    right: 0,
    top: 0,

    backgroundColor: '#737373',
    borderTopRightRadius: 20,
    width: 61,
    height: 61,
    alignItems: 'center',
    justifyContent: 'center',
  },
  liveChatCloseButtonText: {
    color: '#FFFFFF',
    fontWeight: 400,
    position: 'absolute',
    width: 28,
    height: 28,
  },
  liveTopbar: {
    position: 'absolute',
    top: 0,
    right: 61,
    left: 0,
    height: 61,
    borderTopLeftRadius: 20,

    backgroundColor: '#737373',
  },
  liveBottombar: {
    position: 'absolute',
    bottom: 0,
    height: 61,
    left: 0,
    right: 0,

    backgroundColor: '#737373',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  liveMessage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 61,
    height: 61,

    fontSize: 20,
    color: '#ffffff',
    marginLeft: 10,
    marginTop: 4,
  },
  sendContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: 61,
    width: 40,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  liveSend: {
    textAlign: 'center',
    color: '#ffffff',
  },
  myCard: {
    position: 'absolute',
    top: 175,
    backgroundColor: '#737373',
    width: 315,
    height: 200,
    borderRadius: 15,
  },
  // jayden
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  
  },
  register: {
    marginTop: '70%'
  },
  row: { 
    flexDirection: 'row',
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
  input: {
    backgroundColor: 'lightgrey',
    borderRadius: 30,
    marginBottom: 20,
    height: 40,
    width: 300,
    padding: 5,
    textAlign: 'center',
  },
  inputSmall: {
    backgroundColor: 'lightgrey',
    borderRadius: 30,
    marginBottom: 20,
    height: 40,
    width: 130,
    marginTop: 0,
    padding: 5,
    textAlign: 'center',
  },
  inputLarge: {
    backgroundColor: 'lightgrey',
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
  inputLabel: {
    marginLeft: 10,
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
    backgroundColor: 'grey',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 20,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 150,
    backgroundColor:  'grey',
    
    marginRight: 30
  },
  square: {
    width: 130,
    height: 90,
    backgroundColor: 'grey',
    borderRadius: 20,
    marginTop: 30,
    marginRight: 20,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent:  'center'
  },
  nextAmountDollars: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  nextAmountPercentage: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10
  }
  
});

export { styles };
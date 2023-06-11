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

  
  
 
  
  
 
  
  
  
  
  
});

export { styles };
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    height: 139,
  },
  sidebarButton: {
    position: 'absolute',
    top: 39,
    left: 23,
    width: 61,
    height: 61,
    backgroundColor: 'black',
    borderRadius: 20,
    elevation: 5
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
    zIndex: 1,
  },
  liveButton: {
    position: 'absolute',
    top: 39,
    right: 23,
    width: 61,
    height: 61,
    backgroundColor: 'black',
    borderRadius: 20,
    elevation: 5
  },
  liveChat: {
    position: 'absolute',
    top: 39,
    right: 23,
    left: 23,
    height: 400,
    borderRadius: 20,
    backgroundColor: '#ecf0f1',
    zIndex: 1,
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
    color: '#292f34',
    fontSize: 20,
    marginBottom: 20,
  },
  liveChatCloseButton: {
    position: 'absolute',
    right: 0,
    top: 0,

    backgroundColor: '#292f34',
    borderTopRightRadius: 20,
    width: 61,
    height: 61,
    alignItems: 'center',
    justifyContent: 'center',
  },
  liveChatCloseButtonText: {
    color: '#ecf0f1',
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
    borderBottomWidth: 1,
    borderBottomColor: '#292f34',

    backgroundColor: '#ecf0f1',
  },
  liveBottombar: {
    position: 'absolute',
    bottom: 0,
    height: 61,
    left: 0,
    right: 0,

    backgroundColor: '#292f34',
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
    color: '#ecf0f1',
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
    color: '#ecf0f1',
  },
  cards: {
    position: 'absolute',
    top: 175,
    width: 375,
    height: 275,
  },
  myCard: {
    width: '100%',
  },
  cardButtons: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardRadio: {
    width: 24, 
    height: 24,
    borderColor: '#737373',
    borderWidth: 3,
    borderRadius: 12,
    margin: 15,
  },
  radioActive: {
    width: 24,
    height: 24,
    backgroundColor: '#737373',
    borderColor: '#737373',
    borderWidth: 3,
    borderRadius: 12,
    margin: 15,
  },
  expandedCard: {
    position: 'absolute',
    height: 592,
    top: 200,
    left: 25,
    right: 25,
    backgroundColor: '#737373',
    borderRadius: 20,
  }
});

export { styles };
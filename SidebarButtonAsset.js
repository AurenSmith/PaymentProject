import { StyleSheet, TouchableOpacity } from 'react-native';



const SideBarButton = ({ onPress }) => {
    return (
      <TouchableOpacity style={styles.sidebarButton} onPress={onPress}>
        {/* Add content for the button */}
      </TouchableOpacity>
    );
  }

  export default SideBarButton;

  const styles = StyleSheet.create({
    sidebarButton: {
        position: 'absolute',
        top: 39,
        left: 23,
        width: 61,
        height: 61,
        backgroundColor: '#737373',
        borderRadius: 20,
      },
  })
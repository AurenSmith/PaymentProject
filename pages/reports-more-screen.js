import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import SideBarButton from '../SidebarButtonAsset';


export default function ReportsMoreScreen() {
    return (
        <View style={styles.container}>
            <SideBarButton></SideBarButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '5%',
        alignItems: 'center',
      }
})
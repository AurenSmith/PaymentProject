import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function TestScreen({ navigation }) {
    const myFunction = () => {
        navigation.navigate('HomeScreen');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.myText}>Hello World!</Text>
            <View style={styles.myBox}>
                <Text style={styles.boxText}>Orange Module</Text>
            </View>
            <TouchableOpacity style={styles.myButton} onPress={myFunction}>
                <Text style={styles.buttonText}>Press Me!</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',

        backgroundColor: 'purple',
    },
    myText: {
        margin: 10,
        marginTop: 25,
        color: 'pink'
    },
    myButton: {
        margin: 10,
        padding: 5,
        backgroundColor: 'pink',
    },
    buttonText: {
        color: 'purple',
    },
    myBox: {
        margin: 10,
        width: 250,
        height: 1000,

        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-end',

        backgroundColor: 'orange',
    },
    boxText: {
        margin: 10,
        textAlign: 'center',

        fontSize: 15,
        fontWeight: 'bold',
        color: 'purple',
    }
});
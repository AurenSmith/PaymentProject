import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Test = () => {
    return (
        <View style={styles.textDiv}>
            <Text style={[styles.myText, {color: '#A7A7A7'}]}>1 Jan</Text>
            <Text style={[styles.myText, {color: '#FFFFFF'}]}>Recipient</Text>
            <Text style={[styles.myText, {color: '#FFFFFF'}]}>-$0.00</Text>
        </View>
    );
};

export default function Reports() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Details</Text>

            <View style={styles.myDiv}>
                <ScrollView contentContainerStyle={styles.scrollDiv}>
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                    <Test />

                    {/* scrollable content */}
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                </ScrollView>
            </View>

            <TouchableOpacity style={styles.myButton}>
                <Text style={styles.viewMore}>View More</Text>
            </TouchableOpacity>
        </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
        margin: 25,

        borderRadius: 25,
        backgroundColor: '#ffffff',
    },
    title: {
        margin: 25,
        marginBottom: 0,
        marginLeft: 50,
        color: '#737373',
        fontWeight: '700',
    },
    myDiv: {
        aspectRatio: 0.8,
        margin: 25,
        marginVertical: 0,
        
        borderRadius: 20,
        backgroundColor: '#737373',
    },
    scrollDiv: {
        width: '100%',
    },
    textDiv: {
        marginHorizontal: 10,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    myText: {
        fontWeight: '700',
    },
    myButton: {
        width: '70%',
        aspectRatio: 5,
        marginVertical: 25,
        marginHorizontal: '15%',

        justifyContent: 'center',

        backgroundColor: '#737373',
        borderRadius: 50,
    },
    viewMore: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';







const Test = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
             }}>
                <View style={styles.centeredView}>
                    <View style = {styles.orderContainer}>
                        <Text style={{fontSize: 16}}>Recipient</Text>
                        <Text style={{fontSize: 20, marginBottom: 10}}>$-0.00</Text>
                        <Text style={{fontSize: 14, marginBottom: 10}}>12:00pm, Mon 31 January 2023 </Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold'}}>Details </Text>
                        <Text style={{fontSize: 12, marginBottom: 10}}>Card Number: 1234 **** **** 1234</Text>
                        <Text style={{fontSize: 12}}>Notes</Text>
                        <View style={styles.notes} />
                        {/*close button */}
                        <TouchableOpacity 
                        style={styles.closeButton}
                        onPress={onPress=()=>setModalVisible(false)}
                        >
                            <Text style={{color: 'white', fontWeight: 'bold'}}>Close</Text>
                        </TouchableOpacity>
                    </View>
                 </View>
            </Modal>
            <TouchableOpacity style={styles.textDiv} onPress={()=>setModalVisible(true)}>
                <Text style={[styles.myText, {color: '#A7A7A7'}]}>1 Jan</Text>
                <Text style={[styles.myText, {color: '#FFFFFF'}]}>Recipient</Text>
                <Text style={[styles.myText, {color: '#FFFFFF'}]}>-$0.00</Text>
            </TouchableOpacity>

        </View>




        
        
        
    );
};

export default function Reports() {
    const navigation = useNavigation();
    
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

            <TouchableOpacity style={styles.myButton} onPress={()=>navigation.navigate('Reports-More')}>
                <Text style={styles.viewMore}>View More</Text>
            </TouchableOpacity>
        </View>

        



    );
}
    
const styles = StyleSheet.create({
    container: {
        margin: 25,
        borderRadius: 25,
        backgroundColor: 'white',
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
        backgroundColor: '#258699',
    },
    scrollDiv: {
        width: '100%',
    },
    textDiv: {
        marginHorizontal: 10,
        marginVertical: 3,
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

        backgroundColor: '#258699',
        borderRadius: 50,
    },
    viewMore: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    orderContainer: {
        height: '40%',
        width: '80%',
        borderRadius: 30,
        backgroundColor: 'white',
        position: 'absolute',
        top: '25%',
        left: '10%',
        padding: 10,
        shadowColor: '#258699',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 5,
        
        

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      closeButton: {
        width: '50%',
        height: 30,
        backgroundColor: '#258699',
        marginLeft: '25%',
        marginTop: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
     },
     notes: {
        width: '80%',
        height: '30%',
        backgroundColor: '#258699',
        borderRadius: 15,
        marginLeft: '10%'
      }
    

});
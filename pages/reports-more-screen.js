import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useState, useRef } from 'react';
import { FontAwesome } from '@expo/vector-icons';

// assets or other files
import { styles } from "../Style";
import Sidebar from '../components/Sidebar';
import Reports from "../components/Reports";


export default function HomeScreen() {
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  
  const sidebarOpen = () => {
    setShowSidebar(true);
  };

  const sidebarClose = () => {
    setShowSidebar(false);
  };

  const handleLiveChatButtonPress = () => {
    setShowLiveChat(true);
  };

  const handleLiveChatClose = () => {
    setShowLiveChat(false);
  };
  const handleOrderPress = () => {
    setShowOrder(true);
  }

  const handleOrderClose = () => {
    setShowOrder(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* header */}
      <View style={styles.header}>
        {/* open side bar button */}
        <TouchableOpacity style={styles.sidebarButton} onPress={sidebarOpen}></TouchableOpacity>
        {/* <MyButton onPress={sidebarOpen} /> */}

        {/* open live chat button */}
        <TouchableOpacity style={styles.liveButton} onPress={handleLiveChatButtonPress}></TouchableOpacity>
        {/* <LiveChatButton onPress={handleLiveChatButtonPress} /> */}

        
      </View>
      <View style={local.orders}>
        {/* <FlatList
        // temp data
          data={[
            {key: ' 1 Jan                    Recipient1                 -$0.00 '},
            {key: ' 1 Jan                    Recipient2                 -$0.00 '},
            {key: ' 1 Jan                    Recipient3                 -$0.00 '},
            {key: ' 1 Jan                    Recipient4                 -$0.00 '},
            {key: ' 1 Jan                    Recipient5                 -$0.00 '},
            {key: ' 1 Jan                    Recipient6                 -$0.00 '},
            {key: ' 1 Jan                    Recipient7                 -$0.00 '},
            {key: ' 1 Jan                    Recipient8                 -$0.00 '},
            {key: ' 1 Jan                    Recipient9                 -$0.00 '},
            
          ]}
          renderItem={({item}) => 
          <TouchableOpacity style={local.order} onPress={handleOrderPress}>
            <Text style={local.item}>{item.key}</Text>
          </TouchableOpacity>}
          /> */}


          <Reports />
      </View>
      <TouchableOpacity style={local.button}>
        <Text style={local.buttonText}>Other</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginTop: 20, paddingBottom: 30}}>
          <TouchableOpacity style={local.buttonSquare}>
            

            

          </TouchableOpacity>
          <TouchableOpacity style={local.button}>
            <Text style={local.buttonText}>Generate Purchase</Text>
          </TouchableOpacity>
          
        </View>
      

      
      {/* order asset */}
          
      {showOrder && (
        <View 
        style={local.orderContainer}>

          <Text style={{fontSize: 16}}>Recipient</Text>
          <Text style={{fontSize: 20, marginBottom: 10}}>$-0.00</Text>
          <Text style={{fontSize: 14, marginBottom: 10}}>12:00pm, Mon 31 January 2023 </Text>
          <Text style={{fontSize: 12, fontWeight: 'bold'}}>Details </Text>
          <Text style={{fontSize: 12, marginBottom: 10}}>Card Number: 1234 **** **** 1234</Text>
          <Text style={{fontSize: 12}}>Notes</Text>
          <View style={local.notes} />

          

          
          {/*close button */}
          <TouchableOpacity 
          style={local.close}
          onPress={handleOrderClose}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Close</Text>
          </TouchableOpacity>
          

          
        

        </View>
      )}

      {showSidebar &&(
        <Sidebar onClose={sidebarClose}/>
      )}

      

      

      {/* live chat asset */}
      {showLiveChat && (
        <View 
          style={[
            styles.liveChat,
            {
              height: 400,
            },
          ]}
        >
          {/* close live chat button */}
          <TouchableOpacity onPress={handleLiveChatClose} style={styles.liveChatCloseButton}>
            <FontAwesome name="times-circle-o" size={28} style={styles.liveChatCloseButtonText} />
          </TouchableOpacity>

          {/* top bar */}
          <View style={styles.liveTopbar}></View>

          {/* middle content section */}
          <View style={styles.liveContent}>
            <Text style={styles.liveChatText}>Live Chat Content</Text>
          </View>

          {/* bottom bar */}
          <View style={styles.liveBottombar}>
            <Text style={styles.liveMessage}>Message</Text>
            <View style={styles.sendContainer}>
              <FontAwesome name="paper-plane" size={20} style={styles.liveSend} />
            </View>
          </View>
        </View>
      )}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const local = StyleSheet.create({
    orders: {
        marginTop: 50,
        paddingTop: 5,
        padding: 10,
        borderRadius: 15,
        width: '80%',
        backgroundColor: 'grey',
        marginBottom: 200,
        
    },
    order: {
      backgroundColor: '#737373',
      borderRadius: 10,
      padding: 1,
      marginTop: 10
    },

    item: {
      color: 'white',
      fontWeight: 'bold'
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
    buttonSquare: {
      backgroundColor: 'black',
      borderRadius: 15,
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15
    },
    orderContainer: {
      height: '35%',
      width: '80%',
      borderRadius: 20,
      backgroundColor: '#666666',
      position: 'absolute',
      top: '25%',
      left: '10%',
      padding: 10
  },
    close: {
     width: '50%',
     height: 30,
     backgroundColor: '#737373',
     marginLeft: '25%',
     marginTop: 10,
     borderRadius: 20,
     alignItems: 'center',
     justifyContent: 'center'
  },
  orderConent: {
   postion: 'absolute',
   left: 10,
   top: 10
  },
  notes: {
    width: '80%',
    height: '30%',
    backgroundColor: '#737373',
    borderRadius: 15,
    marginLeft: '10%'
  }

})
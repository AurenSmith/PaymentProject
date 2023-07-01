import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { useState, useRef } from 'react';
import { FontAwesome } from '@expo/vector-icons';
// assets or other files
import { styles } from "../Style";
import Sidebar from '../components/Sidebar';
import Reports from "../components/Reports";


export default function HomeScreen() {
  // LIVE CHAT AND SIDEBAR
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  
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
  

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER FOR BUTTONS */}
      <View style={styles.header}>
        {/* OPEN SIDEBAR BUTTON*/}
        <TouchableOpacity style={styles.sidebarButton} onPress={sidebarOpen}></TouchableOpacity>
        {/* OPEN LIVE CHAT BUTTON */}
        <TouchableOpacity style={styles.liveButton} onPress={handleLiveChatButtonPress}></TouchableOpacity>
      </View>
      {/* IMPORT REPORTS COMPONENT */}
      <Reports />
      {/* CONTAINER FOR BUTTONS */}
      <View style={local.buttonContainer}>
        <TouchableOpacity style={local.button}>
          <Text style={local.buttonText}>Other</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: 20, paddingBottom: 30}}>
            <TouchableOpacity style={local.buttonSquare} onPress={()=>Alert.alert('Report', 'Report Exported')}>
            </TouchableOpacity>
            <TouchableOpacity style={local.button} onPress={()=>Alert.alert('Report', 'Report Generated')}>
              <Text style={local.buttonText}>Generate Report</Text>
            </TouchableOpacity>
          </View>
      </View>
      {/* INLINE && */}
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


// STYLE SHEET FOR REPORTS MORE SCREEN, REUSED COMPONENTS USE THE GLOBAL STYLESHEET
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
      color: '#ecf0f1',
      fontWeight: 'bold'
    },
    button: {
      width: 200,
      height: 40,
      backgroundColor: '#010b13',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      
    },
    buttonText: {
      color: '#ecf0f1',
      fontWeight: 'bold',
      fontSize: 16
    },
    buttonSquare: {
      backgroundColor: '#010b13',
      borderRadius: 15,
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15
    },
    buttonContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }
   
  

})
import React, { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ScrollView, TextInput  } from 'react-native';
import { useState, useRef } from 'react';
import { FontAwesome } from '@expo/vector-icons';


// assets or other files
import { styles } from "../Style";
import CardAsset from "../CardAsset";
import Sidebar from '../components/Sidebar';
import Payment from '../components/Payment';
import Reports from '../components/Reports';




export default function HomeScreen({route, navigation}) {

  // for scrolling sidebar buttons
  const value = route.params;
  const refScrollView = useRef();
  const moveTo = () => {
    refScrollView.current.scrollTo({y:value});
  }

  // run on load
  useEffect(()=>{
    moveTo();
    
  },[])
  
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
    <View>
      <View>
      </View>
      <ScrollView contentContainerStyle={styles.container} ref={refScrollView}>
        {/* header */}
        <View style={styles.header}>
          {/* open side bar button */}
          <TouchableOpacity style={styles.sidebarButton} onPress={sidebarOpen}></TouchableOpacity>
          {/* <MyButton onPress={sidebarOpen} /> */}

          {/* open live chat button */}
          <TouchableOpacity style={styles.liveButton} onPress={handleLiveChatButtonPress}></TouchableOpacity>
          {/* <LiveChatButton onPress={handleLiveChatButtonPress} /> */}
        </View>
        
        {/* card asset */}
        <View style={styles.myCard}>
          <CardAsset />
        </View>
        <View style={styles.payment}>
          <Payment />
        </View>
        

        <Reports />
        

        {showSidebar && (
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
              <FontAwesome name="times-circle-o" size={28}  style={styles.liveChatCloseButtonText} />
            </TouchableOpacity>

            {/* top bar */}
            <View style={styles.liveTopbar}></View>

            {/* middle content section */}
            <View style={styles.liveContent}>
              <View style={styles.message}>
                <Text style={styles.messageText}>i want add a new card</Text>
              </View>
              <View style={[styles.message, {left: 10, bottom: 80, backgroundColor: '#ecf0f1'}]}>
                <Text style={[styles.messageText, {color: '#292f34'}]}>Yes of course, how can we help?</Text>
              </View>
              <View style={[styles.message, {bottom: 160}]}>
                <Text style={styles.messageText}>Hello can you please help me?</Text>
              </View>
             
              
            </View>

            {/* bottom bar */}
            <View style={styles.liveBottombar}>
              <TextInput style={styles.liveMessage} 
              placeholder="type your message here..."
              placeholderTextColor='#ecf0f1'
              />
              <TouchableOpacity style={styles.sendContainer}>
                <FontAwesome name="paper-plane" size={20} style={styles.liveSend} />
              </TouchableOpacity>
            </View>
          </View>
        )}

        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );


}
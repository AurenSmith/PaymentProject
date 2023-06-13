import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useRef } from 'react';
import { FontAwesome } from '@expo/vector-icons';

// assets or other files
import { styles } from "../Style";
import CardAsset from "../CardAsset";
import Sidebar from '../components/Sidebar';
import Payment from '../components/Payment';

export default function HomeScreen() {
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

      <Payment />

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
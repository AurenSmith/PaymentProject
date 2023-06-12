import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, PanResponder, Animated } from 'react-native';
import { useState, useRef } from 'react';
import { FontAwesome } from '@expo/vector-icons';

// assets or other files
import { styles } from "../Style";
import CardAsset from "../CardAsset";
import Sidebar from '../components/Sidebar';

const MyButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.sidebarButton} onPress={onPress}>
      {/* Add content for the button */}
    </TouchableOpacity>
  );
};

const LiveChatButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.liveButton} onPress={onPress}>
      {/* Add content for the liveButton */}
    </TouchableOpacity>
  );
};

export default function HomeScreen({ navigation }) {
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
    <View style={styles.container}>
      {/* card asset */}
      <View style={styles.myCard}>
        <CardAsset />
      </View>

      {/* open side bar button */}
      <MyButton onPress={sidebarOpen} />

      {/* open live chat button */}
      <LiveChatButton onPress={handleLiveChatButtonPress} />

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
    </View>
  );
}
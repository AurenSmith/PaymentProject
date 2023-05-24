import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, PanResponder, Animated } from 'react-native';
import { useState, useRef } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from "./Style";

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

export default function App() {
  const [showAdditionalObject, setShowAdditionalObject] = useState(false);
  const [showLiveChat, setShowLiveChat] = useState(false);
  const sidebarAnimation = useRef(new Animated.Value(0)).current;
  const liveChatAnimation = useRef(new Animated.Value(0)).current;

  const handleSidebarButtonPress = () => {
    setShowAdditionalObject(true);
    Animated.timing(sidebarAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleSidebarClose = () => {
    Animated.timing(sidebarAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setShowAdditionalObject(false);
    });
  };

  const handleLiveChatButtonPress = () => {
    setShowLiveChat(true);
    Animated.timing(liveChatAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleLiveChatClose = () => {
    Animated.timing(liveChatAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setShowLiveChat(false);
    });
  };

  const sidebarTranslateX = sidebarAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0], // Adjust the value based on your sidebar width
  });

  const liveChatHeight = liveChatAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 400], // Adjust the value based on your liveChat expanded height
  });

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, { dx }) => dx < -10, // Swipe left threshold
      onPanResponderMove: (_, { dx }) => {
        // Handle swipe left to close sidebar
        if (dx < -10) {
          handleSidebarClose();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <MyButton onPress={handleSidebarButtonPress} />

      {showAdditionalObject && (
        <Animated.View
          style={[
            styles.sidebar,
            {
              transform: [{ translateX: sidebarTranslateX }],
            },
          ]}
          {...panResponder.panHandlers}
        >
          {/* Add content for the sidebar */}
        </Animated.View>
      )}

      <LiveChatButton onPress={handleLiveChatButtonPress} />

      {showLiveChat && (
        <Animated.View
          style={[
            styles.liveChat,
            {
              height: liveChatHeight,
            },
          ]}
        >
          <TouchableOpacity onPress={handleLiveChatClose} style={styles.liveChatCloseButton}>
            <FontAwesome name="times-circle-o" size={28} style={styles.liveChatCloseButtonText} />
          </TouchableOpacity>
          <View style={styles.liveTopbar}></View>

          <View style={styles.liveContent}>
            <Text style={styles.liveChatText}>Live Chat Content</Text>
          </View>

          <View style={styles.liveBottombar}>
            <Text style={styles.liveMessage}>Message</Text>
            <View style={styles.sendContainer}>
              <FontAwesome name="paper-plane" size={20} style={styles.liveSend} />
            </View>
          </View>
        </Animated.View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}
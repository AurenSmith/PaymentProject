import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, PanResponder, Animated, ScrollView } from 'react-native';
import { useState, useRef } from 'react';
import { FontAwesome } from '@expo/vector-icons';

// assets or other files
import { styles } from "./Style";
import CardAsset from "./CardAsset";

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
  const [expandCard, setExpandCard] = useState(false);

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleRadioPress = (index) => {
    setActiveCardIndex(index);
    scrollViewRef.current?.scrollTo({
      x: index * 375, 
      animated: true,
    });
  };

  const handleSidebarButtonPress = () => {
    setShowAdditionalObject(true);
  };

  const handleSidebarClose = () => {
    setShowAdditionalObject(false);
  };

  const handleLiveChatButtonPress = () => {
    setShowLiveChat(true);
  };

  const handleLiveChatClose = () => {
    setShowLiveChat(false);
  };

  const handleCardExpand = () => {
    if(expandCard) {
      setExpandCard(false);
    } else {
      setExpandCard(true);
    }
  };

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
      {/* open side bar button */}
      <MyButton onPress={handleSidebarButtonPress} />

      {/* side bar asset */}
      {showAdditionalObject && (
        <View
          style={[
            styles.sidebar,
            {
              transform: [{ translateX: 0}],
            },
          ]}
          {...panResponder.panHandlers}
        >
          {/* add content for the sidebar */}
          <View style={styles.sidebar}></View>
        </View>
      )}

      {/* open live chat button */}
      <LiveChatButton onPress={handleLiveChatButtonPress} />

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

      {expandCard && (
        <View
          style={[
            styles.expandedCard,
          ]}
        >
          {/* expanded card content */}
        </View>
      )}

      {/* card asset */}
      <View style={styles.cards}>
        <ScrollView 
          ref={scrollViewRef}
          contentContainerStyle={styles.myCard}
          horizontal={true}
          pagingEnabled={true}
          onMomentumScrollEnd={(event) => {
            const pageIndex = Math.round(
              event.nativeEvent.contentOffset.x / 375
            );
            setActiveCardIndex(pageIndex);
          }}
        >
          <TouchableOpacity onPress={handleCardExpand}>
            <CardAsset style={styles.expandButton} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCardExpand}>
            <CardAsset />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCardExpand}>
            <CardAsset />
          </TouchableOpacity>
        </ScrollView>

        {/* radio buttons container */}
        <View style={styles.cardButtons}>
          <TouchableOpacity 
            style={[
              styles.cardRadio,
              activeCardIndex === 0 && styles.radioActive,
            ]}
            onPress={() => handleRadioPress(0)}
          ></TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.cardRadio,
              activeCardIndex === 1 && styles.radioActive,
            ]}
            onPress={() => handleRadioPress(1)}
          ></TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.cardRadio,
              activeCardIndex === 2 && styles.radioActive,
            ]}
            onPress={() => handleRadioPress(2)}
          ></TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
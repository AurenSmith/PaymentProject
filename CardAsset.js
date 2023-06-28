import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function CardAsset() {
  const [isOpen, setOpen] = useState(false);

  const handleExpand = () => {
      setOpen(!isOpen);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleExpand}>
      <Text style={styles.myTitle}>
        card
      </Text>
      <View style={styles.details}>
        <Text style={styles.cardNo}>1234 1234 1234 1234</Text>
        <Text style={styles.expText}>VALID THRU</Text>
        <Text style={styles.date}>12/12</Text>
        <Text style={styles.name}>JOHN DOE</Text>
      </View>

      {isOpen && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.moreText}>Hello World!</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'flex-start',
    padding: 25,
    backgroundColor: '#258699',
    borderRadius: 20,
    margin: 25,
    borderWidth: 5,
    borderColor: '#258691',
    overflow: 'visible',
  },
  myTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#ffffff",
  },
  details: {
    marginTop: '12.5%',
  },
  cardNo: {
    fontSize: 20,
    color: "#ffffff",
  },
  expText: {
    fontSize: 7,
    color: "#ffffff",
  },
  date: {
    fontSize: 16,
    color: "#ffffff",
  },
  name: {
    fontSize: 16,
    color: "#ffffff",
  },
  menu: {
    flexGrow: 1,
    width: '100%',
    aspectRatio: 0.75,
    justifyContent: 'flex-start',
    backgroundColor: '#258699',
  },
  moreButton: {
    position: 'absolute',
    bottom: 0,
    aspectRatio: 5.5,
    width: '100%',
    backgroundColor: "#ffffff",
    borderRadius: 25,
    justifyContent: 'center',
  },
  moreText: {
    color: '#258699',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
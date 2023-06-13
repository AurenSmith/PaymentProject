import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.myTitle}>
        card
      </Text>
      <View style={styles.details}>
        <Text style={styles.cardNo}>1234 1234 1234 1234</Text>
        <Text style={styles.expText}>VALID THRU</Text>
        <Text style={styles.date}>12/12</Text>
        <Text style={styles.name}>JOHN DOE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    padding: 24,
    width: 325,
    height: 200,
    backgroundColor: '#737373',
    borderRadius: 20,
    margin: 25,
    marginBottom: 0,
    borderWidth: 5,
    borderColor: '#545454',
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
});
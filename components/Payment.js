import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function Payment() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.swapButton}>
          <Text style={styles.swapText}>Swap Card</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textTag}>Amount</Text>
      <TextInput style={styles.amount} placeholder="$0.00" placeholderTextColor="#ffffff"></TextInput>

      <Text style={styles.textTag}>Details</Text>
      <TextInput style={styles.details} multiline={true} placeholder="Details" placeholderTextColor="#ffffff"></TextInput>

      <Text style={styles.textTag}>Recipient</Text>
      <TextInput style={styles.amount} placeholder="Recipient" placeholderTextColor="#ffffff"></TextInput>

      <TouchableOpacity style={styles.next}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '86%',
    aspectRatio: 0.52, //325/633 or 13/25
    paddingBottom: '7%',
    margin: '7%',
    borderRadius: 20,

    backgroundColor: '#ffffff',

    textAlignVertical: 'center',
  },
  card: {
    aspectRatio: 1.774193548387097, //275/155 or 55/31
    width: '86%',
    margin: '7%',

    borderRadius: 20,
    backgroundColor: '#737373',
  },
  swapButton: {
    position: 'absolute',
    bottom: -20,
    right: 20,
    aspectRatio: 3.25, //130/40 or 13/4
    width: '43%',

    justifyContent: 'center',
    textAlign: 'center',

    borderRadius: 20,
    backgroundColor: '#ababab',
  },
  swapText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  textTag: {
    aspectRatio: 15, //275/14 or 55/2
    width: '86%',
    marginLeft: '14%',

    color: '#737373',
    fontWeight: 'bold',
    fontSize: 14,
  },
  amount: {
    aspectRatio: 5.5, //275/50 or 11/2
    width: '86%',
    marginHorizontal: '7%',
    marginBottom: '7%',
    paddingLeft: '7%',
    borderRadius: 25,

    backgroundColor: '#737373',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  details: {
    aspectRatio: 2, //275/135 or 55/27
    width: '86%',
    marginHorizontal: '7%',
    marginBottom: '7%',
    paddingLeft: '7%',
    paddingTop: '5%',
    borderRadius: 25,

    textAlignVertical: 'top',

    backgroundColor: '#737373',
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  next: {
    aspectRatio: 5, //250/50 or 5/1
    width: '76%',
    marginHorizontal: '12%',

    justifyContent: 'center',

    borderRadius: 25,
    backgroundColor: '#737373',
  },
  nextText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
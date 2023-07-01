import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardAsset from '../CardAsset';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('payment.db');

export default function Payment() {
  const navigation = useNavigation();
  const [isOpen, setOpen] = useState(false);

  const [items, setItems] = useState([]);
  const [myAmount, setAmount] = useState(undefined);
  const [myDetails, setDetails] = useState(undefined);
  const [myName, setName] = useState(undefined);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS pay (id INTEGER PRIMARY KEY, amount TEXT, details TEXT, name TEXT)');
    });

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM pay', null, 
        (txObj, resultSet) => setItems(resultSet.rows._array),
        (txObj, error) => console.log(error)
      );
    });
  }, []);

  const addItem = () => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO pay (amount, details, name) values (?, ?, ?)', [myAmount, myDetails, myName],
        (txObj, resultSet) => {
          let existingItems = [...items];
          existingItems.push({ id: resultSet.insertId, amount: myAmount, details: myDetails, name: myName});
          setItems(existingItems);
          setAmount(undefined);
          setDetails(undefined);
          setName(undefined);
        },
        (txObj, error) => console.log(error)
      );
    });

    navigation.navigate('Next');
  }

  const handleNext = () => {
    addItem();
  }

  const handleExpand = () => {
      setOpen(!isOpen);
  }

  return (
    <View style={styles.container}>
      <View style={styles.card} onPress={handleExpand}>
        <TouchableOpacity style={styles.swapButton}>
          <Text style={styles.swapText}>Swap Card</Text>
        </TouchableOpacity>
      </View>
      <View>
      <Text style={styles.textTag}>Amount</Text>
      <TextInput onChangeText={setAmount} value={myAmount} style={styles.amount} placeholder="$0.00" placeholderTextColor="#292f34"></TextInput>

      <Text style={styles.textTag}>Details</Text>
      <TextInput onChangeText={setDetails} value={myDetails} style={styles.details} multiline={true} placeholder="Details" placeholderTextColor="#292f34"></TextInput>

      <Text style={styles.textTag}>Recipient</Text>
      <TextInput onChangeText={setName} value={myName} style={styles.amount} placeholder="Recipient" placeholderTextColor="#292f34"></TextInput>

      <TouchableOpacity style={styles.next} onPress={handleNext}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>

      </View>
      
      

      
      
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
    backgroundColor: '#010b13',
    flexGrow: 1,
    textAlignVertical: 'center',
    elevation: 10,
  },
  card: {
    aspectRatio: 1.774193548387097, //275/155 or 55/31
    width: '86%',
    margin: '7%',
    borderRadius: 20,
    backgroundColor: '#ecf0f1',
    elevation: 5,
    
  },
  swapButton: {
    position: 'absolute',
    bottom: -20,
    right: 20,
    aspectRatio: 3.25, //130/40 or 13/4
    width: '43%',
    elevation: 5,

    justifyContent: 'center',
    textAlign: 'center',

    borderRadius: 20,
    backgroundColor: '#292f34',
  },
  swapText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ecf0f1',
  },
  textTag: {
    aspectRatio: 15, //275/14 or 55/2
    width: '86%',
    marginLeft: '14%',
    color: '#ecf0f1',
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
    backgroundColor: '#ecf0f1',
    color: '#292f34',
    fontSize: 20,
    fontWeight: 'bold',
    elevation: 5,
  },
  details: {
    aspectRatio: 2, //275/135 or 55/27
    width: '86%',
    marginHorizontal: '7%',
    marginBottom: '7%',
    paddingLeft: '7%',
    paddingTop: '5%',
    borderRadius: 25,
    elevation: 5,
    textAlignVertical: 'top',
    elevation: 5,
    backgroundColor: '#ecf0f1',
    color: '#292f34',
    fontSize: 14,
    fontWeight: 'bold',
  },
  next: {
    aspectRatio: 5, //250/50 or 5/1
    width: '76%',
    marginHorizontal: '12%',
    
    elevation: 5,
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#ecf0f1',
    
  },
  nextText: {
    textAlign: 'center',
    color: '#292f34',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});
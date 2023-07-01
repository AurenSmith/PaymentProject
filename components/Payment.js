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
      <TextInput onChangeText={setAmount} value={myAmount} style={styles.amount} placeholder="$0.00" placeholderTextColor="#ffffff"></TextInput>

      <Text style={styles.textTag}>Details</Text>
      <TextInput onChangeText={setDetails} value={myDetails} style={styles.details} multiline={true} placeholder="Details" placeholderTextColor="#ffffff"></TextInput>

      <Text style={styles.textTag}>Recipient</Text>
      <TextInput onChangeText={setName} value={myName} style={styles.amount} placeholder="Recipient" placeholderTextColor="#ffffff"></TextInput>

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
    backgroundColor: '#ffffff',
    flexGrow: 1,
    textAlignVertical: 'center',
  },
  card: {
    aspectRatio: 1.774193548387097, //275/155 or 55/31
    width: '86%',
    margin: '7%',
    borderRadius: 20,
    backgroundColor: '#258699',
    
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
    backgroundColor: 'black',
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
    backgroundColor: '#258699',
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

    backgroundColor: '#258699',
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
    backgroundColor: '#258699',
  },
  nextText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  addCard: {
    width: '86%',
    margin: '7%',
    aspectRatio: 1,
    zIndex: 1,
    position: 'absolute', // removing abosulute pushes content down
    top: 150,
    backgroundColor: 'red',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    
    
  },
  createButton: {
    marginLeft: '10%',
    marginTop: "10%",
    width: '80%',
    aspectRatio: 5,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  textInput: {
    marginLeft: '10%',
    marginTop: '5%',
    borderRadius: 30,
    aspectRatio: 5,
    width: '80%',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'grey',
    textAlign: 'center',

  }
});
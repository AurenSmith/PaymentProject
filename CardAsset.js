import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as SQLite from 'expo-sqlite';


export default function CardAsset() {
  const [isOpen, setOpen] = useState(false);

  const handleExpand = () => {
      setOpen(!isOpen);
  }
  const handleCreatePress = () => {
    pushToDB();
    handleExpand();
  }
  // database stuff
  const db = SQLite.openDatabase("testCards.db");
  const [cardNumber, setCardNumber] = useState(undefined);
  const [cardName, setCardName] = useState(undefined);
  const [cardDate, setCardDate] = useState(undefined);
  const [cards, setCards] = useState([]);

  useEffect(()=>{
    db.transaction((tx) => {  
      // create table 
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS cards (id INTEGER PRIMARY KEY AUTOINCREMENT, number TEXT, name TEXT, date TEXT)');
    });
    // import cards
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM cards', null, 
        (txObj, resultSet) => {
          setCards(resultSet.rows._array);
          console.log("cards imported")
        },
        (txObj, error) => console.log(error)
      );
    });
  }, []);

  // save new card to database
  const pushToDB = () => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO users (number, name, date) VALUES (?,?,?)', 
      [cardNumber, cardName, cardDate],
      (txObj, resultSet)=>{console.log('card saved')}, // use an array to store cards??
      (txObj, error)=>{console.log(error)}
      );
    });
  }
  
    

  return (
    <TouchableOpacity style={styles.container} onPress={handleExpand}>
      <Text style={styles.myTitle}>
        card
      </Text>
      <View style={styles.details}>
        <Text style={styles.cardNo}>{cardNumber}</Text>
        <Text style={styles.expText}>VALID THRU</Text>
        <Text style={styles.date}>12/12</Text>
        <Text style={styles.name}>JOHN DOE</Text>
      </View>

      {isOpen && (
        <View style={styles.menu}>
          <View style={styles.inputs}>
            <TextInput style={styles.textInput} placeholder='Number' placeholderTextColor='#292f34' onChangeText={setCardNumber}/>
            <TextInput style={styles.textInput} placeholder='Name' placeholderTextColor='#292f34' onChangeText={setCardName}/>
            <TextInput style={styles.textInput} placeholder='Expiry Date' placeholderTextColor='#292f34' onChangeText={setCardDate}/>
          </View>
          

          <TouchableOpacity style={styles.moreButton} onPress={handleCreatePress}>
            <Text style={styles.moreText}>Create</Text>
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
    backgroundColor: '#010b13',
    borderRadius: 20,
    margin: 25,
    borderWidth: 5,
    
    overflow: 'visible',
    elevation: 20
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
    backgroundColor: '#010b13',
    
  },
  moreButton: {
    position: 'absolute',
    bottom: 0,
    aspectRatio: 5.5,
    width: '100%',
    backgroundColor: "#ecf0f1",
    borderRadius: 25,
    justifyContent: 'center',
  },
  moreText: {
    color: '#292f34',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textInput: {
    marginTop: 20,
    aspectRatio: 5.5,
    width: '100%',
    backgroundColor: "#ecf0f1",
    borderRadius: 25,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    
  },
  inputs: {
    paddingTop: 60
  }
  
});
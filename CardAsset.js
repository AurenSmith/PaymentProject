import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import * as SQLite from 'expo-sqlite';
// import { styles } from './Style';

export default function CardAsset() {
  const [isOpen, setOpen] = useState(false);

  const handleExpand = () => {
      setOpen(!isOpen);
  }

  // database stuff
  const db = SQLite.openDatabase("testCards.db");
  const [cards, setCards] = useState([]);
  const [myNumber, setNumber] = useState(undefined);
  const [myName, setName] = useState(undefined);
  const [myDate, setDate] = useState(undefined);

  const [select, setSelect] = useState(false);
  const [myTest, setTest] = useState('');

  useEffect(()=>{
    db.transaction((tx) => {  
      // create table 
      tx.executeSql('CREATE TABLE IF NOT EXISTS cards (id INTEGER PRIMARY KEY AUTOINCREMENT, number TEXT, name TEXT, date TEXT)');
    });
    // import cards
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM cards', null, 
        (txObj, resultSet) => setCards(resultSet.rows._array),
        (txObj, error) => console.log(error)
      );
    });
  }, []);

  // save new card to database
  const addCard = () => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO cards (number, name, date) VALUES (?, ?, ?)', [myNumber, myName, myDate],
        (txObj, resultSet) => {
          let existingCards = [...cards];
          existingCards.push({ id: resultSet.insertId, number: myNumber, name: myName, date: myDate});
          setCards(existingCards);
          setNumber(undefined);
          setName(undefined);
          setDate(undefined);
        },
        (txObj, error)=>{console.log(error)}
      );
    });
  }

  const [active, setActive] = useState(false);

  const handleActive = () => {
      setActive(!active);
  }

  var testNumber;
  var testName;
  var testDate;
  cards.map((card)=>{
    if(card.id == myTest) {
      testNumber = card.number;
      testName = card.name;
      testDate = card.date;
    }
  })

  const CardObj = () => {
    return (
      <View>
        {myTest && (
          <Text style={styles.myTitle}>card</Text>
        )}
        
        {myTest && (
          <View style={styles.details}>
            <Text style={styles.cardNo}>{testNumber}</Text>
            <Text style={styles.expText}>VALID THRU</Text>
            <Text style={styles.date}>{testDate}</Text>
            <Text style={styles.name}>{testName}</Text>
          </View>
        )}

        {!myTest && (
          <View style={styles.objectDiv}>
            <View style={styles.plusDiv}>
              <Text style={styles.plusText}>+</Text>
            </View>
          </View>
        )}
      </View>
    );
  }

  const showCards = () => {
    return cards.map((cards) => {
      return (
        <TouchableOpacity style={styles.myRadioButton} onPress={handleActive}>
          {active && (
            <View style={styles.radioFill} />
          )}
        </TouchableOpacity>
      );
    });
  }

  const handleSwap = () => {
    setTest('');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardButton} onPress={handleExpand}>
        <View style={styles.cardContainer}>
          <CardObj />
        </View>
        
        {isOpen && (
          <View style={styles.menu}>
            {myTest && (
              <View>
                <View style={styles.currentDiv}>
                  <Text style={styles.total}>$14,112.19</Text>
                  <Text style={styles.percent}>+14.73%</Text>
                </View>
                <Text style={styles.preText}>Previous period</Text>
                <Text style={styles.period}>$12,300.35</Text>

                <Image style={styles.myGraph} source={require('./assets/Graph.png')} />

                <TouchableOpacity style={styles.graphButton}>
                  <Text style={styles.moreText}>More</Text>
                </TouchableOpacity>
              </View>
            )}
            {!myTest && (
              <View style={styles.inputs}>
                <TextInput onChangeText={setNumber} value={myNumber} style={styles.textInput} placeholder='Number' placeholderTextColor='#292f34'></TextInput>
                <TextInput onChangeText={setName} value={myName} style={styles.textInput} placeholder='Name' placeholderTextColor='#292f34'></TextInput>
                <TextInput onChangeText={setDate} value={myDate} style={styles.textInput} placeholder='Expiry Date' placeholderTextColor='#292f34'></TextInput>
                
                <TouchableOpacity style={styles.moreButton} onPress={addCard}>
                  <Text style={styles.moreText}>Create</Text>
                </TouchableOpacity>
              </View>
            )}
            
            
          </View>
        )}
      </TouchableOpacity>

      <View style={styles.radioContainer}>
        {cards.map(card => (
          <View style={styles.wrapper} key={card.id}>
            <TouchableOpacity 
              style={styles.myRadioButton}
              onPress={() => setTest(card.id)}
            >
              {myTest === card.id && (
                <View style={styles.radioFill} />
              )}
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity style={styles.myRadioButton} onPress={handleSwap}>
          {!myTest && (
            <View style={styles.radioFill} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  cardButton: {
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
    
    justifyContent: 'flex-start',
    backgroundColor: '#010b13',
  },
  moreButton: {
    marginTop: '12.5%',
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
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  myRadioButton: {
    borderRadius: 36,
    width: 36,
    height: 36,
    marginHorizontal: 12,
    borderColor: '#010b13',
    borderWidth: 4,
    backgroundColor: '#ecf0f1'
  },
  radioFill: {
    flex: 1,
    borderRadius: 36,
    backgroundColor: '#010b13'
  },
  cardContainer: {
    flex: 1,
    height: 158,
    // width: '100%',
  },
  contentContainer: {
    flex: 1,
    // height: 400
  },
  currentDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    color: '#ecf0f1',
    fontWeight: 'bold',
    fontSize: 20,
  },
  percent: {
    color: '#9F9F9F',
    fontWeight: 'bold',
    fontSize: 12,
  },
  preText: {
    color: '#9F9F9F',
    fontWeight: 'bold',
    fontSize: 12,
  },
  period: {
    color: '#B0B0B0',
    fontWeight: 'bold',
    fontSize: 12,
  },
  myGraph: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  graphButton: {
    marginVertical: 25,
    backgroundColor: '#ecf0f1',
    width: '100%',
    aspectRatio: 5,
    borderRadius: 100,
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  plusDiv: {
    backgroundColor: '#ecf0f1',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
  },
  plusText: {
    color: '#010b13',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  objectDiv: {
    width: 300,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
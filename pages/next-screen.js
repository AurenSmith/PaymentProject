import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import PieChartAsset from '../PieChartAsset';
import { useNavigation } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';
import { useState, useEffect } from 'react';

function NextScreen() {
  const db = SQLite.openDatabase('payment.db'); // OPEN DATABASE 
  const navigation = useNavigation();
  const [items, setItems] = useState([]);

  {/* RUN ON LOAD */}
  useEffect(()=>{
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM pay', null,  // RETRIEVE PAYMENTS FROM DATABASE
        (txObj, resultSet) => setItems(resultSet.rows._array), // SET TO ARRAY
        (txObj, error) => console.log(error) // LOG ERROR
      );
    });
  }, []);

  {/* VARIABLES FOR PAYMENT REPORTS */}
  var myAmount;
  var myDetails;
  var myName;
  items.map((item)=>{ // LOOP THROUGH ITEMS ARRAY
    myAmount = item.amount;
    myDetails = item.details;
    myName = item.name;
  })

  const handleDrop = () => {
    db.transaction((tx) => {
      tx.executeSql('DROP TABLE pay');
    })
  }

  const generatePurchase = () => {
    navigation.replace('HomeScreen');
  }

  const handleCancel = () => {

  }

  return (
    <View style={styles.container}>
      <View  style={{flexDirection: 'row'}}>
        <PieChartAsset  />
        <View style={styles.square}>
          <Text style={styles.nextAmountDollars}>{'$' + myAmount}</Text>
          <Text style={styles.nextAmountPercentage}>-0.00%</Text>
        </View>
      </View>
      <View style={styles.order}>
        <Text style={styles.nameText}>{myName}</Text>
        <Text style={styles.detailsText}>{myDetails}</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity style={styles.buttonSmall} onPress={()=>navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMedium} onPress={handleDrop}>
          <Text style={styles.buttonText}>Add to Group Order</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity style={styles.buttonSquare} onPress={()=>Alert.alert('Exported', 'Purchase Exported')}>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLarge} onPress={generatePurchase}>
          <Text style={styles.buttonText}>Generate Purchase</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={{marginTop: 20}}>Process Individual Purchase Order</Text>
    </View>
  )
  }
export default NextScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: '5%',
      alignItems: 'center',
      
      backgroundColor: '#ecf0f1',
      },
    square: {
      width: 130,
      height: 90,
      backgroundColor: '#010b13',
      borderRadius: 20,
      marginTop: 30,
      marginRight: 20,
      marginLeft: 20,
      alignItems: 'center',
      justifyContent:  'center',
      elevation: 10,
    },
    nextAmountDollars: {
      color: '#ecf0f1',
      fontWeight: 'bold',
      fontSize: 20
    },
    nextAmountPercentage: {
      color: '#ecf0f1',
      fontWeight: 'bold',
      fontSize: 10
    },
    order: {
      width: '80%',
      height: '45%',
      backgroundColor: '#010b13',
      marginTop: 50,
      borderRadius: 20,
      elevation: 10,
    },
    buttonText: {
      color: '#292f34',
      fontSize: 16,
      fontWeight: 'bold'
    },
    buttonSmall: {
      backgroundColor: '#ecf0f1',
      borderRadius: 30,
      width: '25%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      elevation: 5,
    },
    buttonMedium: {
      backgroundColor: '#ecf0f1',
      borderRadius: 30,
      width: '50%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 5,
    },
    buttonLarge: {
      backgroundColor: '#ecf0f1',
      borderRadius: 30,
      width: '65%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 5,
      
    },
    buttonSquare: {
      backgroundColor: '#ecf0f1',
      borderRadius: 15,
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15,
      elevation: 5,
      
    },
    detailsText: {

    },
    nameText: {
      
    }
  })
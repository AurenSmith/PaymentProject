import { StyleSheet, Text, View, } from 'react-native';
import PieChartAsset from '../PieChartAsset';



function NextScreenAsset() {
    return (
      <View style={styles.container}>
        <View  style={{flexDirection: 'row'}}>
          <PieChartAsset />
          <View style={styles.square}>
            <Text style={styles.nextAmountDollars}>-$1.00</Text>
            <Text style={styles.nextAmountPercentage}>-0.00%</Text>
          </View>
        </View>
        <View style={styles.next}> 
  
        </View>
      </View>
      
    )
  }
export default NextScreenAsset;
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
      },
      square: {
        width: 130,
        height: 90,
        backgroundColor: 'grey',
        borderRadius: 20,
        marginTop: 30,
        marginRight: 20,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent:  'center'
      },
      nextAmountDollars: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
      },
      nextAmountPercentage: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10
      }
  })
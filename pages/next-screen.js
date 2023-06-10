import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import PieChartAsset from '../PieChartAsset';



function NextScreen() {
  
    return (
      <View style={styles.container}>
        <View  style={{flexDirection: 'row'}}>
          <PieChartAsset />
          <View style={styles.square}>
            <Text style={styles.nextAmountDollars}>-$0.00</Text>
            <Text style={styles.nextAmountPercentage}>-0.00%</Text>
          </View>
        </View>
        <View style={styles.order}></View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity style={styles.buttonSmall}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonMedium}>
            <Text style={styles.buttonText}>Add to Group Order</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity style={styles.buttonSquare}>
            <ImageBackground source={require('../assets/button.png')} resizeMode = 'cover'
            />

            

          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLarge}>
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
        paddingTop: 50,
        alignItems: 'center',
      },
      square: {
        width: 130,
        height: 90,
        backgroundColor: '#258699',
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
      },
      order: {
        width: '80%',
        height: '45%',
        backgroundColor: '#258699',
        marginTop: 50,
        borderRadius: 20
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
      },
      buttonSmall: {
        backgroundColor: '#258699',
        borderRadius: 30,
        width: '25%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
      },
      buttonMedium: {
        backgroundColor: '#258699',
        borderRadius: 30,
        width: '50%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonLarge: {
        backgroundColor: '#258699',
        borderRadius: 30,
        width: '65%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonSquare: {
        backgroundColor: 'black',
        borderRadius: 15,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
      },
      
      
  })
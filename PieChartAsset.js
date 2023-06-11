import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import PieChart from 'react-native-pie-chart';


export default function PieChartAsset() {
    return (
        <View>
            <PieChart
          widthAndHeight={150}
          series={[62.5, 37.5]}
          sliceColor={['#F76077', '#FDAA98']}
          coverFill={null}
          coverRadius={0.65}
          style={{transform: [{rotate: '120deg'}],}}
          />
          <View style={styles.pieInner}>
            <Text style={styles.percentage}>62.5%</Text>
            <Text style={styles.recomm}>Recommendation</Text>

          </View>
        </View>
    )

    
}

const styles = StyleSheet.create({
    pieInner: {
        position: 'absolute', 
        width: 155  , 
        height: 140, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    percentage: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 25,
        
    },
    recomm: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 10
    }
})
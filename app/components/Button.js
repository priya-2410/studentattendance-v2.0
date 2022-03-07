import React, { useState } from 'react';
import { 
   SafeAreaView, 
   View,
   FlatList, 
   StyleSheet, 
   Text,
   TouchableOpacity, 
} from 'react-native';

const [changBack,backgroundColor]=useState('green')

function changIt() {
  backgroundColor('red');
}

const DATA1 = 'Task one';
const DATA2 = 'Task two';

  function Buttonn({title,onPress,style, color="primary"}){
    return (
      <View style={styles.container}>
  
        <TouchableOpacity
         style={{
          
          backgroundColor:changBack,
          padding: 5,
          width:50,
          justifyContent:'center',
          alignItems:'center',
          height:50,
          borderRadius:5
         }}  
         onPress={changIt}
         >
          <View>
            <Text>P</Text>
          </View>
        </TouchableOpacity>
  
      
      </View>
  
    );
 }
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
     
     justifyContent:'center',
     alignItems:'center',
     borderRadius:10
    },
  });
export default Buttonn;
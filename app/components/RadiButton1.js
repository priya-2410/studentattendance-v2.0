
import React, {useState} from 'react';
 
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
 
const CustomSwitch1 = ({
  navigation,
  selectionMode,
  roundCorner,
  option1,
  option2,
  option3,
  onSelectSwitch,
  selectionColor
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);
 
  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };
 
  return (
    
      <View
        style={{
          height: 30,
          width: 100,
          backgroundColor: '#55a4fa',
       
          // borderWidth: 1,
          // borderColor: selectionColor,
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 1,
       marginLeft:7,
       marginTop:10
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 1 ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
            borderRightWidth:1,
            borderRightColor:'#55a4fa'
          }}>
          <Text
            style={{
              color: getSelectionMode == 1 ? 'white' : 'black',
              fontSize:12,
            }}>
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={{
            flex: 1,
 
            backgroundColor: getSelectionMode == 2 ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
            borderRightWidth:1,
            borderRightColor:'#55a4fa'
            
          }}>
          <Text
            style={{
              color: getSelectionMode == 2 ? 'white' : 'black',
              fontSize:12,
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(3)}
          style={{
            flex: 1,
 
            backgroundColor: getSelectionMode == 3 ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: getSelectionMode == 3 ? 'white' : 'black',
              fontSize:12,
            }}>
            {option3}
          </Text>
        </TouchableOpacity>
      </View>
   
  );
};
export default CustomSwitch1;
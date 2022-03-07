import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Platform} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useLogin } from '../../LoginProvider';
import moment from "moment";
const DatePicker = () => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const {formatdate} = useLogin();
console.log(date)
  const showPicker = () => {
    setIsPickerShow(true);
    
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Display the selected date */}
     

      {/* The button that used to trigger the date picker */}
      {!isPickerShow && (
        <View style={styles.btnContainer}>
           <MaterialCommunityIcons name="calendar" size={25} style={{margin:5,}} color="#55a4fa"  onPress={showPicker} 
        ></MaterialCommunityIcons>
          
        </View>
        
      )}
 <View style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>{moment(date).format('DD.MM.YYYY')}</Text>
      </View>
      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          //is24Hour={true}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
      
    </View>
  );
};

// Kindacode.com
// just add some styles to make our app look more beautiful
// This is not the focus of this article
const styles = StyleSheet.create({
  container: {
 
    
 flexDirection:'row',
    justifyContent: 'flex-start',
    width:"40%",
    marginTop:5,
    height:40,
    margin:10,marginLeft:20,
    // backgroundColor:'pink',
   
  // backgroundColor:'pink'
  },
  pickedDateContainer: {
    backgroundColor: 'white',
    alignContent:'center',
    justifyContent:'center',
   
    height:33
  },
  pickedDate: {
    fontSize: 12,
    color: '#000000',
    alignContent:'center',
    justifyContent:'center'
  },
  btnContainer: {
    padding: 1,
    height:50,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    backgroundColor:"red",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default DatePicker;
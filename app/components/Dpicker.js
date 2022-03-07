import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import { useLogin } from '../../LoginProvider';
import {getCalender} from '../screens/Dashboard';

const DatesPicker = ({navigation}) => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  //const [date, setDate] = useState(new Date(Date.now()));

  const {date, setDate} = useLogin();

  console.log(date)
   const showPicker = () => {
    setIsPickerShow(true);
  };
  // //console.log(date)
  // var fromDateday=date.getDate();
	// 				var fromDatemonth=date.getMonth();
	// 				var fromDateyear=date.getFullYear();
	// 				var d = Date.UTC(fromDateyear, fromDatemonth, fromDateday);
  //        const formatdate=moment.utc(d)

  const onChange = (event, value) => {
    
    setDate(value);
   getCalender(value)
    //setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };


  return (
    <View style={styles.container}>
      {/* Display the selected date */}
     <View style={{flexDirection: 'row',flex:1,backgroundColor:"#fff",height:50,justifyContent: "center",alignItems: "center",marginLeft:13,}}>
        {/* The button that used to trigger the date picker */}
      {!isPickerShow && (
        // <View style={styles.btnContainer}>
        //   <Button title="Select Date" color="dodgerblue" onPress={showPicker} />
        // </View>
        <View style={styles.icon}>  
        <MaterialCommunityIcons name="calendar" size={25} color="#55a4fa"  onPress={showPicker} 
        ></MaterialCommunityIcons>
             </View>
       )}
<View style={styles.pickedDateContainer}>
{/* <Text>{data.dayorder}</Text> */}

        <Text style={styles.pickedDate}>{moment(date).format('DD.MM.YYYY')}</Text>
      </View>
      
      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
          style={styles.datePicker}
          
        />
      )}
       </View>

     </View>

     
     
  );
};

// Kindacode.com
// just add some styles to make our app look more beautiful
// This is not the focus of this article
const styles = StyleSheet.create({
  container: {
   flexDirection: 'row',flex:1,justifyContent: "center",alignItems: "center",
   alignItems: 'center',
   borderRightWidth:1,
   borderColor: "#DBE6F4",
   width:"5%",
  //  backgroundColor:"red",
  },
  containernn:{
    width:"10%",
    flexDirection: 'row',flex:1,justifyContent: "center",alignItems: "center",
    alignItems: 'center',
    borderRightWidth:1,
    borderColor: "#DBE6F4",
    backgroundColor:"#fff",
  },
  pickedDateContainer: {
    padding: 4,
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 12,
    padding:2,
    color: 'black',
    padding:5,
  },
  btnContainer: {
    padding: 1,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
   
  },
  icon:{  
  paddingTop:3,
   height:30,
  },
});

export default DatesPicker;
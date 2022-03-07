import { View, StyleSheet, Text } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import React,{useState} from 'react';
import HomeScreen from './HorizontalScroll';

const Example = () => (
 

  <View style={styles.container}>
     {/* <View style={{height:5,backgroundColor:'pink'}}>
        <Text >{date.toUTCString()}</Text>
      </View> */}

    <CalendarStrip  
      style={{height:90, paddingBottom: 10}}
      scrollable
      calendarHeaderStyle={{color: '#55a4fa',width:100,fontWeight:'bold'}}
      onDateSelected={date => console.log(date)}
      dateNumberStyle={{color: 'black',width:100}}
      dateNameStyle={{color: 'black'}}
      highlightDateNumberStyle={{color: 'red',width:100}}
      highlightDateNameStyle={{color: 'red'}}
      markingType={'custom'}>
  
    </CalendarStrip>
  
  </View>
  
);

const styles = StyleSheet.create({
  container: { 
    backgroundColor:'white',
    // flexDirection:'row'
  
  }
});
export default Example;

// import { View, StyleSheet } from 'react-native';
// import CalendarStrip from 'react-native-calendar-strip';
// import React,{useState} from 'react';
// const Example = () => (
//   <View style={styles.container}>
//     <CalendarStrip
//       scrollable
//       style={{height:100, paddingTop: 10, paddingBottom: 10}}
//       calendarColor={'white'}
//       calendarHeaderStyle={{color: 'dodgerblue'}}
//       dateNumberStyle={{color: 'black'}}
//       dateNameStyle={{color: 'black'}}
     
//     />
//   </View>
// );

// const styles = StyleSheet.create({
//   container:{
//     marginRight:30,
   
//   }
// });

// export default Example;
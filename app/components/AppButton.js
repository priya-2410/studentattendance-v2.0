//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';



function AppButton({title,onPress,style, color="primary" ,disable}){
   return(
      <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress} color={color} disabled={disable}>
      
      <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
   )
}




export default AppButton;


const styles = StyleSheet.create({
    container:{
   
     
     alignItems:'center',
     padding:10,
     width:"100%",
     backgroundColor:"#f55d5d",
     borderRadius:5,
     height:40,
    },
    text:{
       fontSize:13,
       color:"white",
       fontWeight:'bold'
    }
   
   
 
 
});

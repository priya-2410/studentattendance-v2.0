// SearchBar.js
import React from "react";
import {View,KeyboardAvoidingView } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import SearchBar from "react-native-dynamic-search-bar";
export default function Search() {
    return(
        <KeyboardAvoidingView style={{width:"94%",backgroundColor:'white',borderRadius:5,padding:5,marginLeft:10,marginTop:20,marginBottom:17,shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 8, shadowOffset: {
          width: 0,
          height: 4
        }}}>
            <SearchBar
            
  fontColor="#c6c6c6"
  iconColor="#c6c6c6"
  shadowColor="#282828"
  cancelIconColor="#c6c6c6"
  backgroundColor="white"
  placeholder="Search Register Number "
  // onChangeText={text => {
  //   this.filterList(text);
  // }}
  // onPressCancel={() => {
  //   this.filterList("");
  // }}
  onPress={() => alert("No values to clear")
 
 }
 style={{height:35}}
/>
</KeyboardAvoidingView>
    )
}
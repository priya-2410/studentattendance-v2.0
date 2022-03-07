import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Button
} from "react-native";
import CustomSwitch from "../components/RadioButton";
import DatePicker from "../components/DatePicker";
// import { Card } from 'react-native-paper';
import { Card } from "react-native-shadow-cards";
import AppButton from "../components/AppButton";
import { useLogin } from "../../LoginProvider";
import { ScrollView } from "react-native-virtualized-view";
import Icon from "react-native-vector-icons/FontAwesome";
import { SearchBar } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native-web";


export default function LongAbsentDisContinue() {
  const {
    profile
  } = useLogin();
  
  
  const [text, setText] = useState("");
  

  const onSelectSwitch = (index) => {
    console.log("Selected index: " + index);
  };
 
 //alert(JSON.stringify(name.firstname))

 
 
  const [filteredDataSource, setFilteredDataSource] = useState({});
  const [id, setId] = useState()
  const [search, setSearch] = useState("");
  


  useEffect(() => {
    fetch('http://172.16.22.73:8080/api/masters/students/'+id,
    {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + profile.token,
            }})
      .then((response) => response.json()
      )
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, [search]);

 

  const handleClick = (id) => {
    setId(id)
    setSearch(id)
    
  }
  return (
    <View  style={{ backgroundColor: "#f6f9fe",padding:10 ,flex:1}}>
         <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => handleClick(text)}
          onClear={(text) => handleClick('')}
          placeholder="Type Register Number"
         value={id}
          containerStyle={{
            backgroundColor: "transparent",
            borderBottomColor: "transparent",
            borderTopColor: "transparent",
            width: "97%",
            marginLeft: 5,
          }}
          inputContainerStyle={{
            backgroundColor: "transparent",
            borderRadius: 8,
            borderWidth: 2,
            borderStyle: "solid",
            borderBottomWidth: 1,
            height: 38,
          }}
          
        />
       
     
      
    <View style={{ backgroundColor: "#f6f9fe" }}>
     
      
      {/* <View style={{height:40,width:"8%",marginLeft:25}}>
      <Button title='click' color="#55a4fa" ></Button>

      </View>
       */}

       
       {/* <Button title="submit" onPress={handleClick}></Button> */}
      <Card
        style={{

          paddingTop: 15,
          backgroundColor: "#fff",
          marginLeft: 10,
          margin: 10,
          height: "20%",
          shadowColor: "#30C1DD",
          shadowRadius: 10,
          shadowOpacity: 0.6,
          elevation: 8,
          shadowOffset: {
            width: 0,
            height: 4,
          },
        }}
      >
    
  <View style={{flexDirection:'row'}}>
    <Text style={{color:'black',paddingLeft: 20,fontWeight: "bold",}}>RegNo :</Text>
        <Text
          style={{
            color: "#000000",
            fontSize: 15,
            paddingBottom: 5,
            justifyContent: "space-between",
            
            marginLeft:5
          }}
        >  
        {filteredDataSource.admissionid} 
       
        </Text>
        </View>

        <View style={{flexDirection:'row'}}>
        <Text style={{color:'black',paddingLeft: 20,fontWeight: "bold",}}>Name  :</Text>
        <Text style={{ color: "#000000", fontSize: 12, marginLeft: 7, margin:2 }}>
        {filteredDataSource.firstname}
        </Text>
        </View>
        <View style={{flexDirection:'row',margin:3}}>
        <Text style={{color:'black',paddingLeft: 16,fontWeight: "bold",}}>Course :</Text>
        <Text style={{ color: "#000000", fontSize: 12, marginLeft: 5,margin:2 }}>
        {filteredDataSource.programmename}
        </Text>
        </View>
        <View style={{flexDirection:'row',margin:2,}}>
        <Text style={{color:'black',paddingLeft: 18,fontWeight: "bold",}}>Batch   :</Text>
        <Text style={{ color: "#000000", fontSize: 12, marginLeft:5 ,margin:3}}>
        {filteredDataSource.batchname}
        </Text>
        </View>
      </Card>
      <Card
        style={{
         margin:5,
          marginLeft: 10,
          height: "20%",
          shadowColor: "#30C1DD",
          shadowRadius: 10,
          shadowOpacity: 0.6,
          elevation: 8,
          shadowOffset: {
            width: 0,
            height: 4,
          },
        }}
      >
        <CustomSwitch
          selectionMode={2}
          roundCorner={false}
          option1={"Long Absent"}
          option2={"Discontinue"}
          onSelectSwitch={onSelectSwitch}
          selectionColor={"#55a4fa"}
          
        />

        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <DatePicker />
        </View>
      </Card>
      <Card
        style={{
          margin: 6,
          marginLeft: 10,
          height: "30%",
          shadowColor: "#30C1DD",
          shadowRadius: 10,
          shadowOpacity: 0.6,
          elevation: 8,
          shadowOffset: {
            width: 0,
            height: 4,
          },
        
        }}
      >
    
         <TextInput
        placeholder="Remarks"
        placeholderTextColor={'red'} 
        value={text}
        onChangeText={(text) => setText(text)}
        multiline={true}
        style={{height:"90%", marginTop: 20,paddingBottom:109,paddingLeft:20}}
      
      />
      </Card>

      <View
        style={{
          
          height: 200,
          width: "94%",
          marginLeft: 9,
          marginTop:7
         
        }}
      >
        <AppButton title="Done" onPress={()=>alert('saved')}></AppButton>
      </View>
      {/* <View style={{flex:1,backgroundColor:'pink',height:100}}></View> */}
    </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
  
  },
  text: {
    color: "#55a4fa",
    marginLeft: 15,
    marginTop: 5,
    fontWeight: "bold",
  },
  texts: {
    color: "#55a4fa",
    marginLeft: 25,
    marginTop: 15,
    fontWeight: "bold",
  },
});

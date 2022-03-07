import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import { SearchBar } from "react-native-elements";
import Seperator from "../components/Separator";
import CustomSwitch from "../components/RadioButton";
import DatePicker from "../components/DatePicker";
import CustomSwitch1 from "../components/RadiButton1";
import { Card } from "react-native-shadow-cards";
import AppButton from "../components/AppButton";
import { useLogin } from "../../LoginProvider";

export default function MLOD() {
  const {
    profile
  } = useLogin();
  const [days, setDays] = useState("");
  console.log(days)
  const [filteredDataSource, setFilteredDataSource] = useState({});
  
  const [id, setId] = useState()
  const [search, setSearch] = useState("");
  const onSelectSwitch = (index) => {
    console.log("Selected index: " + index);
  };
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
  

  const saveData = async () => {
    console.log(filteredDataSource)
    try {
      await fetch(
        "http://172.16.22.73:8080/api/masters/students/mlods",
        {
          method: "post",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: filteredDataSource,
          }),
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
  const handleClick = (id) => {
    setId(id)
    setSearch(id)
    
  }
  return (
    <ScrollView style={{ padding: 8, backgroundColor: "#f6f9fe" }}>
      <View
        style={{
          flex: 1,
          height: 70,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
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
      </View>

      <Card
        style={{
          paddingTop: 15,
          backgroundColor: "#fff",
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
          margin: 20,
          marginLeft: 10,
          height: "53%",
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
          option1={"ML"}
          option2={"OD"}
          onSelectSwitch={onSelectSwitch}
          selectionColor={"#55a4fa"}
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            marginLeft: 20,
            height: "15%",
            width: "90%",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 8 }}>
            Enter days:
          </Text>
          <TextInput
            style={{
              height: 25,
              marginLeft: 65,
              width: "32%",
              borderWidth: 0.9,
              marginTop: 10,
              borderRadius: 2,
              borderColor:'#55a4fa'
            }}
            // placeholder="Days"
            onChangeText={(days) => setDays(days)}
          //  defaultValue={days}
            keyboardType="numeric"
          />
        </View>

        <Text
          style={{
            fontSize: 15,
            marginLeft: 20,
            color: "#000000",
            fontWeight: "bold",
            marginTop:16
          }}
        >
          From Date
        </Text>
        <View style={{ flexDirection: "row", width: "90%" }}>
          <DatePicker />

          <CustomSwitch1
            selectionMode={2}
            roundCorner={false}
            option1={"AN"}
            option2={"FN"}
            option3={"FULL"}
            onSelectSwitch={onSelectSwitch}
            selectionColor={"#55a4fa"}
          />
        </View>
        <Text
          style={{
            fontSize: 15,
            marginLeft: 20,
            color: "#000000",
            fontWeight: "bold",
            marginTop:16
          }}
        >
          To Date
        </Text>
        <View style={{ flexDirection: "row", width: "90%" }}>
          <DatePicker />
          <CustomSwitch1
            selectionMode={2}
            roundCorner={false}
            option1={"AN"}
            option2={"FN"}
            option3={"FULL"}
            onSelectSwitch={onSelectSwitch}
            selectionColor={"#55a4fa"}
          />
        </View>
      </Card>

      <View style={{ height: 100, width: "93%", margin: 5,marginLeft:12 }}>
        <AppButton title="Done" onPress={saveData}></AppButton>
      </View>
   
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexGrow: 1,
    marginTop: 10,
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
  cardDesign: {
    margin: 5,
    height: 45,
    shadowColor: "#30C1DD",
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

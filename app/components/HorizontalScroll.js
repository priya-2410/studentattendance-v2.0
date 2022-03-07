import React from 'react';
import {View, ScrollView, TouchableOpacity, Text, StyleSheet} from 'react-native';


export default function HomeScreen() {
  return (
    <View horizontal={true} style={{flexDirection:'row',marginLeft:15}}>
        <TouchableOpacity>
        <View style={styles.view}>
            <Text style={{marginLeft:20,marginTop:15}}>I</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.views}>
        <View style={styles.view}>
            <Text style={{marginLeft:20,marginTop:15}}>II</Text>
        </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.view}>
        <View style={styles.view}>
            <Text style={{marginLeft:20,marginTop:15}}>III</Text>
        </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.views}>
        <View style={styles.view}>
            <Text style={{marginLeft:20,marginTop:15}}>IV</Text>
        </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.view}>
        <View style={styles.view}>
            <Text style={{marginLeft:20,marginTop:15}}>V</Text>
        </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.views}>
        <View style={styles.view}>
            <Text style={{marginLeft:20,marginTop:15}}>VI</Text>
        </View>
        </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    
      backgroundColor: 'white',
      padding:4,
      marginTop:4,
     
     
    },
    view:{
        height:50,
        backgroundColor:'white',
        width:50,
        borderColor:'dodgerblue',
        borderWidth:1
     
    },
    views:{
        height:50,
        backgroundColor:'white',
        width:50,
        borderColor:'dodgerblue',
        borderWidth:1
     
    }
  });
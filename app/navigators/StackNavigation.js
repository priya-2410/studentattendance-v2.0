import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView,   Picker, } from 'react-native';
import Attendance from '../screens/Attendance';
import Dashboard from '../screens/Dashboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();


export default function StackNavigation(){
    return(
          <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
         
        
        />
        {/* <Stack.Screen name="Menu" component={Menu} /> */}
        <Stack.Screen name="ATTENDANCE" component={Attendance} />
        
      </Stack.Navigator>
    </NavigationContainer>
    )
}


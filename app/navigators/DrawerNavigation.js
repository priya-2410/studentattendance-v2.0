import React, {useState, useEffect} from 'react';
import { Button, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Attendance from '../screens/Attendance';
import LongAbsentDisContinue from '../screens/LA.DisContinue';
import Dashboard from '../screens/Dashboard';
import MLOD from '../screens/MLOD';
import { useLogin } from '../../LoginProvider';
import StackNavigation from './StackNavigation'


const Drawer = createDrawerNavigator();
const CustomDrawer = props => {
  const { setIsLoggedIn, profile } = useLogin();
  const [employee, setemployee] = useState({});
  //console.log(employee.firstname)
  const employees = async () => {
    try {
     const response = await fetch('http://172.16.22.73:8080/api/auth/employees/e75a062d-9ade-45d5-bf5f-e05e03f920d0',
     {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
    'Authorization': 'Bearer '+profile.token}
    }
     );
     const json = await response.json();
     //alert(JSON.stringify(json.firstname))
     setemployee(json);
   } catch (error) {
     console.error(error);
   } 
 }

 useEffect(() => {
   employees();
 }, []);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#f6f6f6',
            marginBottom: 20,
          }}
        >
          <View>
          <Text style={{fontSize:18, fontWeight:'bold',color:'#55a4fa'}}>{employee.firstname}</Text>
            <Text style={{color:'black'}}>{employee.email}</Text>
          
          </View>
          <Image
            source={{
              uri:
                profile.avatar ||
                'https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
            }}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 50,
          backgroundColor: '#f6f6f6',
          padding: 20,
        }}
        onPress={() => setIsLoggedIn(false)}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function DrawerNavigation() {


  return (
    <NavigationContainer independent={true}>
       
    
      <Drawer.Navigator initialRouteName="Dashboard" screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
         },
     }}
     drawerContent={props => <CustomDrawer {...props} />}
      >
          
        <Drawer.Screen name="DASHBOARD" component={Dashboard} style={styles.container} />
        <Drawer.Screen name="LONGABSENT/DISCONTINUE" component={LongAbsentDisContinue} />
        <Drawer.Screen name="ATTENDANCE" component={Attendance} />
        <Drawer.Screen name="ML/OD" component={MLOD} />
        {/* <Drawer.Screen name="Medical Leave"  />
        <Drawer.Screen name="Menu"  /> */}
      </Drawer.Navigator>
      
      
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
  backgroundColor:"red",
  }
  
});
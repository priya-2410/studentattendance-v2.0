import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  SafeAreaView,
} from "react-native";
import MainNavigator from "./MainNavigator";
import LoginProvider from "./LoginProvider";
import { NavigationContainer } from "@react-navigation/native";
{
  /* <Dashboard /> */
}
{
  /* <Menu /> */
}
{
  /* <Drawer /> */
}
{
  /* <Attendance /> */
}
{
  /* <DrawerNavigation /> */
}
{
  /* <LeaveScreen /> */
}
{
  /*<StackNavigation />*/
}
{
  /*<Login />*/
}
export default function App() {
  return (
    <LoginProvider>
      <NavigationContainer independent={true}>
        <MainNavigator />
      </NavigationContainer>
    </LoginProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

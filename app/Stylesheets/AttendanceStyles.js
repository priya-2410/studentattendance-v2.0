import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#f6f9fe",
      padding: 7,
      flex:1
    },
    item: {
      flexDirection: "row",
      height: 45,
      width: "100%",
    },
    title: {
      fontSize: 15,
  
      paddingLeft: 15,
      color: "#000000",
      fontWeight: "bold",
    },
    titles: {
      fontSize: 10,
      fontWeight: "bold",
      marginLeft: 16,
    },
    text: {
      color: "#000000",
      fontSize: 12,
      paddingLeft: 10,
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
      padding: 5,
    },
    dropdown: {
      height: 29,
      borderColor: "gray",
      borderWidth: 0.5,
      borderRadius: 3,
      paddingHorizontal: 5,
      width: 43,
      marginLeft: 10,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: "absolute",
      backgroundColor: "white",
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

  
  export default styles;
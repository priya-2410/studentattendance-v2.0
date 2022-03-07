import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
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
  containers: {
    flexDirection: "row", // set elements horizontally, try column.
    justifyContent: "space-between",
    padding: 5,
  },
  attendanceContainer: {
    flexDirection: "row", // set elements horizontally, try column.
    justifyContent: "space-between",
    padding: 5,
  },
  Selector: {
    flexDirection: "row", // set elements horizontally, try column.
    justifyContent: "space-between",
    marginLeft:10
  },
  s1: {
    width: "20%",
    padding: 5,
    margin: 4.5,
    height: 25,
    width: 25,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#55a4fa",
  },
  s2: {
    width: "35%",
    paddingTop: 5,
  },
  s3: {
    height: 25,
    width: 25,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#55a4fa",
    marginLeft: 5,
  },
  s4: {
    width: "20%",
    paddingTop: 5,
    //backgroundColor:"lightblue",
    marginRight: 3,
  },
  s5: {
    width: "25%",
    paddingTop: 5,
    marginLeft: 10,
    //backgroundColor:'pink'
  },
  s6: {
    width: "13%",
    // backgroundColor:"brown"
  },
  s7: {
    width: "17%",
    fontSize: 500,
  },
  s8: {
    width: "20%",
    paddingTop: 5,
    paddingLeft: 10,
  },

  s9: {
    width: "20%",
    height: 20,
    paddingTop: 5,
    //  backgroundColor:"lightblue"
  },
  s10: {
    width: "25%",
    paddingTop: 5,
    marginLeft: 7,
    // backgroundColor:"lightgreen"
  },
  s11: {
    width: "13%",
    height: 20,
    paddingTop: 5,
    // backgroundColor:"brown"
  },
  attendance: {
    width: "40%",
  },
  s12: {
    width: "17%",
    height: 20,
    paddingTop: 5,
  },
  attendances: {
    width: "33%",
    padding: 8,
    paddingLeft: 30,
    //backgroundColor: "red",
  },
  icon: {
    flex: 0.25,
    justifyContent: "space-between",
    marginLeft: 20,
    height: 30,
  },
  heading: {
    width: 80,
    height: 40,
    // backgroundColor:'pink',
    padding: 10,
  },
  heading2: {
    width: 80,
    height: 40,
    padding: 2,
    //backgroundColor:'pink'
  },
  containerss: {
    flex: 1,
    flexDirection: "row", // set elements horizontally, try column.
    justifyContent: "space-between",
  },
  s13: {
    width: "20%",
    padding: 5,
    paddingLeft: 10,
    paddingBottom: -3,
    // backgroundColor:'pink',
    marginTop: 8,
  },
  s14: {
    width: "80%",
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 8,
  },
  s15: {
    width: "33%",
    padding: 8,
    paddingLeft:18,
   // backgroundColor:'pink'
  },
  head: {
    width: "35%",
    paddingTop: 8,
    paddingBottom: 0,
    color: "#55a4fa",
    //backgroundColor:'yellow',
    paddingLeft:5
  },
  dropdowned: {
    width: "100%;",
  },
  h1: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    padding: 5,
  },
  h2: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 5,
  },
  h3: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "bold",
    padding: 5,
    marginLeft: 5,
  },
  attendanceButton1: {
    backgroundColor: "#3cb371",
    height: 25,
    width: 25,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 3,
  },
  attendanceButton2: {
    backgroundColor: "#f55d5d",
    height: 25,
    width: 25,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 3,
  },
  courseName: {
    color: "#55a4fa",
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 5,
  },
  batchName: { color: "#55a4fa", fontSize: 12, fontWeight: "bold" },
  sectionName:{ color: "#55a4fa", fontSize: 12, fontWeight: "bold" },
  card1:{
    marginLeft: 10,
    height: 50,
    shadowColor: "#30C1DD",
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    }},
    dayorderContainer:{
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: 10,
      backgroundColor: "#fff",
      width: "45%",
      shadowColor: "#30C1DD",
      flexDirection: "row",
      marginRight: 18,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
    },
    dayorderBackground:{
      
        height: 27,
        width: 28,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#55a4fa",
      
    },
    hoursText:{
      color: "#55a4fa",
      width: "100%",
      fontSize: 12,
      fontWeight: "bold",
    },
    timetext:{
      color: "#55a4fa",
      width: "100%",
      fontSize: 12,
      fontWeight: "bold",
    },
    card2:{
      marginLeft: 10,
      height: 45,
      shadowColor: "#30C1DD",
      shadowRadius: 10,
      shadowOpacity: 0.6,
      elevation: 8,
      shadowOffset: {
        width: 0,
        height: 4,
      }
    },
    attendancebut:{
      color: "#000000",
      height: 30,
      width: "100%",
      fontSize: 12,
      fontWeight: "bold",
      padding: 5,
      marginTop: 3,
    },
    card3:{
      elevation: 5,
      backgroundColor: "white",
      padding: 10,
      borderRadius: 3,
      borderWidth: 0.3,
      height: 40,
      width: "96%",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 7,
    },
    pickerCard:{
      marginLeft: 10,
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
    card4:{
      elevation: 5,
      backgroundColor: "white",
      padding: 10,
      borderRadius: 3,
      borderWidth: 0.3,
      height: 40,
      width: "96%",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 7,
    }
});

export default styles;

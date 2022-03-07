import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Modal,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import CatogoryScreen from "../components/DropDown";
import { SearchBar } from "react-native-elements";
import { Card } from "react-native-shadow-cards";
import AppButton from "../components/AppButton";
import Icon from "react-native-vector-icons/FontAwesome";
import link from "../../config/Link";
import { useLogin } from "../../LoginProvider";
import { ScrollView } from "react-native-virtualized-view";
import styles from "../Stylesheets/AttendanceStyles";

export default function Attendance({ route }) {
  //states for fetch students data
  const [bid, setBid] = useState(route.params.bid);
  const [sectionVal, setSectionVal] = useState(route.params.sectionVal);
  const [formatdate, setfromatesDate] = useState(route.params.formatdate);
const[hour]=useState(route.params.hour)
  const { calenderData, fromDateday, currMonthName, TOKEN } =
    useLogin();

  function Item({ name, regno, sno, status, index, item }) {
    const [selected, setSelected] = useState("#3cb371");

    const click = () => {
      alert(JSON.stringify(item));
      setSelected(!selected);
      item.status = selected ? "A" : "P";
     
    };

    return (
      <Card style={styles.cardDesign}>
        <TouchableOpacity style={styles.item} onPress={click}>
          <Text style={styles.title}>{sno}</Text>
          <View style={{ width: "70%" }}>
            <Text style={styles.title}>{regno}</Text>
            <Text style={styles.titles}>{name}</Text>
          </View>

          <View style={{ width: "20%", padding: 5, paddingLeft: 10 }}>
            <TouchableOpacity
              onPress={click}
              style={{
                backgroundColor: selected ? "#3cb371" : "#f55d5d",
                width: 25,
                height: 25,
                marginLeft: 25,
                borderRadius: 3,
                color: "#fff",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {!selected ? (
                <Text style={{ color: "#fff", fontSize: 12 }}>
                  {item.status}
                </Text>
              ) : (
                <Text style={{ color: "#fff", fontSize: 12 }}>
                  {item.status}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Card>
    );
  }

  const renderItem = ({ item, index }) => (
    <Item
      name={item.name}
      regno={item.regno}
      sno={item.sno}
      status={item.status}
      index={index}
      item={item}
    />
  );

  const [search, setSearch] = useState("");
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [shouldShow, setShouldShow] = useState(false);
  const [Savedata, setData] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const [isLoading, setLoading] = useState();
  const [Loading, setIsLoading] = useState(false);


  const getData = async () => {
    setIsLoading(true);
    try {
      if (isNaN(currentPage)) {
        setCurrentPage(0);
      }

      var a =
        link.attendanceURL +
        bid +
        "/" +
        sectionVal +
        "/" +
        formatdate +
        "/" +
        hour +
        "?" +
        "page=" +
        currentPage +
        "&" +
        "size=" +
        10;
      const response = await fetch(a, TOKEN);
      console.log(a);
      const json = await response.json();
      console.log(json);
      // setlastpage(currentPage)
      setCurrentPage(currentPage + 1);
//var sethour=hour
      setData([...Savedata, ...json.hour1.attendance]);
      //console.log(hour)
      setMasterDataSource(json.hour1.attendance);
      setIsLoading(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const saveData = async () => {
    console.log(Savedata);
    try {
      await fetch(
        "http://172.16.22.73:8080/api/studentattendance/attendances",
        {
          method: "post",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: Savedata,
          }),
        }
      );
    } catch (e) {
      console.log(e);
    }
    showModal();
  };

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.regno
          ? item.regno.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setData(masterDataSource);
      setSearch(text);
    }
  };
  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 2000);
  };
  const renderLoader = () => {
    return Loading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };
  const loadMoreItem = () => {
    setIsLoading(true);
    getData()
  };
//   const restrict = (event)=> {
//     const regex = new RegExp("^[a-zA-Z]+$");
//     const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
//     if (!regex.test(key)) {
//         event.preventDefault();
//         return false;
//     }
// }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          height: 100,
          width: "100%",
          padding: 12,
        }}
      >
        <View
          style={{
            backgroundColor: "#55a4fa",
            height: 80,
            width: 60,
            marginLeft: 15,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 10,
            }}
          >
            {currMonthName}
          </Text>
          <Text
            style={{
              color: "white",

              marginTop: 5,
              fontWeight: "bold",
              fontSize: 10,
            }}
          >
            {fromDateday}
          </Text>
          <View
            style={{
              backgroundColor: "white",
              height: 20,
              width: 20,
              borderRadius: 90,
              marginTop: 7,
            }}
          >
            <Text
              style={{
                color: "#55a4fa",
                marginLeft: 6,
                marginTop: 1,
                fontSize: 14,
              }}
            >
              {calenderData.dayorder}
            </Text>
          </View>
        </View>
        <View style={{ marginRight: 15, marginTop: 5 }}>
          <Text
            style={{
              marginLeft: 14,
              color: "#000000",
              marginTop: 5,
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            11:00 AM
          </Text>
          <Text style={{ marginLeft: 15, color: "#000000", fontSize: 12 }}>
            Bsc-it - {sectionVal}
          </Text>
          <Text style={{ marginLeft: 15, color: "#000000", fontSize: 12 }}>
            2017-20
          </Text>
        </View>

        <View style={{ marginRight: 140, flexDirection: "row", marginTop: 15 }}>
          <Text
            style={{
              marginLeft: 30,
              fontSize: 16,
              marginTop: 5,
              fontWeight: "200",
            }}
          >
            Hour:
          </Text>
          <CatogoryScreen />
          <View style={{ marginTop: 8 }}>
            <Icon
              name="search"
              size={20}
              color="#55a4fa"
              onPress={() => setShouldShow(!shouldShow)}
            />
          </View>
        </View>
      </View>

      {shouldShow ? (
        <SearchBar
          round
          onKeyPress={e => restrict(e)}
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction("")}
          placeholder="Enter regno or name"
          value={search}
          containerStyle={{
            backgroundColor: "transparent",
            borderBottomColor: "transparent",
            borderTopColor: "transparent",
            width: "96%",
            marginLeft: 4,
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
      ) : null}

      <ScrollView>
        {isLoading ? (
          <View
            style={{
              height: 100,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, color: "black" }}>
              Datas are Loading
            </Text>
          </View>
        ) : (
          <FlatList
            data={Savedata}
            keyExtractor={(item) => item.sid}
            renderItem={renderItem}
            style={styles.container}
            ListFooterComponent={renderLoader}
            onEndReached={()=>loadMoreItem()}

            onEndReachedThreshold={1}
            //       onScroll={e => {
            //         //console.log(e)
            //         let paddingToBottom = 10;
            //         paddingToBottom +=
            //           e.nativeEvent.layoutMeasurement.height;
            //         var currentOffset =
            //         e.nativeEvent.contentOffset.y;

            //         let direction = currentOffset > offset ? 'down' : 'up';
            // SetOffset(currentOffset);
            // //console.log(direction)
            //         if (direction === 'up') {
            //           // console.log(e.nativeEvent.contentOffset.y,e.nativeEvent.contentSize.height -
            //           //   paddingToBottom)
            //           if (
            //             e.nativeEvent.contentOffset.y >=
            //             e.nativeEvent.contentSize.height -
            //             paddingToBottom

            //           )
            //           {

            //             if (!Loading && currentPage > lastPage)
            //             //console.log(currentPage)
            //              {
            //               console.log(currentPage);
            //               //setCurrentPage({Loading: true});
            //               setTimeout(() => {
            //                 loadMoreItem();
            //               }, 5000);
            //             }
            //           }
            //         }}}
          />
        )}
      </ScrollView>

      <AppButton
        title="Done"
        onPress={saveData}
        style={{ width: "94%", marginLeft: 10, marginTop: 15 }}
      ></AppButton>
      <Modal
        animationType="none"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
      >
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#dcfce7",
            justifyContent: "center",
            width: "100%",
            borderRadius: 5,
            flexDirection: "row",
          }}
        >
          <Icon
            name="check"
            size={15}
            color="#39b366"
            style={{ fontWeight: "500" }}
            onPress={() => setShouldShow(!shouldShow)}
          />
          <Text
            style={{
              fontSize: 15,
              color: "#39b366",
              margin: 7,
              padding: 1,
              fontWeight: "500",
            }}
          >
            Attendance Saved
          </Text>
        </View>
      </Modal>
    </View>
  );
}

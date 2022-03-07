import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Modal
} from "react-native";
import Seperator from "../components/Separator";
import { Card } from "react-native-shadow-cards";
import AppButton from "../components/AppButton";
import { Picker } from "@react-native-picker/picker";
import DatesPicker from "../components/Dpicker";
import link from "../../config/Link";
import moment from "moment";
import { useLogin } from "../../LoginProvider";
import { ScrollView } from "react-native-virtualized-view";
import styles from "../Stylesheets/DashboardStyles";

export default function Dashboard({ navigation }) {
  function Item({ hour, timefrom, status, presents, absents, item }) {
    // const [first, setfirst] = useState('priya')
    // // setfirst(hour)
  // console.log(hour)
    // var getCurrentTime = moment().format("hh:mm a");
    // console.log(getCurrentTime);
    return (
      <View>
        <Card style={styles.cardDesign}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ATTENDANCE", {
                bid: batchValue,
                cid: courseValue,
                sectionVal: sectionVal,
                dayorder: DayOrderFetch.dayorder,
                formatdate: formatdate,
                hourAPI: calender,
                hour: hour,
              })
            }
          >
            <View style={styles.containers}>
              <View style={{ width: "14%", marginTop: 5 }}>
                <View style={styles.s3}>
                  <Text style={styles.h1}>{hour}</Text>
                </View>
              </View>

              <View style={styles.s4}>
                <Text style={styles.h2}>{timefrom}</Text>
              </View>
              <View style={styles.s5}>
                <Text style={styles.h3}>{status}</Text>
              </View>
              <View style={styles.s6}>
                <View style={styles.attendanceButton1}>
                  <Text style={{ fontSize: 12, padding: 5, color: "#fff" }}>
                    {presents}
                  </Text>
                </View>
              </View>
              <View style={styles.s7}>
                <View>
                  <View style={styles.attendanceButton2}>
                    <Text style={{ fontSize: 12, padding: 5, color: "#fff" }}>
                      {absents}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }

  const renderItem = ({ item, availabledata }) => (
    <Item
      hour={item.hour}
      timefrom={item.timefrom}
      status={item.status}
      presents={item.presents}
      absents={item.absents}
      item={item}
      availabledata={availabledata}
    />
  );

  const {
    profile,
    calenderData,
    setcalenderData,
    setavailabledata,
    calender,
    setCalender,
    formatdate,
    TOKEN
  } = useLogin();

  const [isLoading, setLoading] = useState(true); //for loading the values in picker
  const [course, setCourse] = useState(""); //state for courses mapping
  const [courseValue, setCourseValue] = useState(""); //state for onchange courses
  const [batch, setBatch] = useState([]); //state for batch mapping
  const [batchValue, setBatchValue] = useState(); //state for onchange batch
  const [sectionVal, setSection] = useState(Section); //state for onchange the section
  //console.log(sectionVal)
  const [DayOrderFetch, setDayorder] = useState(calender);
  const [modalVisible, setModalVisible] = useState(false);
  const[err,seterr]=useState()
  var Section = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
  ]; //value for section
  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 2000);
  };
  const getCalender = async (value) => {
    try {
      const response = await fetch(
        link.calanderURL + batchValue + "/" + formatdate,
        TOKEN
      );
      const json = await response.json();
      for (var i = 0; i < json.hours.length; i++) {
        var element = json.hours[i]["timefrom"];
        var fromTime = moment(element).format("LT");
        json.hours[i]["timefrom"] = fromTime;
      }
      setCalender(json.hours);
      setcalenderData(json);

      setDayorder(json);
      setavailabledata(true);
    } catch (error) {
      console.log(error);
      showModal()
    } finally {
      setLoading(false);
    }
  };
  module.exports.getCalender = getCalender;

  //function for get batch service
  const getBatches = async (cid) => {
    try {
      const response = await fetch(link.baseURL + "/batches/" + cid,TOKEN);
      const json = await response.json();
      setBatch(json);
    } catch (error) {
      console.error(error);
      showModal()
    } finally {
      setLoading(false);
    }
  };

  //function for get course service
  const getCourses = async () => {
    try {
      const response = await fetch(link.baseURL + "programmes/" + link.deptID, TOKEN);
      const json = await response.json();
      setCourse(json);
      //console.log(json)
    } catch (error) {
      console.error(error);
      showModal()
    } finally {
      setLoading(false);
    }
  };

  //function for call batch inside course
  const onCourseChange = (value, index) => {
    setCourseValue(value);
    getBatches(value);
  };

  //function for change the section based on course and batch
  const onSectionChange = (value) => {
    setSection(value);
    getCalender(batchValue);
  };

  useEffect(() => {
    getCourses();
    return () => {};
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#f6f9fe", padding: 9 }}>
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
           // backgroundColor: "#dcfce7",
            justifyContent: "center",
            width: "100%",
            borderRadius: 5,
            flexDirection: "row",
            marginTop:40
          }}
        >
          {/* <Icon
            name="check"
            size={15}
            color="#39b366"
            style={{ fontWeight: "500" }}
            onPress={() => setShouldShow(!shouldShow)}
          /> */}
          <Text
            style={{
              fontSize: 15,
              color: "red",
              margin: 7,
              padding: 1,
              fontWeight: "500",
            }}
          >
           Please select the above details
          </Text>
        </View>
      </Modal>
      <View style={{ height: 100, width: "100%", paddingBottom: 10 }}>
        
        <View style={styles.Selector}>
          <View style={styles.head}>
            <Text style={styles.courseName}>COURSE</Text>
          </View>
          <View style={styles.s15}>
            <Text style={styles.batchName}>BATCH</Text>
          </View>
          <View style={styles.attendances}>
            <Text style={styles.sectionName}>SECTION</Text>
          </View>
        </View>
        <Card style={styles.card1}>
          <View style={{ flexDirection: "row", width: "100%" }}>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <Picker
                style={{ width: "38%", fontSize: 2, padding: 5 }}
                mode="dropdown"
                selectedValue={courseValue}
                onValueChange={(itemValue, itemIndex) =>
                  onCourseChange(itemValue, itemIndex)
                }
              >
                <Picker.Item label="Course" value="0" />
                {course.map((item, index) => {
                  return (
                    <Picker.Item
                      label={item.name}
                      value={item.cid}
                      key={item.cid}
                    />
                  );
                })}
              </Picker>
            )}
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <Picker
                style={{ width: "40%", fontSize: 2, paddingTop: 10 }}
                selectedValue={batchValue}
                mode="dropdown"
                onValueChange={(itemValue) => setBatchValue(itemValue)}
              >
                <Picker.Item label="Batch" value="0" />
                {batch.map((item) => {
                  return (
                    <Picker.Item
                      label={item.bname}
                      value={item.bid}
                      key={item.bid}
                    />
                  );
                })}
              </Picker>
            )}
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <Picker
                selectedValue={sectionVal}
                mode="dropdown"
                style={{ width: "26%", fontSize: 12, padding: 10 }}
                onValueChange={(itemValue, itemIndex) =>
                  onSectionChange(itemValue, itemIndex)
                }
              >
                <Picker.Item label="Sec" value="0" />
                {Section.map((item, index) => {
                  return (
                    <Picker.Item
                      label={item.name}
                      value={item.name}
                      key={item.id}
                    />
                  );
                })}
              </Picker>
            )}
          </View>
        </Card>
      </View>
      <View style={{ flexDirection: "row" }}>
        <DatesPicker />

        <View style={styles.dayorderContainer}>
          <View style={styles.dayorderBackground}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>
              {calenderData.dayorder}
            </Text>
          </View>
          <Text style={{ fontSize: 12, padding: 5 }}>Day Order</Text>
        </View>
      </View>
      <Seperator />

      <View style={styles.containers}>
        <View style={styles.s13}>
          <Text style={styles.hoursText}>HOURS</Text>
        </View>
        <View style={styles.s14}>
          <Text style={styles.timetext}>TIME</Text>
        </View>
      </View>
      <Card style={styles.pickerCard}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ATTENDANCE", {
              bid: batchValue,
              cid: courseValue,
              section: sectionVal,
              formatdate: formatdate,
            })
          }
        >
          <View style={styles.attendanceContainer}>
            <View style={styles.s1}>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 12 }}
              >
                1
              </Text>
            </View>
            <View style={styles.s2}>
              <Text
                style={{
                  color: "#000000",
                  width: "100%",
                  fontSize: 12,
                  fontWeight: "bold",
                  paddingTop: 5,
                }}
              >
                10:00AM
              </Text>
            </View>
            <View style={styles.attendance}>
              <AppButton
                style={{
                  color: "#000000",
                  height: 30,
                  width: "100%",
                  fontSize: 12,
                  fontWeight: "bold",
                  padding: 5,
                  marginTop: 3,
                }}
                title="Attendance"
                onPress={() =>
                  navigation.navigate("ATTENDANCE", {
                    bid: batchValue,
                    cid: courseValue,
                    sectionVal: sectionVal,
                    dayorder: DayOrderFetch.dayorder,
                    formatdate: formatdate,
                    hourAPI: calender,
                  })
                }
              ></AppButton>
            </View>
          </View>
        </TouchableOpacity>
      </Card>
      <View style={styles.containers}>
        <View style={styles.s8}>
          <Text
            style={{
              color: "#55a4fa",
              fontSize: 12,
              fontWeight: "bold",
              width: "100%",
            }}
          >
            NEXT
          </Text>
        </View>
        <View style={styles.s9}>
          <Text
            style={{
              color: "#55a4fa",
              fontSize: 12,
              fontWeight: "bold",
              width: "100%",
            }}
          >
            TIME
          </Text>
        </View>
        <View style={styles.s10}>
          <Text
            style={{
              color: "#55a4fa",
              fontSize: 12,
              fontWeight: "bold",
              width: "100%",
            }}
          >
            STATUS
          </Text>
        </View>
        <View style={styles.s11}>
          <Text
            style={{
              color: "#55a4fa",
              fontSize: 12,
              fontWeight: "bold",
              width: "100%",
            }}
          >
            P
          </Text>
        </View>
        <View style={styles.s12}>
          <Text
            style={{
              color: "#55a4fa",
              fontSize: 12,
              fontWeight: "bold",
              width: "100%",
            }}
          >
            A
          </Text>
        </View>
      </View>
      <ScrollView style={{ marginLeft: 5, marginRight: 5 }}>
        {calenderData.dayorder == null ? (
          <View style={styles.card4}>
            <Text
              style={{ color: "black", fontSize: 15, alignItems: "center" }}
            >
              Non working Day
            </Text>
          </View>
        ) : (
          <FlatList
            data={calender}
            keyExtractor={({ id }, index) => id}
            renderItem={renderItem}
          />
        )}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

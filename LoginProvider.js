import React, { createContext, useContext, useState } from "react";
import moment from "moment";

const LoginContext = createContext();




const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});
  const [calenderData, setcalenderData] = useState(true);
  const [dateFormat, setFormatdate] = useState({});
  const [batchValue, setBatchValue] = useState();
  const [date, setDate] = useState(new Date(Date.now()));
  const [availabledata, setavailabledata] = useState(false);
  const [calender, setCalender] = useState([]);
  const [sectionVal, setSection] = useState(Section); 
 
  var Section = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
  ];
  var fromDateday = date.getDate();
var fromDatemonth = date.getMonth();
var fromDateyear = date.getFullYear();
var d = Date.UTC(fromDateyear, fromDatemonth, fromDateday);
const formatdate = moment.utc(d);
// const s = new Date();
// let year = s.getFullYear();
var currMonthName  = moment(d).format('MMMM');
console.log(currMonthName);

var TOKEN= {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + profile.token,
  },
}

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        profile,
        setProfile,
        calenderData,
        setcalenderData,
        dateFormat,
        setFormatdate,
        batchValue,
        setBatchValue,
        date,
        setDate,
        availabledata,
        setavailabledata,
        calender,
        setCalender,
        formatdate,
        fromDateyear,
        fromDateday,
        currMonthName,
        sectionVal, setSection,
        TOKEN
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;

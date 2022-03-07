import { useLogin } from "../LoginProvider";



var fromDateday = date.getDate();
var fromDatemonth = date.getMonth();
var fromDateyear = date.getFullYear();
var d = Date.UTC(fromDateyear, fromDatemonth, fromDateday);
const formatdate = moment.utc(d);


export default formatdate;
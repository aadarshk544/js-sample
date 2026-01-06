/* 
JavaScript Date Methods – Local Time vs UTC

NOTE:
- Local methods use the system’s local time zone
- UTC methods use Coordinated Universal Time (UTC)
- Getter methods read values
- Setter methods modify values

=====================
YEAR
=====================
Local:
- getFullYear()        -> Gets year (local time)
- setFullYear(year)   -> Sets year (local time)

UTC:
- getUTCFullYear()      -> Gets year (UTC)
- setUTCFullYear(year) -> Sets year (UTC)


=====================
MONTH (0–11)
=====================
Local:
- getMonth()          -> Gets month (local)
- setMonth(month)     -> Sets month (local)

UTC:
- getUTCMonth()        -> Gets month (UTC)
- setUTCMonth(month)  -> Sets month (UTC)


=====================
DATE (DAY OF MONTH)
=====================
Local:
- getDate()           -> Gets day of month (local)
- setDate(date)       -> Sets day of month (local)

UTC:
- getUTCDate()         -> Gets day of month (UTC)
- setUTCDate(date)    -> Sets day of month (UTC)


=====================
HOURS
=====================
Local:
- getHours()          -> Gets hours (local)
- setHours(hours)     -> Sets hours (local)

UTC:
- getUTCHours()        -> Gets hours (UTC)
- setUTCHours(hours)  -> Sets hours (UTC)


=====================
MINUTES
=====================
Local:
- getMinutes()        -> Gets minutes (local)
- setMinutes(minutes) -> Sets minutes (local)

UTC:
- getUTCMinutes()        -> Gets minutes (UTC)
- setUTCMinutes(minutes) -> Sets minutes (UTC)


=====================
SECONDS
=====================
Local:
- getSeconds()        -> Gets seconds (local)
- setSeconds(seconds) -> Sets seconds (local)

UTC:
- getUTCSeconds()        -> Gets seconds (UTC)
- setUTCSeconds(seconds) -> Sets seconds (UTC)


=====================
MILLISECONDS
=====================
Local:
- getMilliseconds()         -> Gets milliseconds (local)
- setMilliseconds(ms)       -> Sets milliseconds (local)

UTC:
- getUTCMilliseconds()      -> Gets milliseconds (UTC)
- setUTCMilliseconds(ms)    -> Sets milliseconds (UTC)


=====================
DAY OF WEEK (0–6, Sun = 0)
=====================
Local:
- getDay()            -> Gets day of week (local)

UTC:
- getUTCDay()         -> Gets day of week (UTC)

(No setter for day of week)
*/



// Dates

let myDate = new Date()
console.log(myDate.getFullYear())
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString())
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //this converts in milliesec from 01/01/1970
console.log(myTimeStamp) 
//to convert in sec  
console.log(Math.floor(Date.now()/1000));


// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})



//to convert in sec
const seconds = Math.floor(Date.now() / 1000);
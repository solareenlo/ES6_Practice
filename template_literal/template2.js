// PHP
// $date = '{"""'.$device_id.'","guid":"'.$guid.'","username":"'.$username.'",'"}';

const device_id = 4;
const guid = 20;
const username = "hello";

const data = '{"device_id":"'+ device_id + '","guid":"' + guid + '"username":"' + username + '","}';
console.log(data);

const data2 = `{"device_id":"${device_id}","guid":"${guid}"username":"${username}","}`;
console.log(data2);

const year = 2018;
const yearMessage = `${year}`; // こちらは意味がない.
const yearMessage2 = year;
console.log(yearMessage, yearMessage2);

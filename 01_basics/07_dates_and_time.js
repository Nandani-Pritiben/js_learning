console.log(Date);
console.log(Date());
console.log(Date.now());

let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

let myCreated = new Date(2023,8,3,8,9);

console.log(myCreated);

let myTimestamp=Date.now();

console.log(myTimestamp);
console.log(myCreated.getTime());

let newDate=new Date();
console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('default',{
 weekday: "long",
 timeZone:'Asia/kolkata'
}));
//Singleton

//Object Literals

const o={};
console.log(o);
const mysym = Symbol("key1");

const JSUser={
    name:"nandani",
    "full name":"khalas Nandani",
    mysym:'mykey1',
    // [mysym]:'mykey1',
    [mysym]:Symbol('mykey2'),
    age:18,
    location:'ahmedabad',
    email:'neha@org.com',
    isLoggedIn:false,
    LastLoginDays:['Saturday','Sunday']
};
console.log(JSUser);

console.log(JSUser.email);
console.log(JSUser['email']);

// console.log(JSUser."full name"); //error throw

console.log(JSUser["full name"]);

console.log(typeof JSUser.mysym);

console.log(typeof JSUser[mysym]);

console.log(Object.getOwnPropertySymbols(JSUser));
console.log(JSUser);

JSUser.email='neha@google.com';
console.log(JSUser.email);

// Object.freeze(JSUser);

JSUser.email='neha@js.com'
console.log(JSUser.email);

JSUser.greeting=function(){
    console.log("Hello JS");//2
    // return "Hello js" //1
}

// console.log(JSUser.greeting);//2

JSUser.greeting();//2

// console.log(JSUser.greeting()); // 1


JSUser.greeTwo = function () {
    console.log(`Hello ${this.LastLoginDays}`)
}

console.log(JSUser);
console.log(JSUser.greeTwo());
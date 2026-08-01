// Primitive datatype Non primitive data type based how memory store that value , call by value and call by reference

// Primitive - number,string,boolean,null,undefined,symbol
// nonprimitive datatype- function,array,object

//*******memory- Stack- primitive,heap-non-primitive */

let myYoutubeName='neha';
let anotherName=myYoutubeName;
anotherName='nisha';

console.log(myYoutubeName);
console.log(anotherName);

let nirali={
    email:'nirali@org.com',
    upi:'nirali@ybl'
}
let harsh=nirali;
harsh.email='niraliharsh@gmail.com';
console.log(harsh);
console.log(nirali);


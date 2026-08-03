const myArray = [0,1,2,3,4,5,true,'hitesh'];

console.log(myArray);

console.log(myArray[0]);

const newArray=new Array(1,2,3,4);

console.log(newArray[1]);

newArray.push(0);
console.log(newArray);

newArray.pop();
console.log(newArray);

newArray.unshift(0);
console.log(newArray);

newArray.shift();
console.log(newArray);

console.log(newArray.includes(1));

console.log(newArray.indexOf(1));

const newArr = newArray.join();

console.log(typeof newArr);

ARR1=[1,2,3,4,5,6,7,8,9,10]
console.log(ARR1[1]);
console.log(ARR1.slice(1,3))
console.log(ARR1.splice(2,3));
console.log(ARR1);

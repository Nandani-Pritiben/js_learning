const arr=[1,2,3,4,5];
for(let i of arr){
    console.log(i);
}

const obj = {
    name: 'neha',
    age: 22,
    city: 'delhi'
}

for(let key in obj){
    console.log(key, obj[key]);
}

const str = 'hello';

for(let char of str){
    console.log(char);
}


const map = new Map(); // map is a collection of key value pairs, it stores only unique keys, it can store any type of data, it maintains the insertion order of the elements
map.set('name', 'neha');
map.set('age', 22);
map.set('city', 'delhi');

for(let [key, value] of map){
    console.log(key, value);
}

for(let key of map){
    console.log(key);
    console.log(key[0], key[1]);
}

let arr1=['a', 'b', 'c', 'd'];
for(let key in arr1){
    console.log(key);
}

// const map1 = new Map();
// map1.set('IN',"India");
// map1.set('US',"United Status");

// for(let key in map1){
//     console.log(key); // no output because map is not iterable with for in loop
// }
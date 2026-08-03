const score=400;
console.log(score);


const balance=new Number(100.05);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(0));
const otherNumber = 123.986666;
console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(5));
console.log(otherNumber.toPrecision(6));

const value= 1000000;
console.log(value.toLocaleString());
console.log(value.toLocaleString('en-IN'));

console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.abs(4));

console.log(Math.round(4.3));
console.log(Math.round(4.5));
console.log(Math.round(4.6));

console.log(Math.ceil(4.4));
console.log(Math.floor(4.8));

console.log(Math.min(45,6,7,8));
console.log(Math.max(45,6,7,8));

let numRandom=Math.random();
console.log(numRandom);
console.log((numRandom*10)+1);

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);

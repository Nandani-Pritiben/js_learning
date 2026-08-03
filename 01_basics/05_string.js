const name="neha";
const repoCount = 22;
console.log(name + repoCount + " value");

console.log(`Hello my name is ${name}.my repo count is ${repoCount} value.`)

const gameName=new String("Neha");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charCodeAt(3));
console.log(gameName.charAt(3));
console.log(gameName.indexOf('N'));
const newString = gameName.substring(0,2);
console.log(newString);

const anotherString = gameName.slice(-8,-2);
console.log(anotherString);

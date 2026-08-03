let Computer_feild=['software_engineering','full_stack','Data_Engineering'];
let It_Feild_salary=['10k','20k','30k'];
// Computer_feild.push(It_Feild_salary);
// console.log(Computer_feild);

Computer_feild.concat(It_Feild_salary);
let feild_with_salary=Computer_feild.concat(It_Feild_salary);

// console.log(Computer_feild);

// console.log(feild_with_salary);


let fs=[...Computer_feild,...It_Feild_salary];
console.log(fs);

let arr=[1,2]
let str='hi'
console.log(arr.concat(str));
console.log([...arr,...str]);

let a=[1,2,[3,4],5,[6,7,[8,9,0]]]
console.log(a.flat(Infinity));
console.log(a);
console.log(a.flat(2));
// console.log(a.flat(1));
console.log(a.flat());
console.log(a.flat(1));

console.log(Array.isArray(a));

b='neha';
console.log(Array.isArray(b));


console.log(Array.from(b));
console.log(Array.from({name:'neha'}));//interesting for interview

let name={name:'neha'};
console.log(Array.from(Object.keys(name)));
console.log(Array.from(Object.values(name)));

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));

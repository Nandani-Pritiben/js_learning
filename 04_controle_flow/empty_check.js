let userArray=[];
if(userArray.length === 0){
    console.log("The Array is Empty");
}

let userObject = {};

if(Object.keys(userObject).length === 0){
    console.log("The Object is Empty");
}

// logical operator && and ||
// Nullish Coalescing Operator (??) - returns the right-hand operand when the left-hand operand is null or undefined

let name = 'neha' ?? 'default name';
console.log(name); //op- neha

let n1 = '' ?? 'dn';
console.log(n1); //op- '' (empty string is not null or undefined)

let n2 = null ?? 'dn';
console.log(n2); //op- dn (null is null or undefined)

let n3 = undefined ?? 'dn';
console.log(n3); //op- dn (undefined is null or undefined)

//ternary operator condition ? true : false
let creamRoll = 'strawberry';
creamRoll === 'chocolate' ? console.log('yuppy :)') : console.log(':( sad'); 
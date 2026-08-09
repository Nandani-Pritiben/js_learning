var c=300;
let a=100;

if(true){
    let a=10;
    const b=45;
    // var c=78;
    c=78;
    console.log("Inner a:", a);
}

console.log("Outer a:", a);
// console.log(b);
console.log("Inner c:", c);

console.log(addtwo(5));
function addtwo(x){
    return x+2;
}


console.log(addone(5));
//expression function
const addone= function(x){
    return x+1;
}




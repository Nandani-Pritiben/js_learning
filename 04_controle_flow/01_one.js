const isuserloggedin=true;
if(isuserloggedin){
    console.log("yes user is logged in");
}

if(2=='2'){
    console.log("2 is equal to '2'");
}

if(2==='2'){
    console.log("2 is equal to '2' with strict equality");
}
else{
    console.log("2 is not equal to '2' with strict equality");
}

let balance=1000;
if(balance>300)console.log("you can buy this item"),
console.log("you have discount"); // Implicit scope

let loggedin=true;
let debitcard=true;
if(loggedin && debitcard){
    console.log("you buy this cource");
}

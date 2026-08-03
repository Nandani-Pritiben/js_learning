function sayMyName(){
    console.log('N');
    console.log('E');
    console.log('H');
    console.log('A');
    
}

// sayMyName
sayMyName();

function addTwoNumbers(num1,num2){
    console.log(num1 + num2);
    }

    addTwoNumbers();
    addTwoNumbers(3,4);
    addTwoNumbers(3.4,9);
    addTwoNumbers(3.4,'9');

    let result = addTwoNumbers(1,2);

    console.log(result);
    
    function add2(n1,n2){
        let result=n1+n2;
        return result;
        
    }

    result=add2(9,0);
    console.log(result);

    function loginUser(name){
        if(!name){
        console.log('please enter username.');
        return
        }
        return `Username ${name} just loggedin.`
    }

    username=loginUser('neha');
    console.log(username);
    

    function calculateCarPrice(val1,val2,...num1){
      return num1;
      
    }

    console.log(calculateCarPrice(2));
    console.log(calculateCarPrice(2,8,9,4,5));
    

const user={
    name:'hitesh',
    price:199
}

function handleObject(anyobject){
return `username is ${anyobject.name} and price is ${anyobject.price}`
}

// let r1=handleObject(user);
let r1=handleObject({
    name:'neha',
    price:'free'
})
console.log(r1);

const myNewArray=[1,2,3,4,5];

function returnSecondValue(getArray){
    console.log(getArray);
    
}
returnSecondValue(myNewArray);
returnSecondValue([2,4,6])

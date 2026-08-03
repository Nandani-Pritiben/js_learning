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
    


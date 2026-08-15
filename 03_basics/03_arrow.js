const user = {
    username: 'neha',
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to the website`);
        console.log(this);
    }

}

user.welcomeMessage();
user.username='nisha';
user.welcomeMessage();
console.log(this);

function chai(){
    console.log(this);
}

chai();

function chai1(){
    let username = 'neha';
    // console.log(this.username); // op= undefined
    console.log(`${this.username}`) // op = undefined
    console.log(`${username}`) // op = neha

}

chai1();

const chaithis =() =>{
  console.log(this); // op = {}
  let username = 'neha';
  console.log(`${username}`) //op = neha
  console.log(`${this.username}`) // op = undefined
}

chaithis();

const sum = (n1,n2) => {
    console.log(n1 + n2);
}

sum(5,5);

// implicite return in arrow function
const add = (n1,n2 ) => n1+n2;
// or 
const add1 = (n1,n2) => (n1+n2); // if you write curly braces then you need to use return keyword


console.log(add(5,5));

const sub = () => ({username: 'neha'}) // op- { username: 'neha' }
const sub1 = () => {username: 'neha'} // op - undefined

console.log(sub());
console.log(sub1());

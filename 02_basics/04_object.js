//Singleton-through constructor Object declaration happen

const tinderUser = new Object();

console.log(tinderUser);

tinderUser.id=12345;
tinderUser.name='neha';
tinderUser.isLoggedIn=false;

console.log(tinderUser);

const regularUser={
    email:'some@gmail.com',
    fullName:{
        userFullName:{
            firstName:'neha',
            lastName:'khalas'
        }
    }
}

console.log(regularUser.fullName?.userFullName.firstName);

let obj1={a:1,b:2};
let obj2={c:3,d:4};

// console.log(obj1+obj2);

console.log({obj1,obj2});

console.log({...obj1,...obj2});

const obj3 = Object.assign({},obj1,obj2);

console.log(obj3);

const users=[
    {
        id:'1',
        email:'user1@gmail.com'
    },
    {
        id:'2',
        email:'user2@gmail.com'
    },
    {
        id:'3',
        email:'user3@gmail.com'
    }
]

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    courseName:'js learn',
    price:'999',
    courseInstroctor:'hitesh'
}

// console.log(course.courseInstroctor);

//Object destructuring is a JavaScript shorthand syntax that lets you unpack properties from an object and assign them directly to distinct variables. 

const {courseInstroctor:intructor}=course;
console.log(intructor);

//each other, while JSON is the specific language format that the messenger uses to deliver the data.


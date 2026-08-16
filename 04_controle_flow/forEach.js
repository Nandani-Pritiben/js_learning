// for Each loop

const loopArray = ['python','java','js','c++','C#'];

// loopArray.forEach(function(val){
//  console.log(val);
// });

// loopArray.forEach( (val) => {
//  console.log(val);
// })

// function printMe(val){
//     console.log(val);
// }
// loopArray.forEach(printMe);

// loopArray.forEach((val,index,arr) => {
//     console.log(val,index,arr);
// })

const myObj=[
    {
        languageName: "JavaScript",
        Extension: "js"
    },
    {
        languageName: "Python",
        Extension: "py"
    },
    {
        languageName: "Java",
        Extension: "java"
    },
]

myObj.forEach((item)=>{
    console.log(item.languageName);
})
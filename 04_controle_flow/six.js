// const coding = ["js","python","java","c++","c"];

// const values= coding.forEach((item) => 
// {
//     // console.log(item);
//     return item;
// })


let myNums = [1,2,3,4,5]
// const newNums = myNums.filter((nums) => nums>4)
// console.log(myNums);

// const newNums = myNums.filter((nums) => {
//     // nums>4;// op- []
//     return nums>4;
// })
// console.log(newNums);

// const newNums=[];

// myNums.forEach((nums) =>{
//     if(nums>4){
//         newNums.push(nums)
//     }
   
// })
//  console.log(newNums);

const books = [
    {
title:'Book one',
publish: 1999,
Edition: 1996,
},
{
    title: 'Book Two',
    publish: 1991,
    Edition: 1995,
},
{
    title: "Book three",
    publish: 2000,
    Edition: 2005,
},
{
    title: "Book four",
    genre: 'History',
    publish: 2010,
    Edition: 2011
},
{
    title: "book five",
    genre: 'History',
    publish: 2015,
    edition: 2023,
},
]

//  const userBooks = books.filter( (bk) => bk.genre=='History');
//  console.log(userBooks);// filter means Returns the elements of an array that meet the condition specified in a callback function.

const userBooks = books.filter((bk)=>bk.publish>=2000);
console.log(userBooks);
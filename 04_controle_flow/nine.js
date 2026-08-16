// reduce 

const reduceArray =[1,2,3];
// const reduce= reduceArray.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// },0);


// const reduce = reduceArray.reduce((acc,currval)=> acc+currval,0)
// console.log(reduce);

const shoppingCart = [
    {
        itemCourse: 'js',
        price: 2999
    },
    {
        itemCourse: 'data science',
        price: 12333
    },
]
const bill = shoppingCart.reduce((acc,item)=> acc+item.price,0);
console.log(bill);
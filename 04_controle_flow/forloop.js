//table

 

        for(let i = 1; i<= 12; i++){
            for(let j = 1; j <= 10; j++){
                console.log(`${i}x${j}=${i*j}`);
            }
        }

let myArray = [1,2,3,4,5];

for(let i=0; i<myArray.length; i++){
    console.log(myArray[i]);
}

//break and continue

for(let i=1; i<=10; i++){
    if(i === 5){
        break; //breaks the loop when i is 5
    }
    console.log(i);
}

for(let i=1; i<=10; i++){
    if(i === 5){
        continue; //skips the iteration when i is 5
    }
    console.log(i);
}
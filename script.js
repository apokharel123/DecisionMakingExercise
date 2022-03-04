//DECISION MKAING EXERCISE

//1A
let randomNum=Math.random();
randomNum++;
randomNum=Math.floor(randomNum);
console.log(randomNum);

//let randomNum=Math.floor(Math.random()*5)+1;
//console.log(randomNum);

//1B
if (randomNum>=4) {
    console.log("Greater than or equal to 4");
    
} else if (randomNum==2 || randomNum==3 ) {
    console.log("Equal to 2 or #");
} else {
    console.log("Equal to 1");
}

//1C
if (randomNum!=3) {
    console.log("Not equal to 3");
}
//1D
if (randomNum!=3 && randomNum!=5) {
    console.log("NOT equal to 3 AND Not equal to 5");
    
}
//1E
if (randomNum==2 || randomNum==4) {
    console.log("Equal to 2  OR equal to 4");
    
}
//BONUS

//2. 
randomNum=(randomNum>=4)?"Greater than or equal to 4":"Less than 4"
console.log(randomNum);

//3
switch (randomNum) {
    case 1: console.log("One");
        
        break;
        case 2: console.log("Two");
        break;
        case 3:console.log("Three");
        break;
        case 4: console.log("Four");
        break;
        case 5:console.log("Five");
        break;
}



    



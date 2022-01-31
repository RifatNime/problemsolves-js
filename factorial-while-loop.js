// function getFactorial(num){
//     let factorial = 1;
//     let i = 1;
//     while (i <= num){
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// const myFactorial = getFactorial(6);
// console.log(myFactorial);

// function getFactorial(num){
//     let factorial = 1;
//     let i = num; 
//     while(i >= 1){
//         factorial = factorial * i;
//         i--;

//     }
//     return factorial;
// }
const myFactorial = getFactorial(6);
console.log(myFactorial);
// for loop reverse
function getFactorial2(num){
    let factorial = 1;
    for (let i = num; i >= 1; i--){

        factorial = factorial * i;
        console.log(i, factorial);
    }
    return factorial;
}
const myFactorial = getFactorial2(6);
console.log(myFactorial);

function inchToFeet(inch){ 
    var feet = inch/12; 
    return feet; 
  }
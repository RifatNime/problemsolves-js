/*3! = 3 x 2 X 1
3! = 3 x 2 X 1
3! = 3 x 2 X 1
3! = 3 x 2 X 1
3! = 3 x 2 X 1
3! = 3 x 2 X 1*/

var factorial = 1;
for (let i = 1; i <= 7; i++){
    console.log(i);
    factorial = factorial * i;
}
console.log(factorial);
// let factorial = 1;
// for (let i = 1; i <= 5; i++){
//     console.log(i);
//     factorial = factorial * i;
// }
// console.log(factorial);
function getFactorial(number){
    let factorial = 1;
    for(let i =1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}
let firstFactorial = getFactorial(7);
console.log('Factorial Of 7 is: ', firstFactorial)
let secondFactorial = getFactorial(9);
console.log('Factorial Of 9 is: ', secondFactorial)

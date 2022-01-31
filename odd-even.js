// const num = 4;
// const remainder = num % 2;
// console.log(remainder == 0);
// console.log(num % 2 == 0);

function isEven(num){
    if (num % 2 == 0){
        return true;
    }
    return false;
}

const myNum = 145; // const remainder = num % 2;
const isMyNumEven = isEven(myNum);
console.log('My even result:', isMyNumEven);
const herNum = 1892;
const isHerNumEven = isEven(herNum);
console.log('Her even result', isHerNumEven);
//is odd funtion
function isOdd(num){
    if(num % 2 != 0){
        return true;
    }
    return false;
}
const isMynumOdd = isOdd(myNum);
console.log('My Odd result:', isMynumOdd);
const isHerNumOdd = isOdd(herNum);
console.log('Her Odd result', isHerNumOdd);
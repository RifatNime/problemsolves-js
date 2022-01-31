//without array Multiplecation Table
const number = 13;
const range = 10;
//creating a multiplication table
for(let i = 1; i <= range; i++) {
    const result = i * number;
    console.log(number, '*' , i, '=' ,result);
}



//with array Multiplecation Table
function multiNum(num) {

    let newArray = [];
    for (let i = 1; i <= iRange; i++) {

    let sum = num * i;
    var result = num + " X " + i + " = " + sum;//'\n'

    if (sum == parseInt(sum)) {

    newArray.push(result);
    }
    // console.log();
    }
    return newArray;
}
let iRange = 10;
let myNum = multiNum(7);
console.log(myNum);

//////Number decoration table Table

var result = 'x ';
for (var i = 0; i < 11; i++) {

    for (var j = 0; j < 11; j++) {

        if(i == 0 && j > 0){
          result += '[' + j + ']';
        } 
        else if(j == 0 && i>0){
          result += '[' + i + '] ';
        } 
        else if(i>0 && j>0){
        result += (i*j) + ' ';
        }
    }
    result += '\n'
}

console.log(result);
//Leap Year
function checkLeapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        console.log(year + ' is a leap year.');
        return true;
    }
    else{
        console.log(year + "is'nt a leap year.")
        return false;
    }

}
const myYear = 2400;
const myYearLeapYear = checkLeapYear(myYear);
console.log("Is my year is Leap Year?", myYearLeapYear);
//Students Grade
function grade(num){
    if(num >= 0 && num <= 100){

        console.log("Your marks: ",num);

        if(num >= 80 && num <= 100){
            return "A+";   
        }
        else if(num >= 70 && num < 80){
            return "A";
        }
        else if(num >= 60 && num < 70){
            return "A-";
        }
        else if(num >= 50 && num < 60){
          return "B";
        }
        else if(num >= 40 && num < 50){
          return "C";
        }
        else if(num >= 33 && num < 40){
          return "D";
        }
        else{
            return "Fail";
        }
    }
    else{
        console.log("your result not found");
        return;
    }
}
const mygradenum = grade(70);
console.log('You have got grade', mygradenum , "in 100");

/////////////Avarage Students Grade///////////////////////////
var students = [['Roy', 80], ['Joy', 77], ['Jamil', 88], ['Ishitha', 95], ['Kamal', 68]];
var avgMarks = 0;

for (var i=0; i < students.length; i++) {
        avgMarks += students[i][1];
        var avg = (avgMarks/students.length);
}
console.log("Average grade: " + (avgMarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}

/////////////////////////////////number Showcase 1////////////////////////////////////var num = [2, 5, 3, 4, 6, 7,8]
var showElement = '';
for(var i = 0; i < num.length; i++)
{
showElement = showElement + num[i] +' ';
}
console.log(showElement);
/////////////////////////////////number Showcase 2////////////////////////////////////
var num = [2, 5, 3, 4, 6, 7,8]
var showElement;
for(var i = 0; i < num.length; i++)
{
showElement = showElement + num[i] +'\n';
}
console.log(showElement);
/////////////////////////////////number Showcase 3////////////////////////////////////
let items = "1,2,3";
items = items.split(",");

console.log(items); // ["1", "2", "3"]

for (let i = 0; i < items.length; i++) {
  items[i] = "- " + items[i] + "\n";
}

console.log(items); // ["- 1\n", "- 2\n", "- 3\n"]

items = items.join("");

console.log(items); // "- 1\n- 2\n- 3\n"
///l minutes to hour
function minuteToHour(minute){

    var hour = minute / 60;
    return hour;
}

var inputMinute = 180;
console.log("Input: ",inputMinute);

let getTime = minuteToHour(inputMinute);
console.log('Output: ', getTime, 'hours.');
/////Hour to minutes
function minuteToHour(hour){

    var minutes = hour * 60;
    return minutes;
}

var inputHour = 1;
console.log("Input: ",inputHour);

let getMTime = minuteToHour(inputHour);
console.log('Output: ', getMTime, 'minutes.');
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
//money interst problem
function moneyInterest(taka, rate, year){
    var interest = (taka * rate * year) / 100;
    console.log("Interest Value = ", interest);
    return;
}
var money = 1000;
var year = 1;
var rate = 20;
var input = moneyInterest(1000, 10, 1);

console.log("Simple Interest = ", input);
//loop in loop
for (var i=1; i<=10; i++){
    console.log('For: ',i);
    for(var x=1; x<=10; x++){
    console.log(x);
    }
}
   //Celsious To Fahrenheit
function celsiusToFahrenheit(celsius){
    console.log("Input temparature: ", ftemperature);

    const fahrenheit = (celsius * 1.8) + 32;
    console.log("Output temparature: ",fahrenheit);

    var message = ftemperature + "\xB0C degree celsius is equal to "+ fahrenheit + "\xB0F degree fahrenheit.";
    console.log(message);
    return;

}
const ftemperature = 24;
const fahrenheit = celsiusToFahrenheit(ftemperature);

//Fahrenheit to Celsius
function fahrenheitToCelsious(fahrenheit){
    console.log("Input Temperature: ", ctemparature);

    var celsius = (fahrenheit - 32) * 5 / 9;
    console.log("Output Temperature: ", celsius);

    const message = ctemparature + "\xB0F degree fahrenheit is equal to "+ celsius + "\xB0C degree celsius.";
    console.log(message);

    return;
}
const ctemparature = 75.2;
const celsius = fahrenheitToCelsious(ctemparature);
 
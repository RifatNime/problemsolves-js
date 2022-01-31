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

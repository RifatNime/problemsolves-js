function inchToFeet(inches){
    var feet = inches / 12;
    return feet;

}
var myInches = 132;
var feet = inchToFeet(myInches); //inches = myInches = 132
console.log('myInches in feet: ',feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('dadiInches in feet: ',feet);

var papaInches = 158;
var feet = inchToFeet(papaInches);
console.log('papaInches in feet: ',feet);
//mile to kilo meter

function mileToKilometer(miles){
    var km = miles * 1.60934;
    return km;

}
var marathon = mileToKilometer(26.2)
console.log('Tolal merathon distance in KM: ',marathon);
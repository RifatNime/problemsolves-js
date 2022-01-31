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

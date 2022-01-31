//C To F
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

//F to C
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

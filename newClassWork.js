// Given the list of an integer numbers to find the minima and maxima//
let numbers = [23, 3, 8, 1, 0, 5, 30, -2];
let minima = numbers[0];
let maxima = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minima) {
        minima = numbers[i];
    } else if (numbers[i] > maxima) {
        maxima = numbers[i];
    }
}
console.log("Minimum number is:", minima);
console.log("Maximum number is:", maxima);

// This is the algorithm of the above code writtten in the function//git 

function findMinMax(numbers) {
    let minima = numbers[0];
    let maxima = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minima) {
            minima = numbers[i];
        } else if (numbers[i] > maxima) {
            maxima = numbers[i];
        }
    }
    return {"minima": minima, "maxima": maxima};
}

let number = [23, 3, 8, 1, 0, 5, 30, -2];
let result = findMinMax(numbers);
console.log(result)

// The Kelvin Temperature that converts to Celsius, Fahrenheit and Newton temperature scales//
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}

function kelvinToNewton(kelvin) {
    return (kelvin - 273.15) * 0.33;
}

let kelvin = 300;
let celsius = kelvinToCelsius(kelvin);
let fahrenheit = kelvinToFahrenheit(kelvin);
let newton = kelvinToNewton(kelvin);

console.log("Kelvin temperature:", kelvin);
console.log("Celsius temperature:", celsius);
console.log("Fahrenheit temperature:", fahrenheit);
console.log("Newton temperature:", newton);

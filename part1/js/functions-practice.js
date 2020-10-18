//STEP 1
function halfNumber(number) {
    return number / 2;
}
var number = 20;
console.log("Half of " + number + " is " + halfNumber(number));


//STEP 2
function squareNumber(numberToSquare) {
    return numberToSquare * numberToSquare;
}
var numberToSquare = 5;
console.log("The result of squaring the number " + numberToSquare + " is " + squareNumber(numberToSquare));

//STEP 3
function percentOf(divisor, dividend) {
    return (divisor / dividend) * 100;
}
var divisor = 55;
var dividend = 100;
console.log(divisor + " is " + percentOf(divisor, dividend) + "% of " + dividend);

//STEP 4
function findModulus(num1, num2) {
    return num2 % num1;
}
var number1 = 4;
var number2 = 10;
console.log(findModulus(number1, number2) + " is the modulus of " + number1 + " and " + number2);

//STEP 5
function sumOfNumbers(inputNumbers) {
    var result = 0;
    for (var i = 0; i < inputNumbers.length; i++) {
        result += Number(inputNumbers[i]);
    }
    return result;
}

var input = prompt("Enter a list of intergers delimited by commas");
var numbers = input.split(',');
console.log("The result of adding all inputs is " + sumOfNumbers(numbers));
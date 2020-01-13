var number1 = parseInt(prompt("Enter a number"));
var number2 = parseInt(prompt("Enter another number"));

var add = function (number1, number2) {
    return number1 + number2;
};

var subtract = function (number1, number2) {
    return number1 - number2;
}

var multiply = function(number1, number2) {
    return number1 * number2;
}

var divide = function(number1, number2) {
    return number1 / number2;
}

alert("add: " + add(number1, number2));

alert("subtract: " + subtract(number1, number2));

alert("multiply: " + multiply(number1, number2));

alert("divide: " + divide(number1, number2));

var mass = prompt("What is your weight? (kg)");
var height = prompt("How tall are you? (meters)")

var BMI = function(mass, height) {
  mass = parseInt(mass);
  height = parseFloat(height);
  heightSquared = height * height;
  index =  mass / heightSquared
  message = ("Your BMI is " + index);
  return message;
}

alert(BMI(mass, height));

var gal = prompt("Enter gal");
var convert = function (x) {
liter = x * 3.785;
return liter;
}

alert(convert(gal));

var cel = prompt("Enter celsius");
var celToFahr = function (cel) {
return cel * 1.8 + 32;
}

alert(celToFahr(cel));

var fahr = prompt("Enter fahrenheit");
var fahrToCel = function(fahr) {
	cel = (parseInt(fahr) - 32) / 1.8;
	return cel;
}

alert(fahrToCel(fahr));
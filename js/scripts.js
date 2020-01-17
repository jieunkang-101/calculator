
// Business logic:

var add = function (number1, number2) {
     return number1 + number2;
};

var subtract = function (number1, number2) {
    return number1 - number2;
};

var multiply = function(number1, number2) {
    return number1 * number2;
};

var divide = function(number1, number2) {
    return number1 / number2;
};

//Everything blow this line is user interface logic:

$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add") {
      result = add(number1, number2); 
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
    $("#output").text(result);
  });
});






// $(document).ready(function() {
  
//   $("form#add").submit(function() {
    
//     var number1 = parseInt($("#first").val());
//     var number2 = parseInt($("#second").val());
//     var result = add(number1, number2);
//     $("#addOutput").text(result);
//     event.preventDefault();
//     $("#first").val("");
//     $("#second").val("");
//   });

//   $("form#subtract").submit(function() {
//     var number1 = parseInt($("#subtractFirst").val());
//     var number2 = parseInt($("#subtractSecond").val());
//     var result = subtract(number1, number2);
//     $("#subtractOutput").text(result);
//     event.preventDefault();
//     $("#subtractFirst").val("");
//     $("#subtractSecond").val("");
//   });

//   $("form#divide").submit(function() {
//     var number1 = parseInt($("#divideFirst").val());
//     var number2 = parseInt($("#divideSecond").val());
//     var result = divide(number1, number2);
//     $("#divideOutput").text(result);
//     event.preventDefault();
//     $("#divideFirst").val("");
//     $("#divideSecond").val("");
//   });
  
// });






//Conversion functions

// var BMI = function(mass, height) {
//   mass = parseInt(mass);
//   height = parseFloat(height);
//   heightSquared = height * height;
//   index =  mass / heightSquared
//   message = ("Your BMI is " + index);
//   return message;
// }

// alert(BMI(mass, height));

// var gal = prompt("Enter gal");
// var convert = function (x) {
// liter = x * 3.785;
// return liter;
// }

// alert(convert(gal));

// var cel = prompt("Enter celsius");
// var celToFahr = function (cel) {
// return cel * 1.8 + 32;
// }

// alert(celToFahr(cel));

// var fahr = prompt("Enter fahrenheit");
// var fahrToCel = function(fahr) {
// 	cel = (parseInt(fahr) - 32) / 1.8;
// 	return cel;
// }

// alert(fahrToCel(fahr));
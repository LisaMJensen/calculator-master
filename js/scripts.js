var add = function(number1, number2) {
  return number1 + number2;
};

/*var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);*/

var subtract = function(number1, number2) {
  return number1 - number2;
};

/*var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = subtract(number1, number2);
alert(result);*/

var multiply = function(number1, number2) {
  return number1 * number2;
};

/*var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multiply(number1, number2);
alert(result);*/

var divide = function(number1, number2) {
  return number1 / number2;
};

/*var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = divide(number1, number2);
alert(result);*/

// Below this line is user interface (front-end) logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  // alert(add(number1, number2));
  var result = add(number1, number2);
  $("#output").text(result);
  });

  $("form#sub").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = subtract(number1,number2);
    $("#output").text(result);
  });

  $("form#mul").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#mul1").val());
    var number2 = parseInt($("#mul2").val());
    var result = multiply(number1,number2);
    $("#output").text(result);
  });

  $("form#divide").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#div1").val());
    var number2 = parseInt($("#div2").val());
    var result = divide(number1,number2);
    $("#output").text(result);
  });
});

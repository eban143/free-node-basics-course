// I can declare a function by assigning it to a variable
var myFirstFunction = function(){
  console.log("Hello from function one");
}

// Or I can switch the function keyword and function name
function mySecondFunction(){
  console.log("Hello from function two");
}

// When I run this both functions will execute
myFirstFunction();
mySecondFunction();

// This function has a parameter that can be used inside
// the function
function myThirdFunction(message){
  console.log(message);
}

// This means I can provide a value when I call the function
// and it will be used inside the function
myThirdFunction("Hello from function three");

// This function declares has a parameter that is later
// in the function called as a function in it's own right
// (Hence the use of the brackets next the parameter name)
function myFourthFunction(callback){
  callback();
}

// So when we call the function and provide it with a 
// second function it will be triggered
myFourthFunction(function(){
  console.log("Hello from function four");
});

// Functions can also return values to use later with the
// return keyword
function myFifthFunction(){
  var math = 10 * 10;
  return math;
}

var result = myFifthFunction();
console.log("10 * 10 equals: " + result);

// Let's declare a variable that has global scope
var messageOne = "Hello from global variable"

// Then let's declare a new function
function mySixthFunction(){
  // Let's declare a variable that has local scope
  var messageTwo = "Hello from local variable"
  
  console.log(messageOne);
  console.log(messageTwo);
}

// Then let's declare another function that uses
// the local scope variable from the previous function
function mySeventhFunction(){
  console.log(messageOne);
  console.log(messageTwo);
}

// Calling the first method will return both messages
mySixthFunction();
// Calling the second method will return an error when
// attempting to read the local variable
mySeventhFunction();
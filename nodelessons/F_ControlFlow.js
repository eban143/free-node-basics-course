// If statements are responsible for controlling the flow of
// your code, directing in specific directions based upon on 
// the state of your code

// If a value is true then whatever lives within the curly brackets
// can be run
if(true){
  console.log("I can be run");
}

// We can use operators to determine if something is true or not
var cake = "sponge";

// This will return true because both values match
if(cake === "sponge"){
  console.log("I like sponge cake");
}

// This will return false because both values don't match and 
// in turn will not run the code inside
if(cake === "fruit"){
  console.log("I like fruit cake");
}

// We can also ensure specific code is triggered based on a true
// false decision by using if/else statements

// If the two values match then trigger the code within the brackets
if(cake === "sponge"){
  console.log("I like sponge cake");
// If the two values don't match then trigger the code within the else
// brackets
} else {
  console.log("I don't like " + cake);
}

// Working with loops

// This loop declares a variable called 'i' and sets it to 0.
// It has a condition that says if 'i' is less than 10 then
// run the code again. Each time the loop runs, the ++ symbol is
// applied to increase 'i' by one. Therefore this will loop
// 10 times before exiting once 'i' reaches 10.
for(var i = 0; i < 10; i++){
  console.log(i);
}

// While loops keep looping until a specific expectation is met
// so it's important to ensure they ultimately meet that
// expectation or they will continue to run forever

// Let's assigning a value of zero to ten
var count = 10;

// While count is greater than 0 keep running the code inside as a
// loop
while(count > 0){
  console.log(count);

  // Use the -- symbol to reduce the count by one
  count--;
}

// The for/in loop while loop over an array until it's exhausted
// all array entries

// Let's first declare an array
var cakeTypes = ["Sponge", "Fruit", "Cheese"];

// Next we use the for/in loop to iterate over the array. The x
// is a numerical count from 0 which will increase for each value
// inside the array
for(x in cakeTypes){
  console.log("Current count: " + x);
  console.log("I like " + cakeTypes[x] + "cake");
}

// First of all I am going to declare my function with a 
// single parameter
function myDeclaredFunction(parameterFunction){
  // I've decided that my parameter is a function so I will
  // execute it like a function. This means calling the parameter
  // name with parentheses next to it
  parameterFunction();
}

// Now I will call myDeclaredFunction and for the parameter
// I will pass what is known as an anonymous function. This is
// a function that isn't assigned to a variable
myDeclaredFunction(
  function(){
    console.log("I'm an anonymous function being run");
  }
);
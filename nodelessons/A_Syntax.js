// This is a code comment

// Here we have a variable.
// We first use the special term 'var' to say we want to create a variable
// Next we give the variable a name. For this one we shall call it 'myPlatform'
// We then use an equals sign followed by the value we want to store
var myVariable = "A string";

// We can also assign functions with code inside
// This time rather than assigning a value we assign a function using the keyword
// function and the brackets (). These tell the compiler that everything that lives
// within the open curly bracket and the close curly bracket will be run when the 
// function is called.
var myFunction = function ()
{
  // We can call functions to carry out other activites. Console.log will output
  // whatever is inside the brackets to your console screen.
  console.log();
  // We do cool stuff here
}

// If we want our function to be used by code in other files we can assign our
// function to the name 'exportedFunction' by calling exports (which is a special word)
// and then the name we want to assign to our shared function (it can be the same name)
exports.exportedFunction = myFunction;

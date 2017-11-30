// We can import our module using requires and providing it
// with a path to the file in which the module has been created.
// To see how the module is created check out:
// https://github.com/mwinteringham/free-node-basics-course/blob/master/nodelessons/H_Encapsulation_Module.js
var myModule = require('./H_Encapsulation_Module.js');

// We can then call myModule like a normal object
if(myModule.calculateSpeed(500, 10) > 30){
    console.log("Mark was speeding");
} else {
    console.log("Mark was not speeding");
}

// As we saw above, calculateSpeed has been exported as part of the module
// meaning we access it. We can also access other exported properties
console.log(myModule.message);

// However anything that was not exported in the module is hidden from us
// in this script
console.log(myModule.privateMessage);
console.log(myModule.privateFunction());
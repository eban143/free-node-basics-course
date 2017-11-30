// Demonstrations of algorithmic operators
console.log(4 + 4);      // returns 8
console.log("Ma" + "rk") // returns "Mark"
console.log(10 - 5);     // returns 5
console.log(10 * 5);     // returns 50
console.log(10 / 5);     // returns 2
console.log(10 % 4);     // returns 2

// Demonstrations of logical operators
console.log(true && false); // returns false as booleans are not equal
console.log(true || false); // returns true as one of the booleans is true
console.log(!true);         // returns false as this value is NOT true

// Demonstrations of relational operators

// Using two equal signs will return true for
// both of these comparisons
console.log(10 == "10");
console.log(10 == 10);

// Using three equals will return false for the
// first example but return true for the second
// example
console.log(10 === "10");
console.log(10 === 10);

// Using != will return true for both of these
// comparisons
console.log(10 != "11");
console.log(10 != 11);

// Using !== will return true for the first
// example because the type is different but
// return false for the second example
console.log(10 !== "10");
console.log(10 !== 10);

// Other relational operators
console.log(1 < 5);  // returns true as 1 is less than 5
console.log(1 > 5);  // returns false as 1 is not greater than 5
console.log(5 <= 5); // returns true as 5 is less than or equal to 5
console.log(5 >= 5); // returns true as 5 is greater than or equal to 5

// Demonstration of the typeof operator
console.log(typeof "Mark"); // returns String
console.log(typeof 1);      // returns Number
console.log(typeof true);   // returns Boolean

// Demonstration of assignment
var myInt = 13;        // The = sign means assign this value to this variable
myObject = new Date(); // Using new creates an object that contains a constructor
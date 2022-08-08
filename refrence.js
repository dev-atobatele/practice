// quotes within a string
let myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr+'\n');

// escape characters (\) in a string
const mySt = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(mySt+'\n');

// regex.test(str) method (object: regex, arg: str) returns bool
// true if regex in string
let myString = "Hello, World!";console.log(myString);
let myRegex = /Hello/;console.log(myRegex);
let result = myRegex.test(myString);console.log(result+'\n');

// literal matching (/regex/) is case sensitive, returns bool
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
console.log(waldoIsHiding);
let waldoRegex = /Waldo/;console.log(waldoRegex);
result = waldoRegex.test(waldoIsHiding);console.log(result);
console.log('\n');
waldoIsHiding = "Somewhere Waldo is hiding in this text.";
console.log(waldoIsHiding);
waldoRegex = /waldo/;console.log(waldoRegex);
result = waldoRegex.test(waldoIsHiding);console.log(result);
console.log('\n')

// use bitwise OR (ex|ex) to pick any of many expressions
let petString = "James has a pet cat.";console.log(petString)
let petRegex = /dog|cat|bird|fish/;console.log(petRegex)
result = petRegex.test(petString);console.log(result);
console.log('\n');

// use the i flag (/regex/i) to ignore the case of the string,
// returns bool
myString = "freeCodeCamp";console.log(myString)
fccRegex = /freecodecamp/i;console.log(fccRegex)
result = fccRegex.test(myString);console.log(result)
console.log('\n');

myString = "freeCodeCamp";console.log(myString)
fccRegex = /freecodecamp/;console.log(fccRegex)
result = fccRegex.test(myString);console.log(result)
console.log('\n');

// str.match(regex) method (object: str, arg: regex) returns array
// does the same as the test method, but returns an array
// with the index of where the regex is found 
// but is a string method instead of a regex method
let extractStr = "Extract the word 'coding' from this string.";
console.log(extractStr);
let codingRegex = /coding/i;console.log(codingRegex);
result = extractStr.match(codingRegex);console.log(result);
console.log('\n')

// change a value in an array by index
const myArray = [18, 64, 99];console.log(myArray)
myArray[0]=45;console.log(myArray);
console.log('\n')

// variables set without (let) or (const) are global,
// even with a function, they can affect other functions
// you want to use (let) and (const) to avoid this
// (let) and (const) can still be global when outside a function
// Declare the myGlobal variable below this line
let myGlobal=10;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun2()
console.log('\n');

// strings cannot be mutated or changed, you can only assign a new string
// Setup
myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
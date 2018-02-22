// Eloquent JavaScript exercises - Chapter 3 http://eloquentjavascript.net/03_functions.html

// Exercise 1: Minimum
	
var min = function (val1, val2) {
	return Math.min ( val1, val2);
	}
	
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Alternative solution:
function min(a, b) {
    if (a < b)
      return a;
    else
      return b;
  }

// Exercise 2: Recursion

function isEven(n) {
	If (n === 0)    
		return true;
	else if (n === 1)
		return false;
	else if (n < 0)
		return isEven (-n);
	else
		return isEven (n - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
console.log(isEven(-4));

/*
What is this function doing???
	It takes the number (n) as the starting point and assesses it through each of the arguments (is it 0? Is it 1? Is it < 0? IS IT? TELL ME!). 
	If false to the first three, it calculates n - 2 and goes back through the 3x arguments again. 
	If still false, it goes again. It will continue to do this (recursively... *wink*) until 'n - 2' is either equal to 0 or 1. 

	For a negative number, this will be identified in the first round and turned into a positive number. This will then be passed through the other arguments to assess whether it's odd or even.

	Ah. So. Good.
*/

// Exercise 3: Bean counting

function countBs (stringInput) {
  var count = 0;
  for (var i = 0; i < stringInput.length; i++) {
	 	if (stringInput.charAt(i) === "B") {
	    count += 1;
		}
	} return count;
}
	
console.log(countBs("BBC"));
// → 2

function countChar (stringInput, character) {
	var count = 0;
	for (var i = 0; i < stringInput.length; i++) {
	 if (stringInput.charAt(i) === character) {
			count += 1;
		}
	 } return count;
}

console.log(countChar("kakkerlak", "k"));
// → 4

/*
And what is this code doing, almighty wizard?
	countBs / countChar are the function names (obv). 
	Then we have a 'count' variable which is going to hold our value for all the times we're counting through the index of the string and picking up the characters.
	That handy for loop is going over the string again and again - each time it comes across our character of choice, it's adding 1 to our 'count' value.
	Ta-da!
*/

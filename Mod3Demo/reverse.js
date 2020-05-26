function reverseString(str)
{
	// step 1. use split to split the string
	var splitString = str.split("");
	
	// step 2. use the reverse method on the newly split string
	var reverseStr = splitString.reverse();
	
	// step 3. use join to put all of the individual elements back together into one string
	var joined = reverseStr.join("");
	
	// step 4. return the reversed string
	return joined;
}

var output = reverseString("HELLO THERE!!!");

console.log("Original String: HELLO THERE!!!");
console.log(`Reversed String: ${output}`);
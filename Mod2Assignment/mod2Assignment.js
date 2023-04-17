// have user enter their name
var fname = window.prompt('What is your name?');

// display a message with the name entered
alert(`Hello ${fname}!`);

// declare constant to hold PI value
const piValue = 3.1415926;

// Ask the user to input their favorite number 
// and store the value in a variable myFavNum
var myFavNum = window.prompt('What is your favorite number? ');

// convert the value from text to a float
myFavNum = parseFloat(myFavNum);

// Calculate the area of a circle 
// using the user’s favorite number as the radius ( r )
// Store the result in a new variable myArea.
// The formula to find the area of a circle is A = πr2. 
var myArea = piValue * (myFavNum * myFavNum);

// store the output in the id named 'output'; 
document.getElementById('output').innerHTML = 
"Hello "+ fname +", you entered " + myFavNum + " as your favorite number. "+
" If that was the radius of a circle, the circle’s area would be " + myArea + ".";
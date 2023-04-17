// array of strings
var fruits = ["Apple", "Orange", "Cherry", "Banana", "Grapes", "Strawberry", "Peach"];

var output = "[";

for (var i = 0; i < fruits.length; i++)
{
    //console.log(fruits[i])

    if (i == fruits.length - 1)
        output += fruits[i] + "]";
    else
        output += fruits[i] + ", "; 
}

document.getElementById('arrayContents').innerHTML = output;

// accessed using a .forEach()

// reset the output variable
output = "["

fruits.forEach((fruit, index) => {
    if (index == fruits.length - 1)
        output += fruit + "]";
    else
        output += fruit + ", "; 
});

document.getElementById('arrayContents2').innerHTML = output;

// make an empty array and then generate random numbers to populate it
var numbers = [];

// determine a random count of numbers to generate
var count = Math.floor(1 + (Math.random() * 11));

// use a for loop to add count numbers to the array using .push() function
for (var i = 1; i <= count; i++)
    numbers.push(Math.floor(1 + (Math.random() * 100))) // generates value between 1 and 100

// reset the output variable
output = "["

numbers.forEach((number, index) => {
    if (index == numbers.length - 1)
        output += number + "]";
    else
        output += number + ", "; 
});

document.getElementById('arrayContents3').innerHTML = output;

// use the .map function to make a new array of values based on the 
// random number array
// the values are going to be multiplied by 3
var timesThree = numbers.map(number => {
    return number * 3;
})

// reset the output variable
output = "["

timesThree.forEach((number, index) => {
    if (index == numbers.length - 1)
        output += number + "]";
    else
        output += number + ", "; 
});

document.getElementById('arrayContents4').innerHTML = output;
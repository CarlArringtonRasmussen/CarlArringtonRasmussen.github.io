// part 1 code - for loop that runs 10 times and checks to see if the 
// value of the loop control variable is even or odd

// variable to hold output text
var text = "";

// loop that builds the output and checks to see if the value of the loop
// control variable is even or odd
for (var i = 0; i <= 10; i++)
{
    // use if / else to check to see if i is even or odd
    if( i % 2 == 0)
        text += "Count " + i + " is even <br>";
    else
        text += "Count " + i + " is odd <br>";
}

// add the text string to our page by using .getElementById()
document.getElementById("forloop").innerHTML = text;

// function that processes the input of the number from the html
function forloopDemo()
{
    // reset the text variable
    var text = "";

    // get the value from the input tag
    var num = document.getElementById("input").value;

    // use a decision to check for the following:
        // check to see if the value entered is NOT a number
        // check to see if the value entered is less than 5
        // check to see if the value is greater than 20
    
    if(!Number.isInteger(parseInt(num)))
        document.getElementById("forloop2").innerHTML = "<b>ERROR: </b>Invalid Input.";
    else if(parseInt(num) < 5)
        document.getElementById("forloop2").innerHTML = "<b>ERROR: </b>Value is less than 5.";
    else if(parseInt(num) > 20)
        document.getElementById("forloop2").innerHTML = "<b>ERROR: </b>Value is more than 20.";
    else
    {
        // if the data is valid
        // convert the number to an integer
        num = parseInt(num);

        // rebuild the text string using the for loop
        for(var i = 1; i <= num; i++)
        {
            text += "This is iteration #" + i + "<br>";
        }

        // add the text string to the id named forloop2
        document.getElementById("forloop2").innerHTML = text;
    }
}

// function processes an array of courses to be displayed to the HTML page
function forEachDemo()
{
    // array of classes
    let arr = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

    // reset the text variable
    var text = "";

    // use the .forEach() method in order to process output
    arr.forEach((item, index) => {
        if(index == arr.length - 1)
            text += item;
        else
            text += item + ", ";
    });

    // add the output to the id named forEachDisplay
    document.getElementById("forEachDisplay").innerHTML = text;
}
/*
    for loops are designed to execute a set number of times
*/

var text = ""; // variable to hold an empty string of text
var i;  // loop control variable

// for loop that runs 5 times
for(i = 1; i <= 5; i++)
{
    // add on to the text string
    text += "This is iteration #" + i + "<br>"
}

document.getElementById("forLoop").innerHTML = text;

function forLoopInput()
{
    // reset the text variable
    var text = "";

    // get the input from the 'input' id from the HTML
    var num = document.getElementById("input").value;

    // validate the input of the number
    if(parseInt(num) < 1)
    {
        // display an error if the value of the number is less than 1
        document.getElementById("forLoop2").innerHTML = "<b>ERROR: </b>"+
        "Number must be at least 1. Try Again.";
    }
    else if(!Number.isInteger(parseInt(num)))
    {
        // display an error if the value of the number is not an integer
        document.getElementById("forLoop2").innerHTML = "<b>ERROR: </b>"+
        "Invalid Input. Try Again.";
    }
    else
    {
        // process the loop if the number entered is valid
        // convert the number to an integer
        num = parseInt(num);

        // use a for loop to put together the text string
        for(i = 1; i <= num; i++)
        {
            text += "This is iteration #" + i + "<br>";
        }

        // populate the loop header with 'forLoopHeader' id
        document.getElementById('forLoopHeader').innerHTML = "This code is produced "+
        "from a for loop that executed " + num + " times."

        // populate the loop with id 'forLoop2'
        document.getElementById("forLoop2").innerHTML = text;
    }
}
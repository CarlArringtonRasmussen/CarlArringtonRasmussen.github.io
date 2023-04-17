/*
    while loops are condition based loops - 
    executes as long as the condition is true

    pretest loop - condition is checked first, then statements execute

    do not have to execute if the condition is false

    at least one of the statements needs to address / update the condition

        - if the condition is ALWAYS true, the loop never stops running
        - generates an Infinite loop

    structure:

    while(condition)
    {
        statement(s);
    }
*/

// variable to hold an empty text string
var text = "";

// variable that controls the loop below
var i = 1;

// while loop that executes until the value of i = 20
while(i <= 20)
{
    // add on to the text value
    text += "This is iteration #" + i + "<br>"

    // increment the value of i
    i++;
}

// once the loop concludes, display the output in the id named 'output'
document.getElementById('output').innerHTML = text;
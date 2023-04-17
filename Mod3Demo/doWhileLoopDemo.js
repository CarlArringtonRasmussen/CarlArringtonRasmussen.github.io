/*
    do-while loops are condition based loops - 
    executes as long as the condition is true

    posttest loop - the statements execute first, then the condition is checked

    - designed to execute at least once!

    structure:

    do
    {
        statement(s);
    }while(condition);

*/

// variable to hold an empty text string
var text = "";

// variable that controls the loop below
var i = 1;

// do-while loop that executes until the value of i = 20
do
{
    // add on to the text value
    text += "This is iteration #" + i + "<br>"

    // increment the value of i
    i++;
}while(i <= 20);

// once the loop concludes, display the output in the id named 'output'
document.getElementById('output').innerHTML = text;
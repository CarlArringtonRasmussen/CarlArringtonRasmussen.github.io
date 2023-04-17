/*
    for loops are count controlled loops

    - should be used when you know how many times something should repeat

    structure:

        for(start; end (condition); increment/decrement)
        {
            statement(s);
        }

    no need to update the loop control variable in the body of the loop

    if you declare the loop control variable in the header of the for loop,
    it only has the lifespan of the loop
*/

// variable to hold an empty text string
var text = "";

// for loop that executes until the value of i = 20
for(var i = 1; i <= 20; i++)
{
    // add on to the text value
    text += "This is iteration #" + i + "<br>"
}

// once the loop concludes, display the output in the id named 'output'
document.getElementById('output').innerHTML = text;
function evenOddInput()
{
    // reset text variable
    var text = "";

    // get value of the number from text field with id 'input'
    var num = document.getElementById('input').value;

    // validate the input of the number
    if(!Number.isInteger(parseInt(num)))
    {
        // display an error in the 'output' id in the HTML if the value
        // that was entered is NOT a number
        document.getElementById('output').innerHTML = "<b>ERROR:</b> Invalid Input. "+
         "Try again.";
    }
    else
    {
        // parse the number and call evenOdd function 
        num = parseInt(num);
        evenOdd(num);
    }
}

function evenOdd(number)
{
    if(number == 0)
        document.getElementById('output').innerHTML = "You entered a 0";
    else if(number % 2 == 0)
        document.getElementById('output').innerHTML = "<b>" + number + "</b> is even";
    else
        document.getElementById('output').innerHTML = "<b>" + number + "</b> is odd";
}
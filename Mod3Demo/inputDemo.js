function outputDemo()
{
    // when the button is clicked from the HTML associated with the function,
    // the following actions will take place
    // get the information from the 'myText' text field
    var output = document.getElementById("myText").value;

    // use an alert to display the information from the text field
    alert(`You entered: ${output}`);

    // display what was entered inside of the 'output' id in the HTML
    document.getElementById("output").innerHTML = "You entered: <b> " + output + "</b>"; 
}
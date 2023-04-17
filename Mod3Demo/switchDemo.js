/*
    switch statements are another type of multiple alternative decision
    structure

    allow for you to evaluate the value of ONE variable on a case-by-case
    basis

    limited to evaluating specific values of ints and chars mostly

    structure:

        switch(variable)
        {
            case value:
                // statement(s);
                break;

            case anotherValue:
                // statement(s);
                break;

            case evenAnotherValue:
                // statement(s);
                break;

            default:
                // statement(s);
                break;
        }
*/

// variable to hold the day of the week
var day;

switch(new Date().getDay())
{
    case 0:
        // where the value is 0 - 'Sunday'
        day = 'Sunday'
        break;

    case 1:
        // where the value is 1 - 'Monday'
        day = 'Monday'
        break;

     case 2:
        // where the value is 2 - 'Tuesday'
        day = 'Tuesday'
        break;
    
    case 3:
		day = "Wednesday";
		break;
	case 4:
		day = "Thursday";
		break;
	case 5:
		day = "Friday";
		break;
	case 6:
		day = "Saturday";
		break;
}

document.getElementById('output').innerHTML = "<h2>Today is <u>" + day + "</u></h2>";
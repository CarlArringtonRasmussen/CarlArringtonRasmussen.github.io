function processData()
{
	var x = parseInt(document.getElementById("number1").value);
	var y = parseInt(document.getElementById("number2").value);
	var z = parseInt(document.getElementById("number3").value);
	var output = "";
	
	console.log(x);
	console.log(y);
	console.log(z);
	
	if (x>y && x>z)
	{
		if (y>z)
		{
			output = x + ", " + y + ", " + z;
		}
		else
		{
			output = x + ", " + z + ", " + y;
		}
	}
	else if (y>x && y >z)
	{
		if(x>z)
		{
			output = y + ", " + x + ", " + z;
		}
		else
		{
			output = y + ", " + z + ", " + x;
		}
	}
	else if (z>x && z>y)
	{
		if (x>y)
		{
			output = z + ", " + x + ", " + y;
		}
		else
		{
			output = z + ", " + y + ", " +x;
		}
	}
	
	document.getElementById("output").innerHTML = output;
	
}
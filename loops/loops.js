/**************************************
 TITLE: loops.js
 AUTHOR: Brennan Garth Castillo
 CREATE DATE: 21 Feb 2020
 PURPOSE: Arrays and Loops
***************************************/

$(document).ready(function(){

	//Alert user
	alert("Hoist the secret message ye scurvy dawgs!");


	let strQues = '';
	//While Loop. While the length of the input is not equal to one, ask question again!
    while(strQues.length != 1) {
        strQues = prompt("Enter a singled character:", "Just one Character");
    }
	/*****			
	Purpose: Convert the input given by the users above		
	Parameters: Must be a one unit character	
	Return: A true and false output
	*****/	
	//Saving strQues as an Integer to convert to string
    intInput = parseAscii(strQues);
    strInput = parseBin(intInput);
    arrInput = strInput.split("")
	//For Loop through each unit of the array length
	//Move up one
    for(let i=0;i < arrInput.length;i++) {
        if(arrInput[i] == 1) {
            $("h1")[0].textContent += "True ";
        } else {
            $("h1")[0].textContent += "False ";
        }
    }

	/*****			
	Purpose: Convert the input above into an Ascii value		
	Parameters: A single character or letter		
	Return: An integer representing an Ascii value
	*****/
	function parseAscii(chrCharacter)
	{
		intAscii = chrCharacter.charCodeAt(0);
		return intAscii;
	}

	/*****
	Purpose: Convert the ascii value to binary format
	Parameters: The Integer value from previous Ascii function
	Return: binary, base 2 representation of the number passed to this function
	*****/
	function parseBin(intAscii)
	{
		strBin = parseInt(intAscii, 10).toString(2);
		if(strBin.length < 8)
		{
			var intPlaceHolders = 8 - strBin.length;
			for(var i = 0; i < intPlaceHolders; i++)
			{
				strBin = "0" + strBin;
			}
		}

		return strBin;
	}
});
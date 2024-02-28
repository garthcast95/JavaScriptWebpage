/**************************************
 TITLE: strings.js
 AUTHOR: Brennan Garth Castillo
 CREATE DATE: 24 Feb 2020
 PURPOSE: Strings
***************************************/

$(document).ready(function()
{
	
	var strInput = prompt("Whats the name of ye lover?", "Boomy");
	var strName = [];
	//Use CharAt
	strName[0] = "Was that " + strInput.charAt(0) + " for " + strInput.charAt(0) + "enchous?!";	
	strName[1] = "Was that " + strInput.charAt(4) + " for " + strInput.charAt(0) + "ighty?!";	
	//Use IndexOf
	strName[2] = "Should we call it "+ strInput+" with " + strInput.indexOf("o") + " dubloons";
	strName[3] = "Or the Drowned " + strInput.substring(strInput.indexOf("e"));
	//Use Substring
	strName[4] = strInput.substring(0,4) + "ly";
	strName[5] = strInput.substring(0,2) + "sta";
	//Use Trim
	strName[6] = strInput.trim() + " the Drowned";
	strName[7] = strInput.trim() + " the Forgotten";
	//Use Replace
	strName[8] = strInput.replace("a","e");
	strName[9] = strInput.replace("o","u");	
	//Use Uppercase
	strName[10] = strInput.toUpperCase() + " said the last words of my lover";
	//Use Lowercase
	strName[11] = strInput.toLowerCase() + " as she said goodbye...";
	
	//For Loop. Have it print every thing inside the array
	//Loop from 0 to 11 and add 1
	var i;
	for(i = 0;i <= 11;i++)
	{
		document.getElementById("Strings").innerHTML += "<li>" + strName[i] +"</li>" + "<br>";
	}
	
}
);
/**************************************
 TITLE: iffy.js
 AUTHOR: Brennan Garth Castillo
 CREATE DATE: 12 Feb 2020
 PURPOSE: If Statements

***************************************/
$(document).ready(function()
{
		var strQuestion = "Did you get the payload to port on time?";
		var strAnswer = prompt(strQuestion);
		var strResp = strAnswer.toUpperCase();
		
		if(strResp == "YES"){
			Award = "I'll double ye dubloons!";
			}
		else if(strResp == "NO"){
			Award = "You'll be swimming with the sharks tonight!";
		}
		else{
			Award = "Did you understand my question lad?"
		}	
		document.getElementById("iffy").textContent = Award;
}
);
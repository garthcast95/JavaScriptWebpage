/**************************************
 TITLE: moreifs.js
 AUTHOR: Brennan Garth Castillo
 CREATE DATE: 12 Feb 2020
 PURPOSE: If Statements
 MODIFIED
 13 FEB 2020: Modified functions
14 FEB 2020: Separated functions for Case Switch and If and Else Statments

***************************************/
$(document).ready(function()
{
	var intCurrentLatitude = 0;
	var intCurrentLongitude = 0;
	var intDestinationLatitude = 0;
	var intDestinationLongitude = 0;
		
	intCurrentLatitude = prompt("Current Latitude: ", 90);
	intCurrentLongitude = prompt("Current Longitude: ", 90);
	intDestinationLatitude = prompt("Destination Latitude: ", 90);
	intDestinationLongitude = prompt("Destination Longitude: ", 90);
	
	if((intCurrentLatitude <= intDestinationLatitude) && (intCurrentLongitude <= intDestinationLongitude))
	{	
		Award = "Head North East!";
		direct();
	}
	else if((intCurrentLatitude <= intDestinationLatitude) && (intCurrentLongitude >= intDestinationLongitude))
	{	
		Award = "Head North West!";
		direct();
	}
	else if((intCurrentLatitude >= intDestinationLatitude) && (intCurrentLongitude >= intDestinationLongitude))
	{	
		Award = "Head South West!";
		direct();
	}
	else if((intCurrentLatitude >= intDestinationLatitude) && (intCurrentLongitude <= intDestinationLongitude))
	{	
		Award = "Head South East!";
		direct();
	}
	else
	{
		Award = "Where are you heading Lad?!";
		direct();
	}	
switch(true)
	{
		case ((intCurrentLatitude <= intDestinationLatitude) && (intCurrentLongitude <= intDestinationLongitude)) :
			Award2 = "Head North East!";
			direct2()
			break;
		case ((intCurrentLatitude <= intDestinationLatitude) && (intCurrentLongitude >= intDestinationLongitude)) :
			Award2 = "Head North West!";
			direct2()
			break;
		case ((intCurrentLatitude >= intDestinationLatitude) && (intCurrentLongitude >= intDestinationLongitude)) :
			Award2 = "Head South West!";
			direct2()
			break;
		case ((intCurrentLatitude >= intDestinationLatitude) && (intCurrentLongitude <= intDestinationLongitude)) :
			Award2 =  "Head South East!";
			direct2()
			break;
	}
function direct()
	{
		document.getElementById("ifelse").textContent = Award;
	}	
function direct2()
	{
		document.getElementById("caseswitch").textContent = Award2;
	}		
}
);
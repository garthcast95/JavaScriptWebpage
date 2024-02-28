/*
    Filename: ahoy.js
    Written by: Brennan Castillo
    Purpose: Learning jQuery
    Date: 03/09/2020
    Modification History:
	09 Mar 2020 modified for Ahoy Jquery Assignment
    Last Modified: 09 Mar 2020
*/
$(document).ready(function(){
	
	/*	Purpose: Add text. Add text after each line
		Parameters: none
		Return: none
	*/
	$("#appendBtn").click(function(){
		$("p").append("<br>Ahoy jQuery World!");
	});	
	
	
	
	/*	Purpose:Overwrite the paragraph
		Parameters: none
		Return: none
	*/
	$("#btnReplace").click( function(){
		$("p").html("Sail with me!");
	});
});
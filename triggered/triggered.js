/*
    Filename: triggered.js
    Written by: Brennan Castillo
    Purpose: Triggered Events
    Date: 04/06/2020
    Modification History:
*/
$(document).ready(function(){
	alert("Double click on the top text");

	$("#hidden").dblclick(function(){
	$(this).hide();
	});
	
	count=0
	  $("input").keypress(function(){
    $("span").text(count = count+1);
	});
	
	$("p").mouseover(function() { 
	$("p").css("background-color", "white"); 
	});
	$("p").mouseout(function() { 
	$("p").css("background-color", "#00bec4"); 
	});  	
});
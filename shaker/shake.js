/*
    Filename: Shake.js
    Written by: Brennan Castillo
    Purpose: Movers and Shakers
    Date: 04/07/2020
    Modification History:
*/
$(document).ready(function(){
	$("#hide").click(function(){
    $("#target").hide();
	});
	$("#show").click(function(){
    $("#target").show();
	});
	$("#toggle").click(function(){
    $("#target").toggle();
	});
	$("#slideup").click(function(){
	$("#target").slideUp();
	});
	$("#slidedown").click(function(){
    $("#target").slideDown();
	});
	$("#fadeout").click(function(){
    $("#target").fadeOut();
	});
	$("#fadein").click(function(){
    $("#target").fadeIn();
	});		
	$("#chain").click(function(){
    $("#target").hide(1000).show(1000);
	});
	$("#multi").click(function(){
    $("#target").hide(1000)
	});
});
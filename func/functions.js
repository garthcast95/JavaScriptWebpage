/**************************************
 TITLE: functions.js
 AUTHOR: Brennan Garth Castillo
 CREATE DATE: 29 Jan 2020
 PURPOSE: Practice Alerts and functions
 LAST MODIFIED ON: 29 Jan 2020
 MODIFICATION HISTORY:
29 Jan 2020: File created
***************************************/
// the main function
$(document).ready(function(){
    alert("Brace for impact!")
    
    wheel(command,12);
    cannons(command,6);
    sword(command,5);
    harpoon(command,4);
    drown(command,7);
    treasure(command,1);
    
    
});

/*The ship prepares to brace for impact by turning the weel a # of times.
Num denotes the parameters
The ID of the string as well.
*/
function wheel(id,num){
    var strWords= new String("Turn ye wheel "+ num+ " rounds!");
    var write=document.getElementById(id);    
	alert("Turn ye ship around!");	
    id.textContent+=(strWords);
    }
/*
Number of cannons that are loaded. Creates a string.
Num denotes the parameters
The ID of the string as well.

*/
function cannons(id,num){
    var strWords=new String(" We've set "+ num+ " cannons across the deck.");
	var write=document.getElementById(id);
    alert("Prepare the cannonballs!");
    id.textContent+=(strWords);
}
/*
Number of men slayed before being thrown overboard.
Num denotes the parameters
The ID of the string as well.

*/
function sword(id,num){    
    var strWords=new String(" Swing each sword and slay. Slay less than "+ num+ " and prepare for overboard!");
    var write=document.getElementById(id);
    alert("Arm your swords and prepare!");
    id.textContent+=(strWords);
}
/*
Number of harpoons attached 
Num denotes the parameters
The ID of the string as well.
*/

function harpoon(id,num){    
    var strWords=new String(" Fired "+ num+ " Harpoons and climb!");
    var write=document.getElementById(id);    
    alert("Fire Harpoons and prepare to board!");
    id.textContent+=(strWords);
}
/*
Number of holes damaging the ship 
Num denotes the parameters
The ID of the string as well.
*/
function drown(id,num){    
    var strWords=new String(" Our ship took a hit! Plug those "+ num+ " or sink below!");
	var write=document.getElementById(id);    
	alert("Drown them to the bottom of the ocean!");
    id.textContent+=(strWords);
}
function treasure(id,num){
    var strWords=new String(" Take every treasure! Non shall steal! Not even "+num+ " dubloon!!");
    var write=document.getElementById(id);
    alert("Take every treasure!");
    id.textContent+=(strWords);
}
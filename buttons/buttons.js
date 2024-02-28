/**************************************
 TITLE: buttons.js
 AUTHOR: Brennan Garth Castillo
 CREATE DATE: 24 Feb 2020
 PURPOSE: Create interactive buttons
***************************************/
// the main function
$(document).ready(function()
{	

	var btnHandler1 = document.getElementById("wheels");
	var btnHandler2 = document.getElementById("cannonss");
	var btnHandler3 = document.getElementById("swords");	
	var btnListener4 = document.getElementById("harpoons");
	var btnListener5 = document.getElementById("drowns");
	var btnMultiListener6 = document.getElementById("treasures");
	//Event Handler
	btnHandler1.onclick = wheel;
	btnHandler2.onclick = cannons;
	btnHandler3.onclick = sword;
	//EventListener
	btnListener4.addEventListener("click", harpoon, false);
	btnListener5.addEventListener("click", drown, false);	
	btnMultiListener6.addEventListener("click", function() {
		wheel(wheels, 12);
		harpoon();
	}, 
	false);
/*  
    wheel(wheels,12);
    cannons(cannonss,6);
    sword(swords,5);
    harpoon(harpoons,4);
    drown(drowns,7);
    treasure(treasures,1);
*/    


/*The ship prepares to brace for impact by turning the weel a # of times.
Num denotes the parameters
The ID of the string as well.
*/
	function wheel(id, num){
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

}
);	
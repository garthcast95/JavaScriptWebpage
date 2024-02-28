/**************************************
 TITLE: conversions.js
 AUTHOR: Brennan Garth Castillo
 CREATE DATE: 24 Jan 2020
 PURPOSE: Maniupulate variables and prompt
 LAST MODIFIED ON: 24 Jan 2020
 MODIFICATION HISTORY:
24 Jan 2020: File created
***************************************/
$(document).ready(function(){
    
    var strName= new String("");
    var strAsk= new String("Arrr! What is your name Lad?");
    var strDefault= new String("Penny the Parrot");
    strName= prompt(strAsk, strDefault);
	
    var strDoubloons= new String("");
    var numDoubloons= new Number(0);
    var strDefaultDoubloons= new String("0");
    strDoubloons= prompt("How much dubloons you have in ye pocket?", strDefaultDoubloons);
	
    var numExchange = (287);
    var strDollar= new String("0");
    var strOutput= new String("");
    numDoubloons= parseInt(strDoubloons);
    strDollar= (numDoubloons* numExchange)
    
    strOutput=  strName + "! your "+ strDoubloons+ " doubloons, is worth $"+ strDollar+ ".";
    elSelected.textContent = strOutput;
    
});
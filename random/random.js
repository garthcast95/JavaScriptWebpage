/**************************************
 TITLE: random.js
 AUTHOR: Brennan Garth Castillo
 CREATE DATE: 05 Feb 2020
 PURPOSE: Maniupulate variables and prompt
 MODIFICATION HISTORY:
05 Feb 2020: File created
***************************************/
$(document).ready(function(){

	var captain = new Crew("Jack","cap", "Captain", 45);
	captain.randomNum();
	captain.strPhrase = "Guess the dubloons in my chest, and ye shall win!";
	captain.speak();
	
	var Crew1 = new Crew("Patchy","pat", "First Mate", 65);
	Crew1.randomNum();
	Crew1.strPhrase = "Arrrr! "+Crew1.strName+", the one and only "+Crew1.strTitle+". Guess the Number " +Crew1.strRand+".";	
	Crew1.speak();
	
	var Crew2 = new Crew("Tusken","tusk", "Cook", 74);
	Crew2.randomNum();
	Crew2.strPhrase = "The Best Taste, "+Crew2.strName+", Want more Dubloons as the best "+Crew2.strTitle+". Guess the Number " +Crew2.strRand+".";
	Crew2.speak();
	
	var Crew3 = new Crew("Squeal", "sql", "Powderkeg", 23);
	Crew3.randomNum();
	Crew3.strPhrase = "The Gold is mine! "+Crew3.strName+", and my bust of cannons as the "+Crew3.strTitle+" will win with " +Crew3.strRand+".";
	Crew3.speak();
	
	captain.strPhrase = "I got "+captain.strRand+" dubloons in my chest!";
	captain.speak();
	if(captain.intRand == Crew1.intRand){
		captain.strPhrase = "Toss a coin to "+ Crew1.strName+ " the " +Crew1.strTitle  ;
		captain.speak(); //Break Current if Statement if Crew1 gets it correct
		}
	else if(captain.intRand == Crew2.intRand){
		captain.strPhrase = "Toss a coin to "+ Crew2.strName+ " the " +Crew2.strTitle ;
		captain.speak(); //Break Current if Statement if Crew2 gets it correct
	}
	else if(captain.intRand == Crew3.intRand){
		captain.strPhrase = "Toss a coin to "+ Crew3.strName+ " the " +Crew3.strTitle;
		captain.speak(); //Break Current if Statement if Crew3 gets it correct
	}
	else{
		captain.strPhrase = "Yarrr! Another dubloon in my chest as none of you win!";
		captain.speak(); //Break Current Statement if No Crew gets it correct
	}		
	function Crew(name,id, title, favor){
		this.strName = name;
		this.strTitle = title;
		this.elOutput = document.getElementById(id);
		this.speak = function(){
			this.elOutput.innerHTML += this.strPhrase+"<br>";
		};//end of speak
		this.randomNum = function(){
			this.intRand = Math.ceil(10*Math.random());
			this.strRand = this.intRand.toString();
		};
	};
});
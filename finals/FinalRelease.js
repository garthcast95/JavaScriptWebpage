/**************************************
<!--
 TITLE: FinalRelease.js				
 AUTHOR: Brennan Garth Castillo
 CREATE DATE: May 1 2020
 PURPOSE: Final Release Project
 LAST MODIFIED BY: Brennan Castillo
 MODIFICATION HISTORY:
 01 MAY 2020: Original Build
-->
***************************************/

$(document).ready(function() 
{
	$( "#accordion" ).accordion();	
	//Constructing all available choices for tags on autocomplete
	var availableTags = [
		"School",
		"Birthday Party",
		"Special Event",
		"Wedding",
		"Travel",
		"Documentation",
		"Intramurals",
		"Sports Event",
		"Funeral",
		"Special Project",
	];
	$( ".autocomplete" ).autocomplete({
		source: availableTags
	});
	$( "#button" ).button();
	$( "#button-icon" ).button({
		icon: "ui-icon-gear",
		showLabel: false
	});
	//defaulte JS
	$( "#radioset" ).buttonset();


	//defaulte JS
	$( "#controlgroup" ).controlgroup();


//defaulte JS
	$( "#tabs" ).tabs();


//defaulte JS
	$( "#dialog" ).dialog({
		autoOpen: false,
		width: 400,
		buttons: [
			{
				text: "Ok",
				click: function() {
					$( this ).dialog( "close" );
				}
			},
			{
				text: "Cancel",
				click: function() {
					$( this ).dialog( "close" );
				}
			}
		]
	});
//defaulte JS
	// Link to open the dialog
	$( "#dialog-link" ).click(function( event ) {
		$( "#dialog" ).dialog( "open" );
		event.preventDefault();
	});
	//defaulte JS
	$( "#datepicker" ).datepicker({
		inline: true
	});
	$( ".spinner" ).spinner({
		min: 1,
	});
	$( "input[type='submit']" ).button();	
	$( "input[type='reset']" ).button();
	//Stops the submit button from refreshing the DOM
	$(document).on('submit', 'COMPLETEDFORM', function() 
	{
		output;
		return false;
    });
	//form validation
	$.validator.setDefaults(
	{
		submitHandler: output
	});
	
	
	/* 	Function
		Name: output
		Purpose: 	Retrieve all variables from the form
		Return Value: None
	*/
	function output()
	{
		var email = $("#emailid").val(); //email
		var telephone = $("#telephonenum").val();
		var pword = $("#password").val();
		var date = $("#datepicker").val();
		var spin = $("#visitorcount").val();
		var checkval = values.join(',');
		var message = $("#OtherDetails").val();
		var typeevent = $("#Mainevent").val();
		var radioval = [];
		radioval[0] = $("input[name=radio-1]:checked").val();
		var services = []; 
		$('input[type="checkbox"]:checked').each(function(i,e){values.push(e.value)});
		$('#COMPLETEDFORM').html("");
        $('#COMPLETEDFORM').append("Email: " + email + "<br>");
        $('#COMPLETEDFORM').append("Phone #: " + telephone + "<br>");
        $('#COMPLETEDFORM').append("Date of Service: " + date + "<br>");
		$('#COMPLETEDFORM').append("Service Requested: " + services + "<br>");
		$('#COMPLETEDFORM').append("Duration: " + radioval + "<br>")			
		$('#COMPLETEDFORM').append("Number of People: " + spin + "<br>")
		$('#COMPLETEDFORM').append("Message: " + message + "<br>");
		$('#COMPLETEDFORM').append("Type of Event: " + typeevent + "<br>");
	
	}
	//Validates for alphabets only
	$.validator.addMethod("alpha", function(value, element) 
	{
		return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
	});
	//Setting up rules and error messages for validation
	$("#OrderForm").validate(
		{           
			rules: {
				email: 
				{							
					required: true,
					email: true
				},
				password: 
				{							
					required: true,
					minlength: 5
				},
				date: 
				{								
					required: true
				},
				telephonenum: 
				{							
					required: true,
					digits: true,
					minlength: 10,
					maxlength: 9
				},
				autocomplete:
				{
					required: true,
					alpha: true
				}
			},
		});
						
});
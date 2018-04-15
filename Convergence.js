//get checkbox, bubble and textbox by the id of the html
//this is the id for bubbles. 

//this is the id for checkboxes. 

//this is the id for textboxes.


// initialize variables 
var file = document.getElementById("File");

// match will read the file and if the ~b,c,t~ is in the file the if statment will do as such 
var bubble = file.match(/~b~/);
var CBox = file.match(/~c~/);
var txtBox = file.match(/~t~/);


// using a reg ex where it will read teh file 
if (file = bubble){
	//when the string matches with the file it will mach with it will 
	// replace the string with the bubble function.
	var newBubble = file.replace( bubble , bubble);
	
}
else if(file = CBox) {
	//when the string matches with the file it will mach with it will 
	// replace the string with the Checkbox function.
	var newCBox = file.replace( CBox, CBox);
	
}

else if (file = txtBox){
	//when the string matches with the file it will mach with it will 
	// replace the string with the textBox function.
	var newTextBox = file.replace( txtBox, txtBox);
	
}
else{
	//in the event the user does not fullfill writing the file correctly
	window.alert("file is formated wrong read User manual to find correct formating.");
}

$("#Import-btn").hide();
$("#File").on("change",function(event){
	selectedFile = event.target.files[0];
	
	$("#Import-btn").show();
});
	
function Import(){
	console.log("hi");
	// Create a root reference
	var FileName = selectedFile.name; 
	var storageRef = firebase.storage().ref('/Surveys/' + FileName);
	//Create an Upload Task
	var uploadTask =storageRef.put(selectedFile);
 

	
	window.alert("SUCCSS!!!! file uploaded");

	//this uploads the files to cloud storage 
	uploadTask.on('state_changed', function(survey)
	{
	//prossesing 

	// create a key for each file 
		var database = firebase.database();
	 // Get a key for a new Post.
  		var newPostKey = firebase.database().ref().child('posts').push().key;

  	// Write the new post's data simultaneously in the posts list and the user's post list.
  		var updates = {};
  		var postData = {};
  		updates['/posts/' + newPostKey] = postData;
  		console.log(postData);

  		firebase.database().ref().update(updates);

	});

}
function Export(){

}
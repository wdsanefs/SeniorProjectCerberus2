FileName = document.getElementById('File');
$("#Upload-btn").hide();
$("#File").on("change",function(event){
	selectedFile = event.target.files[0];
	
	$("#Upload-btn").show();
});
	
function Upload(){

	// Create a root reference
	var FileName = selectedFile.name; 
	var storageRef = firebase.storage().ref('/Surveys/' + FileName);
	//Create an Upload Task
	var uploadTask =storageRef.put(selectedFile);
 

	
	window.alert("SUCCSS!!!! file uploaded");

	//this uploads the files to cloud storage 
	uploadTask.on('state_changed', function(snapshot)
	{

	// create a key for each file 
		var FileData = firebase.database().ref('posts').push().key;

		var downloadURL = uploadTask.snapshot.downloadURL;
		console.log(downloadURL);
	 // Get a key for a new Post.
  		console.log(FileData);
  		  var FileData = firebase.database().ref().child('posts').push().key;

  	// Write the new post's data simultaneously in the posts list and the user's post list.
  		var updates = {};
  		var postData = {
  			file: selectedFile.val()
  		}
  		updates['/users-posts/' + FileData]= postData
  		firebase.database().ref().update(updates)
  		console.log(postData);
  		console.log(updates);
  
	});

}

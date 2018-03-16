var provider = new firebase.auth.GoogleAuthProvider();

function signIn(){
	console.log("signIn");
	firebase.auth().signInWithPopup(provider).then(function(result) {
 		 // This gives you a Google Access Token. You can use it to access the Google API.
 		var token = result.credential.accessToken;
  		// The signed-in user info.
  		console.log("signIn");
 		var user = result.user;
 	
	}).catch(function(error) {
  		// Handle Errors here.
 		var errorCode = error.code;
  		var errorMessage = error.message;
 	 	// The email of the user's account used.
 	 	var email = error.email;
 	 	console.log("signIn");
  		// The firebase.auth.AuthCredential type that was used.
 		var credential = error.credential;
  		// ...
	});
}
$("#Upload-btn").hide();
$("#File").on("change",function(event){
	selectedFile = event.target.files[0];
	
	$("#Upload-btn").show();
});
	
function UploadFile(){
	console.log("hi");
	// Create a root reference
	var FileName = selectedFile.name; 
	var storageRef = firebase.storage().ref('/Surveys/' + FileName);
	//Create an Upload Task
	var uploadTask =storageRef.put(selectedFile);
 

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
  		console.log(updates);
		firebase.auth().onAuthStateChanged(function(user) {
  				if (user) {
  					var token = firebase.auth.currentUser.uid;
    				queryDatabase(token);

  				} else {
    				window.location= "SignUp.html";
  				}
			});

  		function queryDatabase(token){
  				var userId = firebase.auth().currentUser.uid;
				return firebase.database().ref('/users/').once('value').then(function(survey) {
  				var username = (survey.val() );
  				console.log(PostArray);
				});
  		};
	});

}

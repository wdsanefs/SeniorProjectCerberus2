$("#Upload-btn").hide();
$("#File").on("change",function(event){
	selectedFile = event.target.files[0];
	
	$("#Upload-btn").show();
});
	
function Upload(){
	var fileName = selectedFile.name;
	var storageRef = firebase.storage().ref('/Surveys/' + fileName);
	var uploadTask = storageRef.put(selectedFile);
	console.log(selectedFile);

	uploadTask.on('state_changed', function(snapshot){
	console.log(selectedFile);
	},function(error){
		console.log(selectedFile);
	},function(){

	var downloadURL = uploadTask.snapshot.downloadURL;
	console.log(downloadURL);
});
		
	
}

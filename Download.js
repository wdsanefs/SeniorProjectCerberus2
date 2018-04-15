
function Download(token){	
	firebase.database().ref('/posts/').once('value').then(function(snapshot){
		var fileObject = snapshot.val();
		console.log(posts);
		var keys = object.keys(fileObject);
		var row;
		for(var i =0; i< keys.length; i++){
			var currentFile = fileObject[keys[i]];
			if (i % 3 == 0){
			row = document.createNewElement('div');
			$(row).addClass('row');
			$("#PlaceHolder").append(row);
				
			}
		var col = document.createNewElement('div');
		$(col).addClass('col-lg-4');

		var Files = document.createNewElement('filese');
		Files.src = fileObject.url
		$(Files).addClass('FileContent');
		}

	})
}

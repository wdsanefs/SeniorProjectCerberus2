const txtName = document.getElementById("name")
const txtUserName = document.getElementById("UName")
const txtPhoneNumber = document.getElementById("PNum");
const txtEmail = document.getElementById("Email");
const txtPassword = document.getElementById("Password");
const submit = document.getElementById("Submit-btn")

var database = firebase.database().ref('/users/');
submit.addEventListener('click',e =>{
	const name = txtName.value;
	const user = txtUserName.value;
	const Pnum = txtPhoneNumber.value;

 	const email = txtEmail.value;
  	const password = txtPassword.value;
  	const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(email, password)
  window.alert("Account created, sign in!!!")

  // once the values are submited they will be uploaded to the authentication and the database for security measures 
  database.push().set({ 
    userName: name,
    userId: user,
    number: Pnum,
    email : email,
  });

  window.location = "index.html";
 
});
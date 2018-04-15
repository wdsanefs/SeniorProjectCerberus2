// here are a set of variables taknen from the id's used from the HTML 
const txtEmail = document.getElementById("Email");
const txtPassword = document.getElementById("Password");
const GuestUser = document.getElementById("anonymous")
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");




// Guest User Authentication 
GuestUser.addEventListener('click', e => {
 
  firebase.auth().signInAnonymously();
   window.alert("you are signed in as guest!");
});


//Login button for the User if they have an account  
btnLogin.addEventListener('click', e => {
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email, password);
  
  promise.catch(e => console.log(e.message));
 
  // changes the state of the firebase 
  firebase.auth().onAuthStateChanged(firebaseuser=>{
  if(firebaseuser){
    console.log(firebaseuser);
    window.location ="HomePage.html";
  }
  else{
      window.location ="index.html";
  }

});
      
});

// Signup to hlep create an account for the 
btnSignUp.addEventListener('click',e =>{
  window.location ="account.html";
});

  

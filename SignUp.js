const txtEmail = document.getElementById("Email");
const txtPassword = document.getElementById("Password");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");

$("#btnLogin").show();
$("#btnSignUp").show();

btnLogin.addEventListener('click', e => {
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
 
      
});
btnSignUp.addEventListener('click',e =>{
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();


  const promise = auth.createUserWithEmailAndPassword(email, pass)
  window.alert("Account created sign in");

  $("#btnSignUp").hide();
});

firebase.auth().onAuthStateChanged(firebaseUser=>{
  if(firebaseUser){
    console.log(firebaseUser);

  }
  else{
    console.log('not logged in');
  }

});
// save from reloading the pages 
document.getElementById("loginForm").addEventListener("submit",(event)=>{
  event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
  if (user) {
    location.replace("afterlogin.html")
  }
})

function login(){
  const email1 = document.getElementById("email1").value
  const password1 = document.getElementById("password1").value
  firebase.auth().signInWithEmailAndPassword(email1, password1)
  .catch((error)=>{
      document.getElementById("error").innerHTML = error.message
  })
}

function signUp(){
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  // const confirmPassword = document.getElementById("confirmPassword").value
  firebase.auth().createUserWithEmailAndPassword(email, password,/*confirmPassword*/)
  .catch((error) => {
      document.getElementById("error1").innerHTML = error.message
  });
}

function forgotPass(){
  const email1 = document.getElementById("email1").value
  firebase.auth().sendPasswordResetEmail(email1)
  .then(() => {
      alert("Reset link sent to your email id")
  })
  .catch((error) => {
      document.getElementById("error").innerHTML = error.message
  });
}






























// css and other 
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

    const firebaseConfig = {
    apiKey: "AIzaSyD3F5klpN0CJw6AsXnTiH6pDdM42R63MkM",
    authDomain: "test-becb7.firebaseapp.com",
    projectId: "test-becb7",
    storageBucket: "test-becb7.firebasestorage.app",
    messagingSenderId: "169290885894",
    appId: "1:169290885894:web:9716fb8b8560f2debc0c87"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

//input part

const name = document.getElementById('name').value
const conpw = document.getElementById('confirmpassword').value
const sub = document.getElementById('submit')
const regsub = document.getElementById('regsubmit')


//Login part
sub.addEventListener('click', () => {
  const email = document.getElementById('email').value
  const pw = document.getElementById('password').value
  
  signInWithEmailAndPassword(auth, email, pw)
  .then((userCredential) => {
    
    const user = userCredential.user;
    alert('success')
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
 
})

regsub.addEventListener('click', () => {
  const regemail = document.getElementById('regemail')
  const regpw = document.getElementById('regpassword')
  createUserWithEmailAndPassword(auth, regemail, regpw)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('Created')
    window.location.reload()
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    
    // ..
  });
})
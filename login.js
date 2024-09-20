import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth ,onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebas

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCY0ihIXgCvOcfb2TjMlUM_CAU8z-M-Otg",
    authDomain: "final-test-95cba.firebaseapp.com",
    projectId: "final-test-95cba",
    storageBucket: "final-test-95cba.appspot.com",
    messagingSenderId: "425187589579",
    appId: "1:425187589579:web:fd55b7d5b9756f3297ca4e",
    measurementId: "G-KHBNZXET0P"}
  

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    console.log(auth, app);


    
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      signInWithEmailAndPassword(auth,email, password)
        .then(userCredential => {
          const user = userCredential.user;
          // Redirect based on user type
          db.collection('users').doc(user.uid).get().then(doc => {
            const userType = doc.data().userType;
            if (userType === 'user') {
              window.location.href = 'pages/add-student.html';
            } else if (userType === 'Student') {
              window.location.href = 'pages/student-portal.html';
            }
          });
        })
        .catch(error => {
          alert(error.message);
        });
    });
  


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth ,onAuthStateChanged, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
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



    const signup_email = document.getElementById('signup_email')
    const signup_password = document.getElementById('signup_password')
    const signup_btn = document.getElementById('signup_btn')

    signup_btn.addEventListener("click", createUserAccount)


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

function createUserAccount (){
  createUserWithEmailAndPassword(auth, signup_email.value,signup_password.value )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("account created")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage)
    // ..
  });

}











    
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

    










  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  
  // // Firestore reference
  // const db = firebase.firestore();
 
  
  // // Function for logging in
  // function loginUser(email, password) {
  //   return auth.signInWithEmailAndPassword(email, password)
  //     .then((userCredential) => {
  //       // Successfully logged in
  //       return userCredential.user;
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     });
  // }
  
  // // Function for logging out
  // function logoutUser() {
  //   return auth.signOut().then(() => {
  //     alert('Logged out successfully!');
  //     window.location.href = 'login.html'; // Redirect to login
  //   }).catch((error) => {
  //     alert(error.message);
  //   });
  // }
  
  // // Check if user is logged in
  // function checkAuthStatus() {
  //   auth.onAuthStateChanged((user) => {
  //     if (!user) {
  //       // If not logged in, redirect to login page
  //       window.location.href = 'login.html';
  //     }
  //   });
  // }
  
  // // Function to add a new student
  // function addStudent(firstName, lastName, email, cnic, studentId, userType = 'Student') {
  //   return auth.createUserWithEmailAndPassword(email, 'defaultPassword') // Creates student with default password
  //     .then((userCredential) => {
  //       const userId = userCredential.user.uid;
  
  //       // Add student details to Firestore
  //       return db.collection('students').doc(userId).set({
  //         firstName: firstName,
  //         lastName: lastName,
  //         email: email,
  //         cnic: cnic,
  //         studentId: studentId,
  //         userType: userType
  //       });
  //     }).catch((error) => {
  //       alert(error.message);
  //     });
  // }
  
  // // Function to upload student marks
  // function uploadStudentMarks(studentId, course, marks, totalMarks, grade) {
  //   // Find student by ID and add marks to their 'results' sub-collection
  //   db.collection('students').where('studentId', '==', studentId).get()
  //     .then(snapshot => {
  //       if (!snapshot.empty) {
  //         snapshot.forEach(doc => {
  //           const studentUid = doc.id;
  //           db.collection('students').doc(studentUid).collection('results').add({
  //             course: course,
  //             marks: marks,
  //             totalMarks: totalMarks,
  //             grade: grade
  //           }).then(() => {
  //             alert('Marks uploaded successfully');
  //           });
  //         });
  //       } else {
  //         alert('No student found with this ID');
  //       }
  //     })
  //     .catch(error => {
  //       alert(error.message);
  //     });
  // }
  
  // // Navigation helpers (use these functions to navigate between pages)
  // function goToPage(page) {
  //   window.location.href = page;
  // }
  
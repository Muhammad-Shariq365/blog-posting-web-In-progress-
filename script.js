import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBaouZEgTmdbNi1tbLCr3ceolYL_YjYKWE",
  authDomain: "crudjswithfirebase-da555.firebaseapp.com",
  projectId: "crudjswithfirebase-da555",
  storageBucket: "crudjswithfirebase-da555.appspot.com",
  messagingSenderId: "518068117298",
  appId: "1:518068117298:web:8bce2bc16d58688124412b"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let btn = document.getElementById("registeration-form");

btn.addEventListener("submit", () => {
    let name =document.getElementById("name");
    let LastName = document.getElementById("LastName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword =document.getElementById("confirmPassword");

    let userData = {
        name: name.value,
        LastName: LastName.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    }
    createUserWithEmailAndPassword(auth,userData.email,userData.password,userData.confirmPassword)

  .then(async(userCredential) => {
     
    const user = userCredential.user;
    try {
      await setDoc(doc(db, "users", user.uid), {
               ...userData,
               uid:user.uid
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
    console.log("user",user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("errorMessage", errorMessage)
  });
})


let getAllUsers =async ()=> {
    const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} =>`, doc.data());
});
}

getAllUsers()



/* document.getElementById("registration-form").addEventListener("submit", function(event) {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
      alert("Password does not match with Confirm Password");
      event.preventDefault(); // Prevent form submission
  }
}); */

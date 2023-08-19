/* import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

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

document.getElementById("login-btn").addEventListener("click", async () => {
    let loginEmail = document.getElementById("login-email").value;
    let loginPassword = document.getElementById("login-password").value;

    const querySnapshot = await getDocs(collection(db, "users"));
    let userFound = false;

    querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData.email === loginEmail && userData.password === loginPassword) {
            userFound = true;
        }
    });

    if (userFound) {
        alert("User found!");
    } else {
        alert("User not found.");
    }
});
 */
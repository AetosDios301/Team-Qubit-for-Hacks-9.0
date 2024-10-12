// Example code for register.js (Firebase setup assumed to be done)
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Registered successfully
            const user = userCredential.user;
            // Optionally save user's name in the database
            console.log('User registered:', user);
            // Redirect to profile building page
            window.location.href = 'profile.html';
        })
        .catch((error) => {
            console.error('Registration error:', error.message);
            // Display error message to the user
        });
});

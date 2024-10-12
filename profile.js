import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

const auth = getAuth();

// Check if user is authenticated
onAuthStateChanged(auth, (user) => {
    if (!user) {
        // If not logged in, redirect to login
        window.location.href = 'login.html';
    }
});

document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const bio = document.getElementById('bio').value;
    const age = document.getElementById('age').value;
    const contact = document.getElementById('contact').value;

    // Example: You can update Firebase user profile or add to Firestore
    updateProfile(auth.currentUser, {
        displayName: auth.currentUser.displayName,
        photoURL: '' // Optional: Set a photo URL
    }).then(() => {
        console.log('Profile updated successfully');
        // Redirect to landing page after profile setup
        window.location.href = 'index.html';
    }).catch((error) => {
        console.error('Error updating profile:', error.message);
        // Show error to the user
    });
});

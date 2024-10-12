// Example JavaScript for find-care.js
let map;

// Function to initialize the map (not needed for the modal)
function initMap() {
    // Set the initial location to a default city (e.g., New York)
    const defaultLocation = { lat: 40.7128, lng: -74.0060 }; // New York City coordinates

    // Create a map centered at the default location
    map = new google.maps.Map(document.getElementById("map"), {
        center: defaultLocation,
        zoom: 12,
    });
}

// Function to search for care (you can add more functionality here)
function searchCare() {
    const searchInput = document.getElementById('searchInput').value;
    console.log("Searching for:", searchInput);
    // Additional code to filter results and update the map can be added here
}

// Function to open the Google Maps modal
function openMap() {
    // Set the source for the Google Maps iframe
    const doctorLocation = "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Dr.+John+Doe,+New+York";
    document.getElementById('gmapIframe').src = doctorLocation;

    // Show the modal
    const mapModal = new bootstrap.Modal(document.getElementById('mapModal'));
    mapModal.show();
}

function bookAppointment(type, doctorName) {
    if (type === 'offline') {
        // Redirect to offline booking form with doctor's name
        window.location.href = `offline-booking.html?doctorName=${encodeURIComponent(doctorName)}`;  
    } else if (type === 'online') {
        // Redirect to online consultation scheduling page with doctor's name
        window.location.href = `online-booking.html?doctorName=${encodeURIComponent(doctorName)}`;  
    }
}


// script.js

// Function to handle user login
function login(username, password) {
    // Simulated validation: in a real app, this would check a database
    if (username === "admin" && password === "password") {
        displayDashboard();
    } else {
        alert("Invalid credentials!");
    }
}

// Function to display the user dashboard
function displayDashboard() {
    const dashboard = document.getElementById("dashboard");
    dashboard.innerHTML = "<h2>Welcome to the Dashboard!</h2>";
    // Additional dashboard functionality can be added here
}

// Function to log out the user
function logout() {
    const dashboard = document.getElementById("dashboard");
    dashboard.innerHTML = "<h2>You have logged out.</h2>";
}

// Assuming there's a simple HTML structure
document.getElementById("loginForm").onsubmit = function(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    login(username, password);
};
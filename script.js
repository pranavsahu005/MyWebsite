const nameForm = document.getElementById('name-form');
const passwordForm = document.getElementById('password-form');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const resultDiv = document.getElementById('result');

let userName = ''; // To store the user's name

// Handle name submission
nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    userName = nameInput.value.trim(); // Store the entered name
    if (userName) {
        nameForm.style.display = 'none'; // Hide the name form
        passwordForm.style.display = 'block'; // Show the password form
        resultDiv.innerHTML = ''; // Clear any previous messages
    }
});

// Handle password submission
passwordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userPassword = passwordInput.value.trim(); // Get the entered password

    if (userPassword === userName) {
        // If password matches the name
        resultDiv.innerHTML = 'Baby'; // Success message
        window.location.href = 'main.html'; // Redirect to the next page
    } else {
        // If password doesn't match the name
        resultDiv.innerHTML = `Naa Tum meri dost nhi hoo kon hooo tum kaha hai meri ${userName}`;
    }
});

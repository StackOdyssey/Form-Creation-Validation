async function fetchUserData() {
    constapiUrl = "https://jsonplaceholder.typicode.com/users";
    const dataContainer = document.getElementById("api-data");

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        dataContainer.innerHTML = " ";

        const userList = document.createElement("ul");

        users.foreac(function (user) {
            const listItem = document.createElement("li");
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        dataContainer.appendChild(userList);
    } catch (error) {
        dataContainer.innerHTML = "";
        dataContainer.textContent = "Failed to load user data.";
    };

}

document.addEventListener("DOMContentLoaded", fetchUserData);




document.addEventListener("DOMContentLoaded", function () {
    // Form Selection
    const form = document.getElementById("registration-form");

    // Feedback Division Selection
    const feedbackDiv = document.getElementById("form-feedback");

    // Form Submission and Event Prevention
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Input Retrieval and Trimming
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validation Logic
        let isValid = true;
        let messages = [];

        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must contain '@' and '.' characters.");
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Displaying Feedback
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});
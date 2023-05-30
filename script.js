document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check username and password against your authentication mechanism
    // For demonstration purposes, let's assume the username is "admin" and password is "password"
    if (username === "admin" && password === "password") {
      alert("Login successful");
      // Perform additional actions, such as redirecting to another page
    } else {
      alert("Invalid username or password");
    }
  });
  
  document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    // Perform additional validation or checks if necessary
  
    // Store the user's information or send it to the server for further processing
    // For demonstration purposes, let's just log the values to the console
    console.log("Username:", username);
    console.log("Password:", password);
  
    // Clear the form fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
  
    alert("Signup successful");
    // Perform additional actions, such as redirecting to another page
  });
    
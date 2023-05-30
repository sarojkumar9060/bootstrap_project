function login() {
	var username = document.getElementsByName("username")[0].value;
	var password = document.getElementsByName("password")[0].value;
	
	if (username == "user" && password == "pass") {
		alert("Login successful!");
	} else {
		alert("Invalid username or password. Please try again.");
	}
}

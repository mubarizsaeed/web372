document.addEventListener('DOMContentLoaded', function() {
    let isLoginMode = true;

    document.getElementById('runScriptButton').addEventListener('click', function() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var resultDiv = document.getElementById('result');

        if(isLoginMode) {
            // Login Mode: Check if the user data in local storage matches the input
            var storedUsername = localStorage.getItem('username');
            var storedPassword = localStorage.getItem('password');

            if(username === storedUsername && password === storedPassword) {
                resultDiv.textContent = 'Welcome back, ' + username;
                resultDiv.style.color = 'green';
            } else {
                resultDiv.textContent = 'Incorrect username or password.';
                resultDiv.style.color = 'red';
            }
        } else {
            // Signup Mode: Save the username and password in local storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            resultDiv.textContent = 'Signup successful. You can now log in.';
            resultDiv.style.color = 'green';
        }
    });

    document.getElementById('toggleAuthMode').addEventListener('click', function() {
        isLoginMode = !isLoginMode;
        if (isLoginMode) {
            document.getElementById('runScriptButton').textContent = 'Login';
            document.getElementById('toggleAuthMode').textContent = 'Switch to Sign Up';
        } else {
            document.getElementById('runScriptButton').textContent = 'Sign Up';
            document.getElementById('toggleAuthMode').textContent = 'Switch to Login';
        }
    });
});

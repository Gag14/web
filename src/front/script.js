function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('loginError');
  
    // Add your authentication logic here
    // For simplicity, let's assume a hardcoded username and password
    const validUsername = 'user';
    const validPassword = 'password';
  
    if (username === validUsername && password === validPassword) {
      // Successful login
      alert('Login successful!');
    } else {
      // Failed login
      loginError.textContent = 'Invalid username or password';
    }
  }
  
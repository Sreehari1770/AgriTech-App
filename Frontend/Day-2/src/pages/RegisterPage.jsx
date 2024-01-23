import React, { useState } from 'react';
import '../assets/css/RegisterPage.css';

const RegisterPage = () => {
  // State variables for user input and error messages
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Function to validate the input fields
  const validateForm = () => {
    // Reset the error messages
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    // Flag to indicate if the form is valid
    let isValid = true;

    // Check if the username is empty
    if (username === '') {
      setUsernameError('Username is required');
      isValid = false;
    }

    // Check if the email is valid (basic format check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Email is invalid');
      isValid = false;
    }

    // Check if the password is at least 8 characters long and contains at least one number
    const passwordRegex = /\d/; // regex to check if there is a digit in the password
    if (password.length < 8 || !passwordRegex.test(password)) {
      setPasswordError(
        'Password must be at least 8 characters long and contain at least one number'
      );
      isValid = false;
    }

    // Check if the password and the confirm password match
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    // Return the validity flag
    return isValid;
  };

  // Function to handle the form submission
  const handleSubmit = (event) => {
    // Prevent the default browser behavior
    event.preventDefault();

    // Validate the form
    if (validateForm()) {
      // Handle successful registration here
      console.log('Registration successful');
    }
  };

  // Return the JSX for the registration page
  return (
    <div className="registration-page">
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <p className="error">{usernameError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;


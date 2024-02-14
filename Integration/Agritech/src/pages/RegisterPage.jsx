import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux'; // Importing useDispatch hook
// import { register } from '../assets/others/userSlice'; // Importing register action
import axios from 'axios'; // Import Axios
import '../assets/css/RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch(); // Initializing useDispatch hook

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');

  const validateForm = () => {
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setMobileNumberError('');

    let isValid = true;

    if (username.trim() === '') {
      setUsernameError('Username is required');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Email is invalid');
      isValid = false;
    }

    const passwordRegex = /\d/;
    if (password.length < 8 || !passwordRegex.test(password)) {
      setPasswordError(
        'Password must be at least 8 characters long and contain at least one number'
      );
      isValid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    const mobileNumberRegex = /^[0-9]{10}$/;
    if (!mobileNumberRegex.test(mobileNumber)) {
      setMobileNumberError('Mobile number must be 10 digits');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const authenticateResponse = await axios.post('http://localhost:8080/api/v1/auth/register', {
          name: username,
          email: email,
          password: password,
          mobileNumber:mobileNumber,
        });

        console.log('Authentication response:', authenticateResponse.data);

        const saveResponse = await axios.post('http://localhost:8080/auth/users', {
          username: username,
          email: email,
          password: password,
          mobileNumber:mobileNumber,
        });

        console.log('Save response:', saveResponse.data);

        if (authenticateResponse.status === 200) {
          // Registration successful
          // dispatch(register({ username, email })); // Dispatching the register action
          alert('Registration successful');
          navigate('/login');
        } else {
          // Handle registration error
          alert('Registration failed');
        }
      } 
      catch (error) {
        console.error('Error registering user:', error);
        // Handle network error or other exceptions
        alert('An error occurred during registration');
      }
    }
  };

  return (
    <div className="register-bg">
      <div className="registration-page">
        <form onSubmit={handleSubmit}>
          <h1>Create Your Account:</h1>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
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
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="mobile-number">Mobile Number</label>
            <input
              type="text"
              id="mobile-number"
              placeholder="Enter Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            {mobileNumberError && <p className="error">{mobileNumberError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
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
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
          </div>

          <button type="submit">Register</button>
          <p>Already a user? <Link to="/login">Sign In</Link></p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

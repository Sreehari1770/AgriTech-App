import React, { useState } from 'react';
import '../assets/css/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    const passwordRegex = /\d/; // checks if there is a digit in the password

    if (username === '' || password === '') {
      setError('Please fill in all fields');
      return false;
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    } else if (!passwordRegex.test(password)) {
      setError('Password must contain at least one number');
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Handle successful login here
      alert('Login successful');
    }
  };

  return (
    <>
    <div className='bg-login'>
    <div className="login-page">
      <form onSubmit={handleSubmit}>
      <h1>Welcome Farmer</h1>
      <div id="username">
        <label for="username">UserName: </label>
        <input type="text" placeholder="Username" id="username"value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div id="password">
        <label for="password">Password: </label>
        <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}x/>
      </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default LoginPage;


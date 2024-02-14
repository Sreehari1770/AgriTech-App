import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../assets/others/userSlice';
import axios from 'axios'; // Import axios for making HTTP requests
import '../assets/css/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateForm = () => {
    if (username === '' || email === '' || password === '') {
      setError('Please fill in all fields');
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const authenticateResponse = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
          // userName: username,
          email: email,
          password: password,
        });

        console.log('Authentication response:', authenticateResponse.data);

        // const saveResponse = await axios.post('http://localhost:8080/auth/users', {
        //   // Include any necessary data to save here
        // });

        // console.log('Save response:', saveResponse.data);

        if (email.includes('@admin.com')) {
          navigate('/admin/dashboard');
          dispatch(login({ username, email }));
        } else {
          navigate('/dashboard');
          dispatch(login({ username, email }));
        }

      } catch (error) {
        console.error('Request failed', error);
        alert("Invalid User");  
        console.log('Sign-in failed. Please fix errors.');
      }
    }
  };

  return (
    <>
      <div className='bg-login'>
        <div className="login-page">
          <form onSubmit={handleSubmit}>
            <h1 className='h1-login'>Welcome Farmer</h1>

            <label htmlFor="username">Username: </label>
            <input type="text" placeholder="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

            <label htmlFor="email">Email: </label>
            <input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password: </label>
            <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            {error && <p className="error">{error}</p>}
            <button type="submit">Login</button>
            <div className=''>
              <p>Don't have an account <Link to="/register">Sign Up here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

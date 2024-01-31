import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import '../assets/css/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();
  const validateForm = () => {

    if (username === '' || password === '') {
      setError('Please fill in all fields');
      return false;
    } 
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Handle successful login here
      alert('Login successful');
      navigate('/dashboard');
    }
  };

  return (
    <>
    <div className='bg-login'>
    <div className="login-page">
      <form  onSubmit={handleSubmit}>
      <h1 className='h1-login'>Welcome Farmer</h1>
      
        <label for="username">UserName: </label>
        <input type="text" placeholder="Username" id="username"value={username} onChange={(e) => setUsername(e.target.value)} />
      
        <label for="password">Password: </label>
        <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}x/>
      
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      <div className=''>
      <p>Don't have a account <Link to="/register">Sign Up here</Link></p>
      </div>
      <Link to="/admin/login">Admin?</Link>
      </form>
    </div>
    </div>
    </>
  );
};

export default LoginPage;


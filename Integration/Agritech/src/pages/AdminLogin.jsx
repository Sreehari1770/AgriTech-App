import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import '../assets/css/AdminLogin.css';
const AdminLogin = () => {
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
      navigate("/admin/dashboard");
    }
  };

  return (
    <>
    <div className='bg-login'>
    <div className="Admin-login-page">
      <form  onSubmit={handleSubmit}>
      <h1 className='h1-Admin'>Welcome Admin</h1>
      
        <label for="username">UserName: </label>
        <input type="text" placeholder="Username" id="username"value={username} onChange={(e) => setUsername(e.target.value)} />
      
        <label for="password">Password: </label>
        <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}x/>
      
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      <div className=''>
      <Link to="/login">User?</Link>
      </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default AdminLogin;


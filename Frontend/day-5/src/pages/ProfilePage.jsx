import React from 'react';
import '../assets/css/ProfilePage.css';
import NavBar from '../component/NavBar';

const ProfilePage = () => {
  return (
    <>
    <NavBar/>
    <div className="profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
      </div>
      <div className="profile-content">
        <div className="profile-info">
          <h2>User Information</h2>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Main Street, Cityville, State, 12345</p>
        </div>
        <div className="profile-picture">
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfilePage;

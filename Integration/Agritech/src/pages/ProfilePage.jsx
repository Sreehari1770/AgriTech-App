import React from 'react';
import { useSelector } from 'react-redux'; // Importing useSelector to access Redux store
import NavBar from '../component/NavBar';
import '../assets/css/ProfilePage.css';

const ProfilePage = () => {
  // Access user information from Redux store
  const user = useSelector((state) => state.user.user);

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
            {user && (
              <>
                <p><strong>Name:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> 7530053266</p>
                <p><strong>Address:</strong> palladam</p>
              </>
            )}
            {!user && <p>No user information available.</p>}
          </div>
          <div className="profile-picture">
            <img src={user ? user.profilePicture : "https://via.placeholder.com/150"} alt="Profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

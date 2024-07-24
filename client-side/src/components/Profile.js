import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state || {};

  if (!user) {
    return <div>You need to log in to view this page.</div>;
  }

  const logOut = async () => {
    try {
      await axios.post('https://fullstacktest-backend.onrender.com/api/users/logout');

      // Navigate back to the login page
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>

      <button onClick={logOut}>Log Out</button>
    </div>
  );
}

export default Profile;

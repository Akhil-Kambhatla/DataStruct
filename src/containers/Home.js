// Home.js
import React from 'react';
import AppNavbar from '../components/AppNavbar';
import Aboutus from '../components/Aboutus';
import Contactus from '../components/Contactus';
import { Routes, Route, Outlet } from 'react-router-dom';
import AppFooter from '../components/AppFooter';
import UserFeedback from '../components/UserFeedback';
import UserProfile from '../components/UserProfile'
import CreateEvent from '../components/CreateEvents'; 
//import Dashboard from '../components/Dashboard';

const Home = ({ user }) => {
  // Extract the user's ID from the user object
  // const userId = user.sub;
  console.log('Current URL:', window.location.pathname);

  return (
    <div>
      <AppNavbar />


      <div style={{
        marginTop: 80,
        marginBottom:80
      }}>
        <Routes>
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/userfeedback" element={<UserFeedback />} />
          <Route path="/userprofile" element={<UserProfile />} />

          <Route path="/createvnt" element={<CreateEvent />} />
          <Route index element={<Outlet />} />
        </Routes>

      </div>
      <AppFooter />
    </div>
  );
};

export default Home;

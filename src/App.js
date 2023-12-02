import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import LoginButton from './components/LoginButton';
import Home from './containers/Home';
import SpinnerLoading from './components/SpinnerLoading';
//import CommentList from './components/CommentList';



function App() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuth0();
  const [isLoading, setIsLoading] = useState(true);
  // const hashedUserId = crypto.SHA256('yourValueToHash').toString();

  // Log the user object to the console to check if it's fetched correctly
  useEffect(() => {
    console.log('user:', user);
  }, [user]);

  // Simulate an asynchronous operation, e.g., loading user data
  useEffect(() => {
    // Replace this setTimeout with actual asynchronous operations in your app
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating a 2-second delay
  }, []);

  return (
      <div>
        {authLoading || isLoading ? (
          <SpinnerLoading />
        ) : (
          <Routes>
            <Route path="/login" element={isAuthenticated ? <Navigate to={`/dashboard`} /> : <LoginButton />} />
            <Route
              path="/dashboard/*"
              element={isAuthenticated ? <Home user={user} /> : <Navigate to="/login" />}
            />
            <Route
              path="/"
              element={isAuthenticated ? <Navigate to={`/dashboard`} /> : <Navigate to="/login" />}
            />
          </Routes>
        )}
      </div>
  );
}

export default App;




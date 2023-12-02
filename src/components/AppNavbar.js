import React,{ useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa'; // Import the user icon
import { useAuth0 } from '@auth0/auth0-react'; // Import Auth0 for authentication
import styled from 'styled-components'; // Import styled-components



//import './AppNavbar.css'

// Define a styled component for the user avatar
const UserAvatar = styled.img`
  border-radius: 50%; // Make the image circular
  width: 40px; // Set the width to make it smaller
  height: 40px; // Set the height to make it smaller
  margin-right: 10px; // Add margin for spacing
`;

// Define a styled component for the user profile div
const UserProfileDiv = styled.div`
  display: flex; // Align content in a single line
  align-items: center; // Center content vertically
`;

function AppNavbar() {
  const { isAuthenticated, user, logout } = useAuth0(); // Get user information from Auth0

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      className="bg-body-dark"
      data-bs-theme="dark"
      fixed="top"
      style={{ padding: '15px' }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/rocket.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          &nbsp; DataStruct
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard/aboutus">About us</Nav.Link>
            <Nav.Link href="/dashboard/contactus">Contact us</Nav.Link>
            <NavDropdown title="Main" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/dashboard/userfeedback">Notes</NavDropdown.Item>
              <NavDropdown.Item href="/dashboard/createvnt">Timeline</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <UserProfileDiv className="user-profile">
              {/* Show user image on larger screens (not mobile) */}
              <div className="d-none d-lg-block">
                {isAuthenticated ? (
                  <>
                    <UserAvatar
                      src={user.picture}
                      alt={user.nickname}
                    />
                  </>
                ) : null}
              </div>
              {isAuthenticated ? (
                <>
                  {/* Show the user dropdown */}
                  <NavDropdown
                    title={user.nickname}
                    id="collapsible-nav-dropdown"
                  >
                    <NavDropdown.Item href='/dashboard/userprofile'>
                      <FaUser style={{ marginRight: '10px' }} /> Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={(e) => logout()}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                // Show login for mobile
                <NavDropdown.Item>Login</NavDropdown.Item>
              )}
            </UserProfileDiv>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default AppNavbar;

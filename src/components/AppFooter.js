import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';

// Define a styled component for the footer
const StyledFooter = styled(Navbar)`
  background-color: #333;
  color: #fff;
  padding: 30px;
  position: fixed;
  bottom: 0;
  width: 100%;
  transition: bottom 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    .company-info {
      margin-bottom: 10px;
    }
  }
`;

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter bg="dark" variant="dark" fixed="bottom" >
      <Container>
        <div className="company-info">
          <Navbar.Text className="d-md-none">
            &copy; {currentYear} &nbsp;
            Event Stash {" "}<img
              alt=""
              src="/rocket.png"
              width="15"
              height="15"
              className="d-inline-block align-center"
            />{' '}
          </Navbar.Text>
          <Navbar.Text className="d-none d-md-inline">
            &copy; {currentYear} &nbsp;
            DataStruct{" "}
            <img
              alt=""
              src="/rocket.png"
              width="15"
              height="15"
              className="d-inline-block align-center"
            />{' '}
          </Navbar.Text>
        </div>
        <div className="social-icons">
          {/* Add your social media icons with links here */}
          <a style={{
            color:'white'
          }} href="https://www.facebook.com">
            <FaFacebook className="mx-2" />
          </a>
          <a style={{
            color:'white'
          }}href="https://www.twitter.com">
            <FaTwitter className="mx-2" />
          </a>
          <a style={{
            color:'white'
          }}href="https://www.instagram.com">
            <FaInstagram className="mx-2" />
          </a>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

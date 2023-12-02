import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

// Define a styled component with your CSS styles
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Set the height to 100% of the viewport height to center vertically */
`;

function SpinnerLoading() {
  return (
    <SpinnerContainer>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </SpinnerContainer>
  );
}

export default SpinnerLoading;

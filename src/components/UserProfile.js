import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from "./LogoutButton";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '15vh',
      }}>
        <img
          src={user.picture}
          alt={user.name}
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
          }}
        />
        <h2 style={{ margin: '1rem 0' }}>{user.name}</h2>
        <p style={{ margin: '0' }}>{user.email}</p>
        <LogoutButton />
      </div>
    )
  );
};

export default UserProfile;

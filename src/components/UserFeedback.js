// UserFeedback.js
import React, { useState } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const UserFeedback = () => {
  // State for storing comments
  const [comments, setComments] = useState([]);

  // Function to add a new comment
  const addComment = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Short Notes</h1>
      <CommentList comments={comments} />
      <CommentForm onAddComment={addComment} />
    </div>
  );
};

// Styles object for easy customization
const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#333',
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '20px',
  },
};

export default UserFeedback;

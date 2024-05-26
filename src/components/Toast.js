import React from 'react';
import './Toast.css';

const Toast = ({ message, onClose }) => {
  return (
    <div className="toast">
      {message}
      <div className="toast-timer" />
    </div>
  );
};

export default Toast;
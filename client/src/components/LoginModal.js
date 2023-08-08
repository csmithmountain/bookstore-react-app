import React from "react";
import LoginForm from "./LoginForm";

const LoginModal = ({ onClose }) => {
  return (
    <div>
      <LoginForm onSuccess={onClose} />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default LoginModal;

import { useState } from "react";
import LoginForm from "./LoginForm";

const LoginModal = ({ onClose }) => {
  return (
    <div>
      <LoginForm onSuccess={onClose} />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginButtonClick = () => setShowLoginModal(true);

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <nav>
      <h1>Bookster</h1>
      <p>The Amazing Bookstore</p>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>
          <button onClick={handleLoginButtonClick}>Login</button>
        </li>
      </ul>
      {showLoginModal && (
        <div>
          <LoginModal onClose={handleCloseLoginModal} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;

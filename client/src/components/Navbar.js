import React, { useState } from "react";
import LoginModal from "./LoginModal";

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
        <li>Books</li>
        <li>Profile</li>
      </ul>

      <button onClick={handleLoginButtonClick}>Login</button>

      {showLoginModal && (
        <div>
          <LoginModal onClose={handleCloseLoginModal} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;

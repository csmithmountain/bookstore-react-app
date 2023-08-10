import React, { useState } from "react";
import LoginModal from "./LoginModal";
import { getAccessToken, removeAccessToken } from "../Utils/tokenUtils";

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getAccessToken());
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginButtonClick = () => setShowLoginModal(true);

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleSignOut = () => {
    removeAccessToken();
    setIsAuthenticated(false);
    console.log("Signed out");
  };

  return (
    <nav>
      <h1>Bookster</h1>
      <p>The Amazing Bookstore</p>

      {isAuthenticated ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <button onClick={handleLoginButtonClick}>Login</button>
      )}

      {showLoginModal && (
        <div>
          <LoginModal onClose={handleCloseLoginModal} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;

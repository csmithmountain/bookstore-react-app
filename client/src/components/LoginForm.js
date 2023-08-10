import React, { useState } from "react";
import { storeAccessToken } from "../Utils/tokenUtils";

const LoginForm = ({ onSuccess }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleToggleMode = () => {
    setIsRegistering((prevIsRegistering) => !prevIsRegistering);
    setError("");
    setLoginSuccess(false);
    resetForm();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const endpoint = isRegistering ? "register" : "login";
      const response = await fetch(`http://localhost:3001/auth/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        setError(
          isRegistering ? "User already exists" : "Invalid username or password"
        );
        setLoginSuccess(false);
        return;
      }

      const data = await response.json();
      const token = data.accessToken;

      // Store the token in localStorage
      storeAccessToken(token);

      // Set the login success message and clear the error message
      setLoginSuccess(true);
      setError("");

      // Call the onSuccess callback when the login is successful
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      setLoginSuccess(false);
    }
  };

  const resetForm = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>{isRegistering ? "Sign up" : "Sign in"}</h2>
      {error && <p>{error}</p>}
      {loginSuccess && <p>Login Successful!</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit">{isRegistering ? "Register" : "Login"}</button>
      </form>
      <button onClick={handleToggleMode}>
        {isRegistering ? "Login" : "Register"}
      </button>
    </div>
  );
};

export default LoginForm;

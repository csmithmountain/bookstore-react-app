// Function to store an access token in local storage
export const storeAccessToken = (token) => {
  localStorage.setItem("accessToken", token);
};

// Function to retrieve the access token from local storage
export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

// Function to remove the access token from local storage
export const removeAccessToken = () => {
  localStorage.removeItem("accessToken");
};

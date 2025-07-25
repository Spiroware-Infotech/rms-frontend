// api/auth.js

import { loginAPI } from "../constant";

export const loginUser = async ({ username, password }) => {
  const response = await fetch(`${loginAPI}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Login failed");
  }
  console.log("loginresponse", response);

  return response.json();
};
export const saveAuth = (accessToken, tokenType) => {
  const storage = localStorage;
  storage.setItem("token", accessToken);
  storage.setItem("tokenType", tokenType);
};

export const logout = (setIsUserRegistered) => {
  localStorage.removeItem("token");
  localStorage.removeItem("tokenType");
  localStorage.removeItem("isUserRegistered");

  if (typeof setIsUserRegistered === "function") {
    setIsUserRegistered(false); // Update context for reactive UI
  }
};

export const getToken = () => {
  return localStorage.getItem("token") || sessionStorage.getItem("token");
};

export const getTokenType = () => {
  return (
    localStorage.getItem("tokenType") || sessionStorage.getItem("tokenType")
  );
};

export const isAuthenticated = () => !!getToken();

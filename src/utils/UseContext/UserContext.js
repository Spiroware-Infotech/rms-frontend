import React, { createContext, useState } from 'react';

export const UserContext = createContext({
  isUserRegistered: false,
  setIsUserRegistered: () => {},
  userRole: null,
  setUserRole: () => {},
});

export const UserProvider = ({ children }) => {
  const [isUserRegistered, setIsUserRegistered] = useState(
    localStorage.getItem("isUserRegistered") === "true"
  );

  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || null);

  return (
    <UserContext.Provider
      value={{ isUserRegistered, setIsUserRegistered, userRole, setUserRole }}
    >
      {children}
    </UserContext.Provider>
  );
};

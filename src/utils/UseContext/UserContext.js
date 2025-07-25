import React, { createContext, useState } from 'react';

export const UserContext = createContext({
  isUserRegistered: false,
  setIsUserRegistered: () => {},
  userRole: null,
  setUserRole: () => {},
  userId: null,
  setUserId: () =>  {},
});

export const UserProvider = ({ children }) => {
  const [isUserRegistered, setIsUserRegistered] = useState(
    localStorage.getItem("isUserRegistered") === "true"
  );
 
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);

  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || null);

  return (
    <><UserContext.Provider
      value={{ isUserRegistered, setIsUserRegistered, userRole, setUserRole }}
    >
      {children}
    </UserContext.Provider><UserContext.Provider value={{ userId, setUserId, userRole, setUserRole }}>
      </UserContext.Provider></>
  );
};

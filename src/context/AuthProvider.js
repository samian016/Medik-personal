import React, { createContext } from "react";
import useFirebase from "../utilities/useFirebase/useFirebase";
export const AuthContext = createContext();
/* auth provider component */
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

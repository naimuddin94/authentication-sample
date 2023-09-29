import PropTypes from "prop-types";
import { createContext } from "react";

export const UserContext = createContext(null);

const AuthProvider = ({ children }) => {
  const userInfo = {
    name: "John",
    age: "16",
  };
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;

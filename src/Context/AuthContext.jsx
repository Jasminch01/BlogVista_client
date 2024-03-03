import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Config/firebase.config";

export const AuthProvider = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthContext = ({ children }) => {
  const [loading, setLoading] = useState("");

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const authValue = {
    signInGoogle,
    loading,
    setLoading,
  };

  return (
    <AuthProvider.Provider value={authValue}>{children}</AuthProvider.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;

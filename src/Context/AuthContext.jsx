import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Config/firebase.config";

export const AuthProvider = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthContext = ({ children }) => {
  const [loading, setLoading] = useState("");
  const [user, setUser] = useState({})

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUser= (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUserProfile = (createdUser, name, photoURL) => {
    return updateProfile(createdUser, {
      displayName: name,
      photoURL: photoURL
        ? photoURL
        : "https://example.com/jane-q-user/profile.jpg",
    });
  };

  useEffect(() => {
    const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubsCribe();
    };
  }, [user]);

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  const logInWithEmaillPass = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const authValue = {
    signInGoogle,
    loading,
    setLoading,
    createUser,
    updateUserProfile,
    user,
    logOut,
    logInWithEmaillPass
  };

 

  return (
    <AuthProvider.Provider value={authValue}>{children}</AuthProvider.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;

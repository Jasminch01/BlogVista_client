import { useContext } from "react";
import { AuthProvider } from "../Context/AuthContext";

const UseAuth = () => {
  const auth = useContext(AuthProvider);
  return auth;
};

export default UseAuth;

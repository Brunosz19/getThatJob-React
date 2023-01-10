import { createContext, useContext, useEffect, useState } from "react";
import { createUser, getUser } from "../services/user-service";
import * as auth from "../services/auth-services";

const AuthContext = createContext();

function AuthProvider(props) {
  const [quantityData, setQuantityData] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(setUser).catch(console.log);
  }, []);

  function login(credentials, type) {
    auth.login(credentials, type).then(setUser).catch(console.log);
  }

  function logout(type) {
    auth.logout(type).then(() => setUser(null));
  }

  function signup(userData) {
    createUser(userData).then(setUser).catch(console.log);
  }

  const value = {
    user,
    login,
    logout,
    signup,
    quantityData,
    setQuantityData
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };

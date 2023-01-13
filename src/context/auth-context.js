import { createContext, useContext, useEffect, useState } from "react";
import { createUser, getUser } from "../services/professional-service";
import * as auth from "../services/auth-services";

const AuthContext = createContext();

function AuthProvider(props) {
  const [quantityData, setQuantityData] = useState([]);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState("landing");

  useEffect(() => {
   getUser("professional").then(setUser).catch(console.log);
  }, []);

  function login(credentials, type) {
    auth.login(credentials, type).then(setUser).catch(console.log);
  }

  function logout() {
    auth.logout().then(() => setUser(null));
  }

  function signup(userData, type) {
   createUser(userData, type).then(setUser).catch(console.log);
  }

  function ChangeLandingPage(type){
    setShowLogin(type)
  }

  const value = {
    user,
    showLogin,
    quantityData,
    login,
    logout,
    signup,
    setQuantityData,
    ChangeLandingPage,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };

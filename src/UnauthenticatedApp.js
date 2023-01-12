import styled from "@emotion/styled";
import { useState } from "react";

import Header from "./components/header";
import LandingPage from "./pages/landing-page";
import { useAuth } from "./context/auth-context";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";

function UnauthenticatedApp() {
  const { showLogin } = useAuth();

  return (
    <>
      <Header />
      { showLogin === "landing" && (
        <LandingPage />
      )}
      { showLogin === "login" && (
        <LoginPage />
      )}
      { showLogin === "signup" && (
        <SignUpPage />
      )}
    </>
  );
}

{
  /* {showLogin === "professional" ? <LoginProfessional /> : <LoginRecruiter />} */
}
export default UnauthenticatedApp;

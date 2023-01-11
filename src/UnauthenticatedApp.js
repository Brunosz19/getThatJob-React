import styled from "@emotion/styled";
import { useState } from "react";

import LoginForm from "./components/login-form";
import SignUpForm from "./components/signUp-form";
import Header from "./components/header";
import LandingPage from "./pages/landing-page";
import { useAuth } from "./context/auth-context";

function UnauthenticatedApp() {
  const { showLogin } = useAuth();

  return (
    <>
      <Header />
      { showLogin === "landing" && (
        <LandingPage />
      )}
      { showLogin === "login" && (
        <LoginForm />
      )}
      { showLogin === "signup" && (
        <SignUpForm />
      )}
    </>
  );
}

{
  /* {showLogin === "professional" ? <LoginProfessional /> : <LoginRecruiter />} */
}
export default UnauthenticatedApp;

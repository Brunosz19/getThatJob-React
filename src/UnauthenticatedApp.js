import styled from "@emotion/styled";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import JobDetails from "./pages/job-details-page";
import Header from "./components/header";
import LandingPage from "./pages/landing-page";
import { useAuth } from "./context/auth-context";
import LoginPage from "./pages/login-page";
import SignUpForm from "./components/signUp-form"
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
        <SignUpForm />
      )}
    </>
  );
}

{
  /* {showLogin === "professional" ? <LoginProfessional /> : <LoginRecruiter />} */
}
export default UnauthenticatedApp;

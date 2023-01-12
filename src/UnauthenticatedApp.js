import styled from "@emotion/styled";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import JobDetails from "./pages/job-details-page";
import Header from "./components/header";
import LandingPage from "./pages/landing-page";
import { useAuth } from "./context/auth-context";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";
import ApplicationJob from "./pages/application-job-page";

function UnauthenticatedApp() {
  const { showLogin } = useAuth();

  return (
    <>
      <Routes>
      <Route path="/jobapp" element={<ApplicationJob />} />
      </Routes>
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

import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import LandingPage from "./pages/landing-page";
import LoginPage from "./pages/login-page";
import SignUpForm from "./components/signUp-form"

function UnauthenticatedApp() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default UnauthenticatedApp;

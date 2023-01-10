import styled from "@emotion/styled";
import { useState } from "react";

import LoginForm from "./components/login-form";
import SignUpForm from "./components/signUp-form";

function UnauthenticatedApp() {
  const [showLogin, setShowLogin] = useState("professional");

  function handleLinkChange(event) {
    event.preventDefault();
    event.target.innerText !== showLogin
      ? setShowLogin(event.target.innerText)
      : setShowLogin(showLogin);
  }

  function LoginProfessional(){
    return(
      <>
        {showLogin === "professional" ? <LoginForm /> : <SignUpForm />}
      </>
    )
  }

  function LoginRecruiter(){
    return(
      <>
        {showLogin === "professional" ? <LoginForm /> : <SignUpForm />}
      </>
    )
  }

  return (
    <>
      <div>
        {showLogin === "professional" ? <LoginProfessional /> : <LoginRecruiter />}
      </div>
    </>
  );
}

export default UnauthenticatedApp;

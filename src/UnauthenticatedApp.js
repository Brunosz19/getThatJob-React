import styled from "@emotion/styled";
import { useState } from "react";

import LoginForm from "./components/login-form";
import SignUpForm from "./components/signUp-form";

function UnauthenticatedApp() {
  const [showLogin, setShowLogin] = useState("login");

  function handleLinkChange(event) {
    event.preventDefault();
    event.target.innerText !== showLogin
      ? setShowLogin(event.target.innerText)
      : setShowLogin(showLogin);
  }

  return (
    <Container>
      <div>
        {showLogin === "login" ? <LoginForm /> : <SignUpForm />}
      </div>
    </Container>
  );
}

export default UnauthenticatedApp;

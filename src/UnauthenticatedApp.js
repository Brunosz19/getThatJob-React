import styled from "@emotion/styled";
import { useState } from "react";

import LoginForm from "./components/login-form";
import SignUpForm from "./components/signUp-form";
import Logo from "./styles/img/gtj-logo 1.svg";
import Group from "./styles/img/groupImg.svg";
import magnifyingGlass from "./styles/img/lopa.svg";


function UnauthenticatedApp() {
  const [showLogin, setShowLogin] = useState("professional");

  function handleLinkChange(event) {
    event.preventDefault();
    event.target.innerText !== showLogin
      ? setShowLogin(event.target.innerText)
      : setShowLogin(showLogin);
  }

  function LoginProfessional() {
    return <>{showLogin === "professional" ? <LoginForm /> : <SignUpForm />}</>;
  }

  function LoginRecruiter() {
    return <>{showLogin === "professional" ? <LoginForm /> : <SignUpForm />}</>;
  }

  function Header() {
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img src={Logo} alt="Page Logo" />
        <div>
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </div>
    );
  }

  function LandingPage() {
    return (
      <section style={{ background: "#E1E2E1" }}>
        <section style={{ textAlign: "center" }}>
          <h1>The place where you get that job</h1>
          <p>
            With our Machine Learning algorithm you will get{" "}
            <span style={{ color: "#F48FB1" }}>that</span> job in no time. We
            promise you! Just give us the money and we will take care of it.
          </p>
          <button>create an account now</button>
          <img src={Group} alt="group of people" />
        </section>
        <section style={{ display: "flex" }}>
          <div>
            <h2>Find your next job</h2>
            <p>
              Our Machine learning algorithm is so good that it’s even illegal
              in some countries. Join us to use our barelly legal algorithm that
              is actually a group of interns that work on our basement. We have
              a job for you, no matter your background or previous experience.
              Is sending random memes through chat your only skill? That’s ok,
              we got you, our Rock Star Meme Curator role is here for you.
            </p>
          </div>
          <img src={magnifyingGlass} alt="magnifying glass" />
        </section>
        <section></section>
      </section>
    );
  }
  return (
    <>
      <div>
        <Header />
        <LandingPage />
      </div>
    </>
  );
}

{
  /* {showLogin === "professional" ? <LoginProfessional /> : <LoginRecruiter />} */
}
export default UnauthenticatedApp;

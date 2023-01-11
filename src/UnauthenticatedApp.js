import styled from "@emotion/styled";
import { useState } from "react";

import LoginForm from "./components/login-form";
import SignUpForm from "./components/signUp-form";
import Logo from "./styles/img/gtj-logo 1.svg";
import Group from "./styles/img/groupImg.svg";
import Person_4 from "./styles/img/persona-4.svg";
import Person_2 from "./styles/img/persona-2.svg";
import Person_3 from "./styles/img/persona-3.svg";
import magnifyingGlass from "./styles/img/lopa.svg";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

const Button = styled("button")`
  width: 129px;
  height: 40px;
  border-radius: 16px;
  border: 1px solid  #F48FB1;
`;

const Text = styled("p")`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;

const Title = styled("h1")`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 61px;
  line-height: 74px;
  text-align: center;
  letter-spacing: -0.5px;
  width: 504px;
  margin-bottom: 32px;
`;

const PinkButton = styled("button")`
  width: 264px;
  height: 56px;
  border-radius: 16px;
  background-color: #F48FB1;
  color: white;
  border: none;
  margin-bottom: 45px;
`;

const SubTitle = styled("h2")`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 59px;
  width: 640px;
  padding-top: 64px;
  margin-bottom: 24px;
`;

const ProgrammersProfile = styled("div")`
  width: 240px;
  display: flex;
  flex-direction: column; 
  align-items: center;
  gap: 10px;
`;

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
      <div style={{ display: "flex", justifyContent: "space-around", height: "64px", alignItems:"center",}}>
        <img src={Logo} alt="Page Logo" style={{width: "126px", height:"40px",}}/>
        <div style={{ display: "flex", alignItems: "center",}}>
          <Button style={{ marginRight: "10px",}}>Sign Up</Button>
          <Button>Login</Button>
        </div>
      </div>
    );
  }

  function LandingPage() {
    return (
      <section style={{ background: "#E1E2E1", paddingTop: "32px",}}>
        <section style={{ textAlign: "center", alignItems: "center", display: "flex", flexDirection: "column", }}>
          <Title>The place where you get <span style={{ color: "#F48FB1" }}>that</span> job</Title>
          <Text style={{width: "720px", marginBottom: "32px",}}>
            With our Machine Learning algorithm you will get{" "}
            that job in no time. We
            promise you! Just give us the money and we will take care of it.
          </Text>
          <PinkButton>create an account now</PinkButton>
          <img src={Group} alt="group of people" style={{marginBottom: "60px",}}/>
        </section>
        <section style={{ display: "flex"}}>
          <div style={{  display: "flex", flexDirection: "column",width: "60vw", color: "white", backgroundColor: "#BF5F82", justifyContent: "center", alignItems: "center",}}>
            <SubTitle>Find your next job</SubTitle>
            <Text style={{textAlign: "justify", width: "640px", paddingBottom: "64px",}}>
              Our Machine learning algorithm is so good that it’s even illegal
              in some countries. Join us to use our barelly legal algorithm that
              is actually a group of interns that work on our basement. We have
              a job for you, no matter your background or previous experience.
              Is sending random memes through chat your only skill? That’s ok,
              we got you, our Rock Star Meme Curator role is here for you.
            </Text>
          </div>
          <div style={{width: "40vw", display: "flex", alignItems: "center", justifyContent: "center",}}>
            <img src={magnifyingGlass} alt="magnifying glass" style={{width: "335px",}}/>
          </div>
        </section>
        <section style={{width: "100vw", display: "flex", flexDirection: "column", alignItems: "center",}}>
          <SubTitle style={{color: "#F48FB1", textAlign: "center"}}>
            Meet the team
          </SubTitle>
          <div style={{width: "780px", display: "grid", gridTemplateColumns: "repeat(3, 240px)", gap: "20px", }}>
            <ProgrammersProfile>
              <img src={Person_4} alt="person 4" style={{width: "180px", height: "180px",}}/>
              <Text>Bruno Sáenz</Text>
              <div style={{display: "flex", width: "100px", justifyContent: "space-between",}}>
                <AiFillGithub style={{width: "20px",}}/>
                <AiOutlineLinkedin style={{width: "20px",}}/>
              </div>
            </ProgrammersProfile>
            <ProgrammersProfile>
              <img src={Person_2} alt="person 2"/>
              <Text>Diego Miñano</Text>
              <div style={{display: "flex", width: "100px", justifyContent: "space-between",}}>
                <AiFillGithub style={{width: "20px",}}/>
                <AiOutlineLinkedin style={{width: "20px",}}/>
              </div>
            </ProgrammersProfile>
            <ProgrammersProfile>
              <img src={Person_3} alt="person 3"/>
              <Text>Carlos Mendoza</Text>
              <div style={{display: "flex", width: "100px", justifyContent: "space-between",}}>
                <AiFillGithub style={{width: "20px",}}/>
                <AiOutlineLinkedin style={{width: "20px",}}/>
              </div>
            </ProgrammersProfile>
          </div>
        </section>
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

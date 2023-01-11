import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import styled from "@emotion/styled";

import Group from "../styles/img/groupImg.svg";
import Person_4 from "../styles/img/persona-4.svg";
import Person_2 from "../styles/img/persona-2.svg";
import Person_3 from "../styles/img/persona-3.svg";
import magnifyingGlass from "../styles/img/lopa.svg";

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

export default function LandingPage() {

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
          <div style={{width: "40vw", display: "flex", alignItems: "center", justifyContent: "center", background: "white"}}>
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
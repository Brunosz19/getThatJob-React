import {
  AiFillGithub,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import Group from "../styles/img/groupImg.svg";
import Person_4 from "../styles/img/io.jpg";
import Person_3 from "../styles/img/persona-2.svg";
import magnifyingGlass from "../styles/img/lopa.svg";
import { DiRuby } from "react-icons/di";

const Text = styled("p")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;

const Title = styled("h1")`
  font-family: "Montserrat";
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
  background-color: #f48fb1;
  color: white;
  border: none;
  margin-bottom: 45px;
`;

const SubTitle = styled("h2")`
  font-family: "Montserrat";
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

const FooterText = styled("p")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #373737;
`;

export default function LandingPage() {
  const navigate = useNavigate();

  function SignUpPageLink() {
    navigate("/signup");
  }

  return (
    <section style={{ background: "#E1E2E1", paddingTop: "32px" }}>
      <section
        style={{
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Title>
          The place where you get <span style={{ color: "#F48FB1" }}>that</span>{" "}
          job
        </Title>
        <Text style={{ width: "720px", marginBottom: "32px" }}>
          With our Machine Learning algorithm you will get that job in no time.
          We promise you! Just give us the money and we will take care of it.
        </Text>
        <PinkButton style={{ cursor: "pointer" }} onClick={SignUpPageLink}>
          create an account now
        </PinkButton>
        <img
          src={Group}
          alt="group of people"
          style={{ marginBottom: "60px" }}
        />
      </section>
      <section style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60vw",
            color: "white",
            backgroundColor: "#BF5F82",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SubTitle>Find your next job</SubTitle>
          <Text
            style={{
              textAlign: "justify",
              width: "640px",
              paddingBottom: "64px",
            }}
          >
            Our Machine learning algorithm is so good that it’s even illegal in
            some countries. Join us to use our barelly legal algorithm that is
            actually a group of interns that work on our basement. We have a job
            for you, no matter your background or previous experience. Is
            sending random memes through chat your only skill? That’s ok, we got
            you, our Rock Star Meme Curator role is here for you.
          </Text>
        </div>
        <div
          style={{
            width: "40vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
          }}
        >
          <img
            src={magnifyingGlass}
            alt="magnifying glass"
            style={{ width: "335px" }}
          />
        </div>
      </section>
      <section
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SubTitle style={{ color: "#F48FB1", textAlign: "center" }}>
          Meet the team
        </SubTitle>
        <div
          style={{
            width: "780px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 240px)",
            gap: "20px",
          }}
        >
          <ProgrammersProfile>
            <img
              src={Person_4}
              alt="person 4"
              style={{ width: "180px", height: "180px", borderRadius: "50%" }}
            />
            <Text>Bruno Sáenz</Text>
            <div
              style={{
                display: "flex",
                width: "100px",
                justifyContent: "space-between",
              }}
            >
              <a
                href="https://github.com/Brunosz19"
                target="_blank" rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <AiFillGithub style={{ width: "25px", height: "25px" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/brunosz19/"
                target="_blank" rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <AiOutlineLinkedin style={{ width: "25px", height: "25px" }} />
              </a>
            </div>
          </ProgrammersProfile>

          <ProgrammersProfile>
            <img
              src="https://ca.slack-edge.com/TEH2PTB37-U03S36U854J-168673a03990-512"
              alt="person 2"
              style={{ width: "180px", height: "180px", borderRadius: "50%" }}
            />
            <Text>Diego Miñano</Text>
            <div
              style={{
                display: "flex",
                width: "100px",
                justifyContent: "space-between",
              }}
            >
              <a
                href="https://github.com/minanodiego"
                style={{ textDecoration: "none", color: "inherit" }}
                target="_blank" rel="noopener noreferrer"
              >
                <AiFillGithub style={{ width: "25px", height: "25px" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/minanodiego/"
                style={{ textDecoration: "none", color: "inherit" }}
                target="_blank" rel="noopener noreferrer"
              >
                <AiOutlineLinkedin style={{ width: "25px", height: "25px" }} />
              </a>
            </div>
          </ProgrammersProfile>

          <ProgrammersProfile>
            <img src={Person_3} alt="person 3" />
            <Text>Carlos Mendoza</Text>
            <div
              style={{
                display: "flex",
                width: "100px",
                justifyContent: "space-between",
              }}
            >
              <a
                href="https://github.com/TyrUmbra"
                style={{ textDecoration: "none", color: "inherit" }}
                target="_blank" rel="noopener noreferrer"
              >
                <AiFillGithub style={{ width: "25px", height: "25px" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/carlosaamm/"
                style={{ textDecoration: "none", color: "inherit" }}
                target="_blank" rel="noopener noreferrer"
              >
                <AiOutlineLinkedin style={{ width: "25px", height: "25px" }} />
              </a>
            </div>
          </ProgrammersProfile>
        </div>
      </section>
      <footer
        style={{
          display: "flex",
          borderTop: "1px solid #BF5F82",
          maxWidth: "900px",
          margin: "74px auto 0 auto",
          padding: "16px 0 16px 0",
          justifyContent: "space-around"
        }}
      >
        <div>© 2023 - Get That Job</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FooterText>Source Code</FooterText>
          <FooterText
            style={{
              display: "flex",
              alignItems: "center",
              gap: "17px",
            }}
          >
            <DiRuby /> Ruby on Rails <AiOutlineGithub /> REST API
          </FooterText>
        </div>
        <div>
          <FooterText>Codeable - Cohort 8 Final Project</FooterText>
        </div>
      </footer>
    </section>
  );
}

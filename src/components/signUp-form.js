import styled from "@emotion/styled";
import { Formik } from "formik";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import { Title, ContainerSignUp, Container, StatusText, InformationText, NumberFinished, NumberDisable, NumberChoosen } from "./utils"
import { Input, StyledForm, StyledButton } from "./input";
import Girl from "../styles/img/girlSignUp.svg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SignUpProfessional from "./signUpProfessional";
import SignUpRecruiter from "./signUpRecruiter";

function SignUpForm() {
  const [formType, setFormType] = useState("professional");

  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Title>Good choice!</Title>

        {formType === "professional" ? (
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginLeft: "42px",
              cursor: "pointer",
            }}
          >
            <div
              style={{ borderBottom: "3px solid #F48FB1" }}
              onClick={() => setFormType("professional")}
            >
              PROFESSIONAL
            </div>
            <div
              style={{ borderBottom: "3px solid #BDBDBD", color: "#8E8E8E" }}
              onClick={() => setFormType("recruiter")}
            >
              RECRUITER
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginLeft: "42px",
              cursor: "pointer",
            }}
          >
            <div
              style={{ borderBottom: "3px solid #BDBDBD", color: "#8E8E8E" }}
              onClick={() => setFormType("professional")}
            >
              PROFESSIONAL
            </div>
            <div
              style={{ borderBottom: "3px solid #F48FB1" }}
              onClick={() => setFormType("recruiter")}
            >
              RECRUITER
            </div>
          </div>
        )}
      </div>

      {formType === "professional" ? (
        <SignUpProfessional />
      ) : (
        <SignUpRecruiter />
      )}
    </Container>
  );
}

export default SignUpForm;

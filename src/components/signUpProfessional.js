import {
  ContainerSignUp,
  StatusText,
  InformationText,
  NumberFinished,
  NumberDisable,
  NumberChoosen,
} from "./utils";
import { Input, StyledForm, StyledButton } from "./input";
import { Field, Formik } from "formik";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useAuth } from "../context/auth-context";
import { useState } from "react";
import styled from "@emotion/styled";

const Note = styled("div")`
  width: 380px;
  height: 24px;
  margin: 32px 0 0px 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #616161;
`

const Advice = styled("div")`
  width: 153px;
  height: 16px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #8E8E8E;
`

function SignUpProfessional() {
  const { createUser } = useAuth();
  const [steps, setSteps] = useState(1);

  return (
    <>
      {steps === 1 ? (
        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <NumberChoosen>1</NumberChoosen>
            <div style={{ width: "120px", height: "60px" }}>
              <StatusText>in progress</StatusText>
              <InformationText>Login information</InformationText>
            </div>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <NumberDisable>2</NumberDisable>
            <div style={{ width: "120px", height: "60px" }}>
              <StatusText>pending</StatusText>
              <InformationText>Personal information</InformationText>
            </div>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <NumberDisable>3</NumberDisable>
            <div style={{ width: "120px", height: "60px" }}>
              <StatusText>pending</StatusText>
              <InformationText>Professional information</InformationText>
            </div>
          </div>
        </div>
      ) : steps === 2 ? (
        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <NumberFinished>1</NumberFinished>
            <div style={{ width: "120px", height: "60px" }}>
              <StatusText>Done!</StatusText>
              <InformationText>Login information</InformationText>
            </div>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <NumberChoosen>2</NumberChoosen>
            <div style={{ width: "120px", height: "60px" }}>
              <StatusText>in progress</StatusText>
              <InformationText>Personal information</InformationText>
            </div>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <NumberDisable>3</NumberDisable>
            <div style={{ width: "120px", height: "60px" }}>
              <StatusText>pending</StatusText>
              <InformationText>Professional information</InformationText>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <NumberFinished>1</NumberFinished>
            <div style={{ width: "120px", height: "60px" }}>
              <StatusText>Done!</StatusText>
              <InformationText>Login information</InformationText>
            </div>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <NumberFinished>2</NumberFinished>
            <div style={{ width: "120px", height: "60px" }}>
              <StatusText>Done!</StatusText>
              <InformationText>Personal information</InformationText>
            </div>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <NumberChoosen>3</NumberChoosen>
            <div style={{ width: "120px", height: "60px" }}>
              <StatusText>in progress</StatusText>
              <InformationText>Professional information</InformationText>
            </div>
          </div>
        </div>
      )}

      <ContainerSignUp>
        <Formik
          initialValues={{
            email: "",
            password: "",
            password_confirmation: "",
            name: "",
            phone: "",
            birthdate: "",
            link_url: "",
            title: "",
            experience: "",
            education: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length <= 6) {
              errors.password = "Invalid password";
            }
            return errors;
          }}
          onSubmit={(values) => {
            createUser(values);
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <StyledForm style={{ gap: "16px" }} onSubmit={handleSubmit}>
              <Note>You can complete this information later but we reccomend you to do it now</Note>
              {steps === 1 ? (
                <>
                  <Input
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="some_user@mail.com"
                    label="Email"
                  />
                  {errors.email && touched.email && errors.email}
                  <Input
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="******"
                    label="Password"
                  />
                  {errors.password && touched.password && errors.password}
                  <Input
                    name="password_confirmation"
                    type="password"
                    value={values.password_confirmation}
                    onChange={handleChange}
                    placeholder="******"
                    label="Password Confirmation"
                  />
                  {errors.password && touched.password && errors.password}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "16px",
                    }}
                  >
                    <StyledButton
                      style={{ background: "#F48FB1", color: "white" }}
                      onClick={() => setSteps(steps + 1)}
                    >
                      {" "}
                      next
                      <FiChevronRight />
                    </StyledButton>
                  </div>
                </>
              ) : steps === 2 ? (
                <>
                  <Input
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    label="name"
                  />
                  {errors.name && touched.name && errors.name}
                  <Input
                    name="phone"
                    type="number"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="+XXXXXXXXX"
                    label="phone"
                  />
                  <Advice>+[country code][number]</Advice>
                  {errors.phone && touched.phone && errors.phone}
                  <Input
                    name="birthday"
                    type="date"
                    value={values.birthday}
                    onChange={handleChange}
                    placeholder="Pick a date"
                    label="birthday"
                  />
                  {errors.birthday && touched.birthday && errors.birthday}
                  <Input
                    name="link_url"
                    type="link_url"
                    value={values.link_url}
                    onChange={handleChange}
                    placeholder="https://www.linkedin.com/in/username"
                    label="Linkedin URL"
                  />
                  {errors.link_url && touched.link_url && errors.link_url}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "16px",
                    }}
                  >
                    <StyledButton
                      style={{ background: "inherit" }}
                      onClick={() => setSteps(steps + 1)}
                    >
                      {" "}
                      skip this{" "}
                    </StyledButton>
                    <StyledButton
                      style={{ background: "#F48FB1", color: "white" }}
                      onClick={() => setSteps(steps + 1)}
                    >
                      {" "}
                      next <FiChevronRight />
                    </StyledButton>
                  </div>
                </>
              ) : (
                <>
                  <Input
                    name="title"
                    type="text"
                    value={values.title}
                    onChange={handleChange}
                    placeholder="Mechanical administrator..."
                    label="title"
                  />
                  {errors.title && touched.title && errors.title}
                  <Input
                    name="experience"
                    type="textarea"
                    value={values.experience}
                    onChange={handleChange}
                    placeholder="Worked 6 years in a bitcoin farm until I decided to change my life...."
                    label="Professional experience"
                    style={{ width: "600px", height: "76px" }}
                  />
                  {errors.experience && touched.experience && errors.experience}
                  <Input
                    name="education"
                    type="textarea"
                    value={values.education}
                    onChange={handleChange}
                    placeholder="Major in life experiences with a PHD in procrastination..."
                    label="Education"
                  />
                  {errors.education && touched.education && errors.education}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "16px",
                    }}
                  >
                    <StyledButton
                      style={{ background: "#F48FB1", color: "white" }}
                      onClick={() => setSteps(steps - 1)}
                    >
                      <FiChevronLeft />
                      previus
                    </StyledButton>
                    <StyledButton
                      style={{ background: "inherit" }}
                      type="submit"
                    >
                      {" "}
                      skip this!{" "}
                    </StyledButton>
                    <StyledButton
                      style={{ background: "#F48FB1", color: "white" }}
                      type="submit"
                    >
                      finish
                      <FiChevronRight />
                    </StyledButton>
                  </div>
                </>
              )}
            </StyledForm>
          )}
        </Formik>
      </ContainerSignUp>
    </>
  );
}

export default SignUpProfessional;

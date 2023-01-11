import styled from "@emotion/styled";
import { Formik } from "formik";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import { Input, StyledForm, StyledButton } from "./input";
import Girl from "../styles/img/girlSignUp.svg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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

const ContainerSignUp = styled("div")`
  display: flex;
  align-items: center;
  width: 1000px;
  padding: 0 50px;
  margin: auto;
`;

const Container = styled("div")`
  margin: auto;
  padding: 0 80px;
  background: #f5f5f6;
  height: 1000px;
`;

const StatusText = styled("h1")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const InformationText = styled("h1")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.5px;
  color: #373737;
`;

const NumberFinished = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  color: white;
  background: #616161;
  border-radius: 66.6667px;
`;

const NumberDisable = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  color: white;
  background: #e1e2e1;
  border-radius: 66.6667px;
`;

const NumberChoosen = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: #f48fb1;
  border-radius: 66.6667px;
`;

function SignUpForm() {
  const { createUser } = useAuth();
  const [steps, setSteps] = useState(1);
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

      {steps === 1 ? (
        <div style={{ display: "flex", gap: "16px", margin: "32px 42px" }}>
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
        <div style={{ display: "flex", gap: "16px", margin: "32px 42px" }}>
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
        <div style={{ display: "flex", gap: "16px", margin: "32px 42px" }}>
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

      {formType === "professional" ? (
        <ContainerSignUp>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              alignItems: "center",
            }}
          >
            <Formik
              initialValues={{
                email: "",
                password: "",
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
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                /* and other goodies */
              }) => (
                <StyledForm
                  style={{ gap: "60px", padding: "48px 50px" }}
                  onSubmit={handleSubmit}
                >
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
                        name="password"
                        type="password"
                        value={values.password}
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
                        type="text"
                        value={values.experience}
                        onChange={handleChange}
                        placeholder="Worked 6 years in a bitcoin farm until I decided to change my life...."
                        label="Professional experience"
                      />
                      {errors.experience &&
                        touched.experience &&
                        errors.experience}
                      <Input
                        name="education"
                        type="text"
                        value={values.education}
                        onChange={handleChange}
                        placeholder="Major in life experiences with a PHD in procrastination..."
                        label="Education"
                      />
                      {errors.education &&
                        touched.education &&
                        errors.education}
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
                          onClick={() => setSteps(steps + 1)}
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
          </section>
          <section
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              width: "50%",
            }}
          >
            <img src={Girl} alt="Girl" height={"50%"} />
          </section>
        </ContainerSignUp>
      ) : (
        <h1>hola</h1>
      )}
    </Container>
  );
}

export default SignUpForm;

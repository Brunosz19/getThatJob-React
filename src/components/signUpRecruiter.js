import {
  ContainerSignUp,
  StatusText,
  InformationText,
  NumberFinished,
  NumberDisable,
  NumberChoosen,
} from "./utils";
import { Input, StyledForm, StyledButton } from "./input";
import { Formik } from "formik";
import { FiChevronRight } from "react-icons/fi";
import { useAuth } from "../context/auth-context";
import { useState } from "react";

function SignUpRecruiter() {
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
            <NumberChoosen>2</NumberChoosen>
            <div style={{ width: "120px", height: "60px" }}>
              <StatusText>in progress</StatusText>
              <InformationText>Company information</InformationText>
            </div>
          </div>
        </div>
      )}

      <ContainerSignUp>
        <Formik
          initialValues={{
            company: "",
            email: "",
            password: "",
            password_confirmation: "",
            company_url: "",
            about: "",
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
            handleSubmit,
            /* and other goodies */
          }) => (
            <StyledForm
              style={{ gap: "16px" }}
              onSubmit={handleSubmit}
            >
              {steps === 1 ? (
                <>
                  <Input
                    name="company"
                    type="text"
                    value={values.company}
                    onChange={handleChange}
                    placeholder="My Company S.A"
                    label="Company name"
                  />
                  {errors.company && touched.company && errors.company}
                  <Input
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="some.company@email.com"
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
              ) : (
                <>
                  <Input
                    name="company_url"
                    type="text"
                    value={values.company_url}
                    onChange={handleChange}
                    placeholder="https://www.mycompany.sa"
                    label="Company Website"
                  />
                  {errors.name && touched.name && errors.name}
                  <Input
                    name="about"
                    type="text"
                    value={values.about}
                    onChange={handleChange}
                    placeholder="+XXXXXXXXX"
                    label="My Company SA has the vision to change thw way how..."
                  />
                  {errors.phone && touched.phone && errors.phone}
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
              )}
            </StyledForm>
          )}
        </Formik>
      </ContainerSignUp>
    </>
  );
}

export default SignUpRecruiter;

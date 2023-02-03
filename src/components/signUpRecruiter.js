import {
  ContainerSignUp,
  StatusText,
  InformationText,
  NumberFinished,
  NumberDisable,
  NumberChoosen,
  Note,
  Advice,
  StyledFileButton,
} from "./utils";
import { Input, StyledForm, StyledButton } from "./input";
import { Formik } from "formik";
import { FiChevronRight } from "react-icons/fi";
import { useAuth } from "../context/auth-context";
import { useState } from "react";
import { RiUploadLine } from "react-icons/ri";

function SignUpRecruiter() {
  const [file, setFile] = useState();

  function handleChangeFile(values, type) {
    const formData = new FormData();
    if (file) {
      formData.append("logo", file);
    }
    formData.append("company", values.company);
    formData.append("email", values.email);
    formData.append("company_url", values.company_url);
    formData.append("about", values.about);
    formData.append("password", values.password);
    formData.append("password_confirmation", values.password_confirmation);

    signup(formData, type);
  }
  const { signup, signUpError } = useAuth();
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

            if (!values.company) {
              errors.company = "Required";
            }

            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length <= 5) {
              errors.password = "Password must have more than 5 characters";
            } else if (values.password.length > 15) {
              errors.password = "Password must have less than 15 characters";
            }

            if (!values.password_confirmation) {
              errors.password_confirmation = "Required";
            } else if (values.password_confirmation.length <= 5) {
              errors.password_confirmation = "Invalid password";
            } else if (values.password !== values.password_confirmation) {
              errors.password_confirmation = "Password do not match";
            }

            return errors;
          }}
          onSubmit={(values) => {
            setSteps(1);

            handleChangeFile(values, "recruiters");
          }}
        >
          {({
            handleBlur,
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            /* and other goodies */
          }) => (
            <StyledForm style={{ gap: "16px" }} onSubmit={handleSubmit}>
              {steps !== 1 && (
                <Note>
                  You can complete this information later but we recommend you
                  to do it now
                </Note>
              )}

              {signUpError ? (
                <Note
                  style={{
                    color: "#BF5F82",
                    margin: "25px 0 0 0",
                    height: "auto",
                    fontWeight: "400",
                    fontSize: "18px",
                    width: "auto"
                  }}
                >
                  {signUpError?.message + ", try again"}
                </Note>
              ) : null}

              {steps === 1 ? (
                <>
                  <Input
                    name="company"
                    type="text"
                    value={values.company}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="My Company S.A"
                    label="Company name"
                  />
                  <span style={{ color: "#BF5F82", textAlign: "end" }}>
                    {errors.company && touched.company && errors.company}
                  </span>
                  <Input
                    name="email"
                    type="email"
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    placeholder="some.company@email.com"
                    label="Email"
                  />
                  <span style={{ color: "#BF5F82", textAlign: "end" }}>
                    {errors.email && touched.email && errors.email}
                  </span>
                  <Input
                    name="password"
                    type="password"
                    onBlur={handleBlur}
                    value={values.password}
                    onChange={handleChange}
                    placeholder="******"
                    label="Password"
                  />
                  <span style={{ color: "#BF5F82", textAlign: "end" }}>
                    {errors.password && touched.password && errors.password}
                  </span>
                  <Input
                    name="password_confirmation"
                    type="password"
                    onBlur={handleBlur}
                    value={values.password_confirmation}
                    onChange={handleChange}
                    placeholder="******"
                    label="Password Confirmation"
                  />
                  <span style={{ color: "#BF5F82", textAlign: "end" }}>
                    {errors.password_confirmation &&
                      touched.password_confirmation &&
                      errors.password_confirmation}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "16px",
                    }}
                  >
                    {values.email &&
                    values.password &&
                    values.password_confirmation &&
                    !errors.password_confirmation ? (
                      <StyledButton
                        style={{ background: "#F48FB1", color: "white" }}
                        onClick={() => setSteps(steps + 1)}
                      >
                        {" "}
                        next
                        <FiChevronRight />
                      </StyledButton>
                    ) : (
                      <span style={{ opacity: "65%" }}>
                        <StyledButton
                          style={{ background: "#F48FB1", color: "white" }}
                          type="button"
                        >
                          {" "}
                          next
                          <FiChevronRight />
                        </StyledButton>
                      </span>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <Input
                    name="company_url"
                    type="text"
                    value={values.company_url}
                    onChange={handleChange}
                    placeholder="https://www.mycompany.com/"
                    label="Company Website"
                  />
                  {errors.name && touched.name && errors.name}
                  <div>
                    <Input
                      name="about"
                      type="textarea"
                      value={values.about}
                      onChange={handleChange}
                      placeholder="My Company SA has the vision to change the way how..."
                      label="About the company"
                    />
                    {errors.phone && touched.phone && errors.phone}
                    <Advice style={{ width: "100%", margin: "4px" }}>
                      Between 100 and 2000 characters
                    </Advice>
                  </div>

                  <div>
                    <Note style={{ margin: "0", height: "18px" }}>
                      Upload the company logo
                    </Note>
                    <label
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "16px",
                        alignItems: "flex-end",
                      }}
                      for="file"
                    >
                      <StyledFileButton
                        style={{
                          background: "#F48FB1",
                          color: "white",
                          width: "164px",
                          height: "36px",
                          borderRadius: "8px",
                          padding: "10px",
                        }}
                        type="button"
                        onClick={(event) => console.log(event)}
                      >
                        <RiUploadLine />
                        Choose a file
                      </StyledFileButton>
                      {file ? (
                        <Note style={{ margin: "0" }}>{file.name}</Note>
                      ) : (
                        <Note style={{ margin: "0" }}>No file chosen</Note>
                      )}
                    </label>
                    <Advice style={{ marginTop: "8px" }}>Max size 5MB</Advice>

                    <input
                      style={{ display: "none" }}
                      id="file"
                      name="file"
                      type="file"
                      for="file"
                      value={values.file}
                      onChange={(event) => setFile(event.target.files[0])}
                    ></input>
                  </div>

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
                      onClick={() => {
                        setSteps(steps + 1);
                        values.company_url = "";
                        values.about = "";
                      }}
                      type="submit"
                    >
                      {" "}
                      skip this{" "}
                    </StyledButton>
                    {values.company_url || values.about ? (
                      <StyledButton
                        style={{ background: "#F48FB1", color: "white" }}
                        type="submit"
                      >
                        {" "}
                        Finish
                        <FiChevronRight />
                      </StyledButton>
                    ) : (
                      <span style={{ opacity: "65%" }}>
                        <StyledButton
                          style={{ background: "#F48FB1", color: "white" }}
                          type="button"
                        >
                          {" "}
                          Finish
                          <FiChevronRight />
                        </StyledButton>
                      </span>
                    )}
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

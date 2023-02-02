import {
  ContainerSignUp,
  StatusText,
  InformationText,
  NumberFinished,
  NumberDisable,
  NumberChoosen,
  Advice,
  Note,
  StyledFileButton,
} from "./utils";
import { Input, StyledForm, StyledButton } from "./input";
import { Formik } from "formik";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useAuth } from "../context/auth-context";
import { useState } from "react";
import { RiUploadLine } from "react-icons/ri";

function SignUpProfessional() {
  const { signup, signUpError } = useAuth();
  const [steps, setSteps] = useState(1);

  console.log(signUpError)
  console.log(signUpError?.email)
  console.log(signUpError?.errors)

  
  const [file, setFile] = useState();
  function handleSignUp(values, type) {
    const formData1 = new FormData();
    if (file) {
      formData1.append("cv", file);
    }
    formData1.append("email", values.email);
    formData1.append("password", values.password);
    formData1.append("password_confirmation", values.password_confirmation);
    formData1.append("name", values.name);
    formData1.append("phone", values.phone);
    formData1.append("birthdate", values.birthdate);
    formData1.append("link", values.link);
    formData1.append("title", values.title);
    formData1.append("experience", values.experience);
    formData1.append("education", values.education);

    signup(formData1, type);
  }

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
            birthday: "",
            link: "",
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

            if (values.phone && /\s/i.test(values.phone)) {
              errors.phone = "Whitespace is not allowed";
            } else if (values.phone && !/^\+?\d{8,15}$/i.test(values.phone)) {
              errors.phone = "Invalid phone";
            }

            return errors;
          }}
          onSubmit={(values) => {
            handleSignUp(values, "professionals");
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
          }) => (
            <StyledForm style={{ gap: "16px" }} onSubmit={handleSubmit}>
              {steps !== 1 && (
                <Note>
                  You can complete this information later but we recommend you
                  to do it now
                </Note>
              )}
              {steps === 1 ? (
                <>
                  <Input
                    name="email"
                    type="email"
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    placeholder="some_user@mail.com"
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
                  <div>
                    <Input
                      name="phone"
                      type="text"
                      onBlur={handleBlur}
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="+XXXXXXXXX"
                      label="phone"
                    />
                    <Advice style={{ marginTop: "6px" }}>
                      +[country code][number]
                    </Advice>
                  </div>
                  <span style={{ color: "#BF5F82", textAlign: "end" }}>
                    {errors.phone && touched.phone && errors.phone}
                  </span>
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
                    name="link"
                    type="text"
                    value={values.link}
                    onChange={handleChange}
                    placeholder="https://www.linkedin.com/in/username"
                    label="Linkedin URL"
                  />
                  {errors.link && touched.link && errors.link}
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
                        values.name = "";
                        values.phone = "";
                        values.birthday = "";
                        values.link = "";
                      }}
                    >
                      {" "}
                      skip this{" "}
                    </StyledButton>
                    { values.name || values.birthday || (values.phone && !errors.phone) ? (
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
                    name="title"
                    type="text"
                    value={values.title}
                    onChange={handleChange}
                    placeholder="Mechanical administrator..."
                    label="title"
                  />
                  {errors.title && touched.title && errors.title}
                  <div>
                    <Input
                      name="experience"
                      type="textarea"
                      value={values.experience}
                      onChange={handleChange}
                      placeholder="Worked 6 years in a bitcoin farm until I decided to change my life...."
                      label="Professional experience"
                      style={{ width: "600px", height: "76px" }}
                    />
                    {errors.experience &&
                      touched.experience &&
                      errors.experience}
                    <Advice style={{ width: "100%", margin: "4px" }}>
                      Between 100 and 2000 characters
                    </Advice>
                  </div>
                  <div>
                    <Input
                      name="education"
                      type="textarea"
                      value={values.education}
                      onChange={handleChange}
                      placeholder="Major in life experiences with a PHD in procrastination..."
                      label="Education"
                    />
                    {errors.education && touched.education && errors.education}
                    <Advice style={{ width: "100%", margin: "4px" }}>
                      Between 100 and 2000 characters
                    </Advice>
                  </div>

                  <div>
                    <Note style={{ margin: "0", height: "18px" }}>
                      Upload/Update your CV
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
                        <Note style={{ margin: "0" }}>No file choosen</Note>
                      )}
                    </label>
                    <Advice style={{ marginTop: "8px" }}>
                      Only PDF. Max size 5MB
                    </Advice>

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
                      style={{ background: "#F48FB1", color: "white" }}
                      type="button"
                      onClick={() => setSteps(steps - 1)}
                    >
                      <FiChevronLeft />
                      previus
                    </StyledButton>
                    <StyledButton
                      style={{ background: "inherit" }}
                      type="submit"
                      onClick={() => {
                        values.title = "";
                        values.experience = "";
                        values.education = "";
                      }}
                    >
                      {" "}
                      skip this{" "}
                    </StyledButton>
                    { values.title || values.experience || values.education ? (
                      <StyledButton
                        style={{ background: "#F48FB1", color: "white" }}
                        onClick={() => setSteps(steps + 1)}
                        type="submit"
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
                          finish
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

export default SignUpProfessional;

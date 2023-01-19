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
  const { signup } = useAuth();
  const [steps, setSteps] = useState(1);

  const [file, setFile] = useState();
  function handleSignUp(values, type) {
    const formData1 = new FormData();
    formData1.append("cv", file);
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
          onSubmit={(values) => {
            handleSignUp(values, "professionals");
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <StyledForm style={{ gap: "16px" }} onSubmit={handleSubmit}>
              <Note>
                You can complete this information later but we reccomend you to
                do it now
              </Note>
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
                  {errors.password_confirmation &&
                    touched.password_confirmation &&
                    errors.password_confirmation}
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
                  <div>
                    <Input
                      name="phone"
                      type="number"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="+XXXXXXXXX"
                      label="phone"
                    />
                    <Advice style={{ marginTop: "6px" }} >+[country code][number]</Advice>
                    {errors.phone && touched.phone && errors.phone}
                  </div>
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
                        <Note style={{ margin: "0" }}>No choosen file</Note>
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
                      type="submit"
                      style={{ background: "#F48FB1", color: "white" }}
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

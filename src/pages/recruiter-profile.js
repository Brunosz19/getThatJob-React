import { Formik } from "formik";
import { Input, StyledButton, StyledForm } from "../components/input";
import { useAuth } from "../context/auth-context";
import { Advice, Note, StyledFileButton, Title } from "../components/utils";
import { updateRecruiter } from "../services/professional-service";
import { RiUploadLine } from "react-icons/ri";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function RecruiterProfilePage() {
  const { user } = useAuth();
  const [file, setFile] = useState();
  // const navigate = useNavigate()

  function handleChangeFile(values) {
    const formData1 = new FormData();
    if (file) {
      formData1.append("logo", file)
    }
    formData1.append("company", values.company);
    formData1.append("email", values.email);
    formData1.append("company_url", values.company_url);
    formData1.append("about", values.about);

    updateRecruiter(formData1);
    // navigate("/recruiter/profile")
  }
  return (
    <>
      <Title>Profile</Title>
      <Formik
        initialValues={{
          email: user.email,
          company: user.company,
          company_url: user.company_url,
          about: user.about,
          file: user.logo,
        }}
        onSubmit={(values) => {
          console.log(values)
          handleChangeFile(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <StyledForm
            style={{ gap: "8px", padding: "0 120px" }}
            onSubmit={handleSubmit}
          >
            <div style={{ display: "flex", gap: "11px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  width: "76px",
                  height: "76px",
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={user.logo_url}
                  width={"75px"}
                  height={"75px"}
                  alt="Logo of the company"
                />
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
            </div>

            <Input
              name="email"
              type="filename"
              value={values.email}
              onChange={handleChange}
              placeholder="my_mail@mail.com"
              label="Email"
            />
            {errors.email && touched.email && errors.email}
            <Input
              name="company"
              type="text"
              value={values.company}
              onChange={handleChange}
              placeholder="My Company Name"
              label="My Company Name"
            />
            {errors.company && touched.company && errors.company}
            <Input
              name="company_url"
              type="text"
              value={values.company_url}
              onChange={handleChange}
              placeholder="www.webworks.com"
              label="company website"
            />
            {errors.company_url && touched.company_url && errors.company_url}
            <Input
              name="about"
              type="textarea"
              value={values.about}
              onChange={handleChange}
              placeholder="www.webworks.com"
              label="about the company"
            />
            {errors.about && touched.about && errors.about}
            <StyledButton
              style={{
                width: "165px",
                height: "40px",
                color: "white",
                background: "#F48FB1",
                padding: "8px 16px",
                gap: "8px",
              }}
              type="submit"
            >
              update profile
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}

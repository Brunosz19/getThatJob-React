import { Formik } from "formik";
import { Input, StyledButton, StyledForm } from "../components/input";
import { useAuth } from "../context/auth-context";
import { Advice, Note, StyledFileButton, Title } from "../components/utils";
import { updateRecruiter } from "../services/professional-service";
import { RiUploadLine } from "react-icons/ri";
import { useState } from "react";

export default function RecruiterProfilePage() {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState();

  function handleChangeFile(values) {
    const formData1 = new FormData();
    if (file) {
      formData1.append("logo", file);
    }

    const keys = ["company", "email", "company_url", "about"];
    for (const key of keys) {
      if (values[key] !== "" || values[key] !== user[key]) {
        formData1.append(key, values[key]);
      }
    }

    updateRecruiter(formData1);
    setShowModal(true);

    setTimeout(() => {
      window.location.reload();
      setShowModal(false);
    }, 1500);
  }
  return (
    <>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "lightgray",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          Actualizando perfil de usuario...
        </div>
      )}
      <Title>Profile</Title>
      <Formik
        initialValues={{
          email: user.email,
          company: user.company,
          company_url: user.company_url,
          about: user.about,
          file: user.logo,
        }}
        validate={(values) => {
          const errors = {};
          const fields = ["company", "email", "company_url", "about"];
          const hasChanges = fields.some(
            (field) => user[field] !== values[field]
          );

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          for (const field of fields) {
            if (user[field] && values[field] === user[field]) {
              errors[field] = "No change registered";
            }
          }

          if (hasChanges) {
            for (const field of fields) {
              delete errors[field];
            }
          }

          return errors;
        }}
        onSubmit={(values) => {
          handleChangeFile(values);
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
              onBlur={handleBlur}
              value={values.email}
              onChange={handleChange}
              placeholder="my_mail@mail.com"
              label="Email"
            />
            <span style={{ color: "#BF5F82" }}>
              {errors.email && touched.email && errors.email}
            </span>
            <Input
              name="company"
              type="text"
              onBlur={handleBlur}
              value={values.company}
              onChange={handleChange}
              placeholder="My Company Name"
              label="My Company Name"
            />
            <span style={{ color: "#BF5F82" }}>
              {errors.company && touched.company && errors.company}
            </span>
            <Input
              name="company_url"
              type="text"
              onBlur={handleBlur}
              value={values.company_url}
              onChange={handleChange}
              placeholder="www.webworks.com"
              label="company website"
            />
            <span style={{ color: "#BF5F82" }}>
              {errors.company_url && touched.company_url && errors.company_url}
            </span>
            <Input
              name="about"
              type="textarea"
              onBlur={handleBlur}
              value={values.about}
              onChange={handleChange}
              placeholder="www.webworks.com"
              label="about the company"
            />
            <span style={{ color: "#BF5F82" }}>
              {errors.about && touched.about && errors.about}
            </span>
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

import { Formik } from "formik";
import { Input, StyledButton, StyledForm } from "../components/input";
import { useAuth } from "../context/auth-context";
import {
  Advice,
  Note,
  StyledFileButton,
  SubTitle,
  Title,
} from "../components/utils";
import { RiUploadLine } from "react-icons/ri";
import { updateUser } from "../services/professional-service";
import { useState } from "react";

export default function ProfessionalProfilePage() {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState();


  function handleChangeFile(values) {
    const formData1 = new FormData();
    if (file) {
      formData1.append("cv", file);
    }

    const keys = [
      "email",
      "name",
      "phone",
      "birthday",
      "link",
      "title",
      "experience",
      "education",
    ];
    for (const key of keys) {
      if (values[key] && values[key] !== "") {
        formData1.append(key, values[key]);
      }
    }

    updateUser(formData1);

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
          name: user.name,
          phone: user.phone,
          birthday: user.birthday,
          link: user.link,
          title: user.title,
          experience: user.experience,
          education: user.education,
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

          if (user.email && values.email === user.email) {
            errors.email = "No change registered";
          }

          if (user.name && values.name === user.name) {
            errors.name = "No change registered";
          }

          if (user.birthday && values.birthday === user.birthday) {
            errors.birthday = "No change registered";
          }

          if (user.link && values.link === user.link) {
            errors.link = "No change registered";
          }

          if (user.title && values.title === user.title) {
            errors.title = "No change registered";
          }

          if (user.experience && values.experience === user.experience) {
            errors.experience = "No change registered";
          }

          if (user.education && values.education === user.education) {
            errors.education = "No change registered";
          }
          if (user.phone && values.phone === user.phone) {
            errors.phone = "No change registered";
          }

          if (values.phone && /\s/i.test(values.phone)) {
            errors.phone = "Whitespace is not allowed";
          } else if (values.phone && !/^\+\d{8,15}$/i.test(values.phone)) {
            errors.phone = "Invalid phone";
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
            style={{ gap: "4px", padding: "0 120px" }}
            onSubmit={handleSubmit}
          >
            <SubTitle>Personal information</SubTitle>
            <Input
              name="email"
              type="email"
              onBlur={handleBlur}
              value={values.email}
              onChange={handleChange}
              placeholder="some_user@mail.com"
              label="Email"
            />
            <span style={{ color: "#BF5F82" }}>
              {errors.email && touched.email && errors.email}
            </span>
            <Input
              name="name"
              type="text"
              onBlur={handleBlur}
              value={values.name}
              onChange={handleChange}
              placeholder="John Doe"
              label="name"
            />
            <span style={{ color: "#BF5F82" }}>
              {errors.name && touched.name && errors.name}
            </span>
            <div>
              <Input
                name="phone"
                type="tel"
                onBlur={handleBlur}
                value={values.phone}
                onChange={handleChange}
                placeholder="+XXXXXXXXX"
                label="phone"
              />
              <span style={{ color: "#BF5F82" }}>
                {errors.phone && touched.phone && errors.phone}
              </span>
              <Advice>+[country code][number]</Advice>
            </div>
            <Input
              name="birthday"
              type="date"
              value={values.birthday}
              onChange={handleChange}
              placeholder="Pick a date"
              label="birthday"
            />
            <span style={{ color: "#BF5F82" }}>
              {errors.birthday && touched.birthday && errors.birthday}
            </span>
            <Input
              name="link"
              type="link"
              value={values.link}
              onChange={handleChange}
              placeholder="https://www.linkedin.com/in/username"
              label="Linkedin URL"
            />
            <span style={{ color: "#BF5F82" }}>
              {errors.link && touched.link && errors.link}
            </span>

            <SubTitle style={{ marginTop: "32px" }}>
              Professional information
            </SubTitle>
            <Note style={{ width: "100%", margin: "0" }}>
              Changes made here will be reflected in your future applications
            </Note>
            <Input
              name="title"
              type="text"
              value={values.title}
              onChange={handleChange}
              placeholder="Mechanical administrator..."
              label="title"
            />
            <span style={{ color: "#BF5F82" }}>
              {errors.title && touched.title && errors.title}
            </span>
            <Input
              name="experience"
              type="textarea"
              value={values.experience}
              onChange={handleChange}
              placeholder="Worked 6 years in a bitcoin farm until I decided to change my life...."
              label="Professional experience"
            />
            <span style={{ color: "#BF5F82" }}>
              {errors.experience && touched.experience && errors.experience}
            </span>
            <Input
              name="education"
              type="textarea"
              value={values.education}
              onChange={handleChange}
              placeholder="Major in life experiences with a PHD in procrastination..."
              label="Education"
            />
            <span style={{ color: "#BF5F82" }}>
              {errors.education && touched.education && errors.education}
            </span>
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

            {(values.email && !errors.email) ||
            !errors.phone ||
            !errors.name ||
            !errors.link ||
            !errors.birthday ||
            !errors.education ||
            !errors.title ||
            !errors.experience ? (
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
            ) : (
              <span style={{ opacity: "65%" }}>
                <StyledButton
                  style={{
                    width: "165px",
                    height: "40px",
                    color: "white",
                    background: "#F48FB1",
                    padding: "8px 16px",
                    gap: "8px",
                  }}
                  type="button"
                >
                  update profile
                </StyledButton>
              </span>
            )}
          </StyledForm>
        )}
      </Formik>
    </>
  );
}

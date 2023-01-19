import { Formik } from "formik";
import { Input, StyledForm } from "../components/input";
import { useAuth } from "../context/auth-context";
import { Advice, Note, StyledFileButton, SubTitle, Title } from "../components/utils";
import { RiUploadLine } from "react-icons/ri";
import { updateUser } from "../services/professional-service";
import { useState } from "react";
// import { RiMoneyDollarCircleFill } from "react-icons/ri";

export default function ProfessionalProfilePage() {
  const { user } = useAuth();
  const [file, setFile] = useState();

  function handleChangeFile(values) {
    const formData1 = new FormData();
    if (file) {
      formData1.append("cv", file);
    }
    formData1.append("email", values.email);
    formData1.append("password", values.password);
    formData1.append("password_confirmation", values.password_confirmation);
    formData1.append("name", values.name);
    if (values.phone) {
      formData1.append("phone", values.phone);
    }
    formData1.append("birthdate", values.birthdate);
    formData1.append("link", values.link);
    formData1.append("title", values.title);
    formData1.append("experience", values.experience);
    formData1.append("education", values.education);

    updateUser(formData1);
  }

  return (
    <>
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
        onSubmit={(values) => {
          handleChangeFile(values);
          console.log(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <StyledForm
            style={{ gap: "4px", padding: "0 120px" }}
            onSubmit={handleSubmit}
          >
            <SubTitle>Personal information</SubTitle>
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
                type="tel"
                value={values.phone}
                onChange={handleChange}
                placeholder="+XXXXXXXXX"
                label="phone"
              />
              {errors.phone && touched.phone && errors.phone}
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

            <SubTitle style={{marginTop: "32px"}}>Professional information</SubTitle>
            <Note style={{width: "100%", margin: "0"}}>Changes made here will be reflected in your future applications</Note>
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

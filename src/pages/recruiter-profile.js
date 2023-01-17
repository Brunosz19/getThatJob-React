import { Formik } from "formik";
import { Input, StyledButton, StyledForm } from "../components/input";
import { useAuth } from "../context/auth-context";
import { Title } from "../components/utils";
import { updateRecruiter } from "../services/professional-service";
import { useState } from "react";

export default function RecruiterProfilePage() {
  const [file, setFile] = useState();
  const { user } = useAuth();
  function handleChangeFile(values) {
    const formData1 = new FormData();
    formData1.append("logo", file);
    formData1.append("company", values.company);
    formData1.append("email", values.email);
    formData1.append("company_url", values.company_url);
    formData1.append("about", values.about);

    updateRecruiter(formData1);
    // navigate("/");
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
          handleChangeFile(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <StyledForm
            style={{ gap: "8px", padding: "0 120px" }}
            onSubmit={handleSubmit}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <img src={user.logo_url} />
            </div>

            <label for="file"> file </label>
            <input
              id="file"
              name="file"
              type="file"
              value={values.file}
              onChange={(event) => setFile(event.target.files[0])}
            ></input>

            
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

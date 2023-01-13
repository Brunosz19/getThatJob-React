import { Formik } from "formik";
import { Input, StyledButton, StyledForm } from "../components/input";
import { useAuth } from "../context/auth-context";

export default function RecruiterProfilePage() {
  const { user } = useAuth();
  return (
    <>
      <h1>Profile</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <div
          style={{ width: "75px", height: "75px", background: "green" }}
        ></div>
        <div>
          <h4>company logo</h4>
          <StyledButton
            style={{
              width: "134px",
              height: "36px",
              color: "white",
              background: "#F48FB1",
            }}
          >
            Choose a file
          </StyledButton>
          <p>PNG, JPEG, IMG</p>
        </div>
      </div>
      <Formik
        initialValues={{
          email: user.email,
          company: user.company,
          company_url: user.company_url,
          about: user.about,
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
          console.log(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <StyledForm style={{ gap: "8px" }} onSubmit={handleSubmit}>
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
              type="text"
              value={values.about}
              onChange={handleChange}
              placeholder="www.webworks.com"
              label="about the company"
            />
            {errors.about && touched.about && errors.about}
            <StyledButton type="submit">update profile</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}

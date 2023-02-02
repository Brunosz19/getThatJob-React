import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { Input, StyledForm, StyledButton } from "./input";

function LoginForm({ type }) {
  const { login, loginError } = useAuth();
  const navigate = useNavigate();

  console.log(loginError)

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
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
          errors.password = "Invalid password";
        }
        return errors;
      }}
      onSubmit={(values) => {
        login(values, type).catch(console.log);


        type === "professional"
          ? navigate("/find-that-job")
          : navigate("/job-posting");
      }}
    >
      {({
        touched,
        handleBlur,
        values,
        errors,
        handleChange,
        handleSubmit,
      }) => (

        <StyledForm
        style={{ gap: "16px", alignItems: "flex-end" }}
        onSubmit={handleSubmit}
        >
          {/* <h1>{loginError?.message}</h1> */}
          <Input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            label="Email"
            placeholder="my_mail@mail.com"
          />
          {errors.email && touched.email && errors.email}
          <Input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="**********"
            label="Password"
          />
          {errors.password && touched.password && errors.password}
          <StyledButton
            type="submit"
            style={{ background: "#F48FB1", color: "white" }}
          >
            Login
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
}

export default LoginForm;

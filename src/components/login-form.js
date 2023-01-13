import { Formik } from "formik";
import { useAuth } from "../context/auth-context";
import { Input, StyledForm, StyledButton } from "./input";

function LoginForm({type}){
  const { login } = useAuth();

  return(
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
      } else if (values.password.length <= 2) {
        errors.password = "Invalid password";
      }
      return errors;
    }}
    onSubmit={(values) => {
      login(values, type);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleSubmit,
    }) => (
      <StyledForm style={{ gap: "16px", alignItems: "flex-end" }}>
        <Input
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="my_mail@mail.com"
          label="Email"
        />
        {errors.email && touched.email && errors.email}
        <Input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="**********"
          label="Password"
        />
        {errors.password && touched.password && errors.password}
        <StyledButton type="submit" style={{ background: "#F48FB1", color: "white" }}>
          Login
        </StyledButton>
      </StyledForm>
    )}
    </Formik>
  )
}

export default LoginForm;
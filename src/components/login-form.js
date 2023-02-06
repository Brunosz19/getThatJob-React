import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { Input, StyledForm, StyledButton } from "./input";
import { Note } from "./utils";

function LoginForm({ type }) {
  const { login, loginError } = useAuth();
  const navigate = useNavigate();

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
        login(values, type);

        if (loginError) {
          setTimeout(() => {
            type === "professional"
            ? navigate("/find-that-job")
            : navigate("/job-posting");
          }, 1000)
        }
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
          {loginError && (
            <Note
              style={{
                color: "#BF5F82",
                margin: "0",
                height: "auto",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              {loginError?.message}
            </Note>
          )}
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
          <span style={{ color: "#BF5F82" }}>
            {errors.email && touched.email && errors.email}
          </span>
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
          <span style={{ color: "#BF5F82" }}>
            {errors.password && touched.password && errors.password}
          </span>

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

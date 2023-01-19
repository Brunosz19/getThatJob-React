import { Formik } from "formik";
import { Input, StyledForm } from "../components/input";
import { useAuth } from "../context/auth-context";
import { Title } from "../components/utils";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export default function ProfessionalProfilePage() {
  const { user } = useAuth();
  return (
    <>
      <Title>Profile</Title>
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
          <StyledForm
            style={{ gap: "16px", padding: "0 120px" }}
            onSubmit={handleSubmit}
          >
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
            {errors.password && touched.password && errors.password}
            <Input
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              placeholder="John Doe"
              label="name"
            />
            {errors.name && touched.name && errors.name}
            <Input
              name="phone"
              type="number"
              value={values.phone}
              onChange={handleChange}
              placeholder="+XXXXXXXXX"
              label="phone"
            />
            {errors.phone && touched.phone && errors.phone}
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
          </StyledForm>
        )}
      </Formik>
    </>
  );
}

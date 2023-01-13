import styled from "@emotion/styled";
import { Formik } from "formik";
import { Input, StyledButton, StyledForm, StyledLabel } from "../components/input";
import { Title } from "../components/utils";

const SubTitle = styled("h2")`
  width: 944px;
  height: 29px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #373737;
  margin-top: 28px;
`

export default function CreateJob() {
  return (
    <>
      <Title style={{width: "960px"}}>Create new job posting</Title>
      <Formik
        initialValues={{
          title: "",
          category: "",
          job_type: "",
          min_salary: "",
          max_salary: "",
          about: "",
          requirement: "",
          opt_requirement: "",
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
          <StyledForm style={{ gap: "8px", padding: "0 120px" }} onSubmit={handleSubmit}>
            <SubTitle>Main informaiton</SubTitle>
            <Input
              name="title"
              type="text"
              value={values.title}
              onChange={handleChange}
              placeholder="Software engineer"
              label="job title"
            />
            {errors.title && touched.title && errors.title}
            <Input
              name="category"
              type="text"
              value={values.category}
              onChange={handleChange}
              placeholder="Select create a category"
              label="Job category"
            />
            {errors.category && touched.category && errors.category}
            <Input
              name="job_type"
              type="text"
              value={values.job_type}
              onChange={handleChange}
              placeholder="Select a type"
              label="Select a type"
            />
            {errors.job_type && touched.job_type && errors.job_type}
            <StyledLabel>salary range</StyledLabel>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Input
                name="min_salary"
                type="number"
                value={values.min_salary}
                onChange={handleChange}
                placeholder="min"
                label=""
                width={"102px"}
                height={"36px"}
              />
              {errors.min_salary && touched.min_salary && errors.min_salary}
              <h1 style={{color: "#8E8E8E", margin: "0 8px"}} >{" "}-{" "}</h1>
              <Input
                name="max_salary"
                type="number"
                value={values.max_salary}
                onChange={handleChange}
                placeholder="max"
                label=""
                width={"102px"}
                height={"36px"}
              />
              {errors.max_salary && touched.max_salary && errors.max_salary}
            </div>
            <SubTitle>Additional information</SubTitle>
            <Input
              name="about"
              type="textarea"
              value={values.about}
              onChange={handleChange}
              placeholder="Describe the main functions and characteristics of your job position"
              label="about the job position"
            />
            {errors.about && touched.about && errors.about}
            <Input
              name="requirement"
              type="textarea"
              value={values.requirement}
              onChange={handleChange}
              placeholder="List each mandatory requirement in a new line"
              label="mandatory requirements"
            />
            {errors.requirement && touched.requirement && errors.requirement}
            <Input
              name="opt_requirement"
              type="textarea"
              value={values.opt_requirement}
              onChange={handleChange}
              placeholder="List each optional requirement in a new line"
              label="optional requirements"
            />
            {errors.opt_requirement && touched.opt_requirement && errors.opt_requirement}
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
              post this job
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}

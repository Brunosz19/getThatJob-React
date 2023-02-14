import styled from "@emotion/styled";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  Input,
  StyledButton,
  StyledForm,
  StyledLabel,
} from "../components/input";
import { Title } from "../components/utils";
import { createJob } from "../services/job-services";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const SubTitle = styled("h2")`
  width: 944px;
  height: 29px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #373737;
  margin-top: 28px;
`;

export default function CreateJob() {
  const navigate = useNavigate();

  return (
    <>
      <Title style={{ width: "960px" }}>Create new job posting</Title>
      <Formik
        initialValues={{
          title: "",
          category: "",
          job_type: "",
          min_salary: "",
          max_salary: "",
          about: "",
          requeriments: "",
          opt_requeriments: "",
        }}
        validate={(values) => {
          const errors = {};
          const fields = [
            "title",
            "category",
            "job_type",
            "min_salary",
            "max_salary",
            "about",
            "requeriments",
            "opt_requeriments",
          ];

          if (values.min_salary < 0) {
            errors.salary = "Cannot be less than 0";
          }

          if (values.min_salary > values.max_salary) {
            errors.salary = "Cannot be less than min salary";
          }

          if (values.min_salary === values.max_salary) {
            errors.salary = "Cannot be equal";
          }

          for (const field of fields) {
            if (!values[field]) {
              errors[field] = "Required";
            }
          }

          for (const field of fields) {
            if (errors[field] === "") {
              delete errors[field];
            }
          }

          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
          createJob(values);

          navigate("/job-posting");
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
            <SubTitle>Main information</SubTitle>
            <Input
              name="title"
              type="text"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Software engineer"
              label="job title"
            />
            <span style={{ color: "#BF5F82" }}>
              {errors.title && touched.title && errors.title}
            </span>
            <Input
              name="category"
              type="text"
              value={values.category}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Select create a category"
              label="Job category"
            />
            <span style={{ color: "#BF5F82" }}>
              {errors.category && touched.category && errors.category}
            </span>
            <Input
              name="job_type"
              type="text"
              value={values.job_type}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Select a type"
              label="Select a type"
            />
            <span style={{ color: "#BF5F82" }}>
              {errors.job_type && touched.job_type && errors.job_type}
            </span>
            <StyledLabel>salary range</StyledLabel>

            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <RiMoneyDollarCircleFill
                  style={{
                    position: "absolute",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                />
                <Input
                  name="min_salary"
                  type="number"
                  value={values.min_salary}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="min"
                  label=""
                  width={"102px"}
                  height={"36px"}
                />
                <span
                  style={{
                    color: "#BF5F82",
                    marginLeft: "12px",
                    marginTop: "10px",
                  }}
                >
                  {errors.min_salary && touched.min_salary && errors.min_salary}
                </span>
              </div>
              <h1 style={{ color: "#8E8E8E", margin: "0 8px" }}> - </h1>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <RiMoneyDollarCircleFill
                  style={{
                    position: "absolute",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                />
                <Input
                  name="max_salary"
                  type="number"
                  value={values.max_salary}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="max"
                  label=""
                  width={"102px"}
                  height={"36px"}
                />
                <span
                  style={{
                    color: "#BF5F82",
                    marginLeft: "12px",
                    marginTop: "10px",
                  }}
                >
                  {errors.max_salary && touched.max_salary && errors.max_salary}
                </span>
              </div>
            </div>
            <span style={{ color: "#BF5F82" }}>{errors.salary}</span>

            <SubTitle>Additional information</SubTitle>
            <Input
              name="about"
              type="textarea"
              value={values.about}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Describe the main functions and characteristics of your job position"
              label="about the job position"
            />
            <span style={{ color: "#BF5F82" }}>
              {errors.about && touched.about && errors.about}
            </span>
            <Input
              name="requeriments"
              type="textarea"
              value={values.requeriments}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="List each mandatory requirements in a new line"
              label="mandatory requerimentss"
            />
            <span style={{ color: "#BF5F82" }}>
              {errors.requeriments &&
                touched.requeriments &&
                errors.requeriments}
            </span>
            <Input
              name="opt_requeriments"
              type="textarea"
              value={values.opt_requeriments}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="List each optional requirement in a new line"
              label="optional requirements"
            />
            <span style={{ color: "#BF5F82" }}>
              {errors.opt_requeriments &&
                touched.opt_requeriments &&
                errors.opt_requeriments}
            </span>
            { Object.values(errors).length === 0 ? (
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
                  type="submit"
                >
                  post this job
                </StyledButton>
              </span>
            )}
          </StyledForm>
        )}
      </Formik>
    </>
  );
}

//{(values.min_salary)? `${<RiMoneyDollarCircleFill/>} min` : `${<RiMoneyDollarCircleFill/>} ${values.min_salary}`}

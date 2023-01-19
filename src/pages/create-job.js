import styled from "@emotion/styled";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Input, StyledButton, StyledForm, StyledLabel } from "../components/input";
import { Title } from "../components/utils";
import { createJob } from "../services/job-services";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

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
  const navigate = useNavigate()

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
          requeriments: "",
          opt_requeriments: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          createJob(values)

          navigate("/job-posting")
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
            {console.log(values.min_salary)}
            <div style={{ display: "flex", alignItems: "center" }}>
              <RiMoneyDollarCircleFill style={{position: "absolute", marginLeft: "10px"}}/>
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
              <div style={{display: "flex", alignItems: "center"}}>
                <RiMoneyDollarCircleFill style={{position: "absolute", marginLeft: "10px"}}/>
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
              name="requeriments"
              type="textarea"
              value={values.requeriments}
              onChange={handleChange}
              placeholder="List each mandatory requirements in a new line"
              label="mandatory requerimentss"
            />
            {errors.requeriments && touched.requeriments && errors.requeriments}
            <Input
              name="opt_requeriments"
              type="textarea"
              value={values.opt_requeriments}
              onChange={handleChange}
              placeholder="List each optional requirement in a new line"
              label="optional requirements"
            />
            {errors.opt_requeriments && touched.opt_requeriments && errors.opt_requeriments}
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

//{(values.min_salary)? `${<RiMoneyDollarCircleFill/>} min` : `${<RiMoneyDollarCircleFill/>} ${values.min_salary}`}
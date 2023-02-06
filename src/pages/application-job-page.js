import styled from "@emotion/styled";
import { IoIosArrowBack } from "react-icons/io";
import {
  RiMailLine,
  RiFocus3Line,
  RiBuilding3Line,
  RiCalendar2Line,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useParams } from "react-router";
import { getJob } from "../services/job-services";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { Formik } from "formik";
import { Input, StyledButton, StyledForm } from "../components/input";
import { getFollowings } from "../services/following-services";
import { Navigate, useNavigate } from "react-router";
import * as U from "../components/utils/utils-date";
import { createAppliedJob } from "../services/applied-job-services";

const BackButton = styled("button")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.25px;
  color: #616161;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
`;

const JobSubTitle = styled("h3")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #bf5f82;
  margin: 10px 0 16px;
`;

const ApplyButton = styled("button")`
  padding: 16px 24px;
  gap: 8px;
  width: 173px;
  height: 56px;
  background: #f48fb1;
  border-radius: 16px;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const JobTitle = styled("h1")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 59px;
`;

const JobCreateDate = styled("p")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
`;

const JobData = styled("h4")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.15px;
`;

const FileButton = styled("file")`
  border: none;
  border-radius: 8px;
  width: 80px;
  height: 40px;
  background: #f48fb1;
  cursor: pointer;
  padding: 8px;
  gap: 8px;
  color: white;
  margin-top: 40px;
`;

const StyledRadio = styled("input")`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin: 0;
  border: 2px solid #f48fb1;
  transition: 0.2s all linear;

  &:checked {
    border: 6px solid #f48fb1;
  }

  &:focus {
    color: #f48fb1;
  }

  &:active {
    background-color: white;
    color: black;
    outline: 1px solid black;
  }
`;

export default function ApplicationJob() {
  const [job, setJob] = useState();
  const [followings, setFollowings] = useState();
  const { id } = useParams();
  const { user } = useAuth();
  useEffect(() => {
    getFollowings().then(setFollowings);
    getJob(id).then(setJob).catch(console.log);
  }, [id]);

  const isFollow = followings?.some((follows) => follows.job_id === job?.id);
  const navigate = useNavigate();
  function HandleNavigate(id) {
    navigate(`/professional/job/${id}`);
  }

  return (
    <div>
      <BackButton
        onClick={() => {
          HandleNavigate(job.id);
        }}
      >
        <IoIosArrowBack />
        BACK
      </BackButton>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "80vw",
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              src={job?.company_info.logo}
              alt="Logo company"
              style={{
                boxShadow: "2px 3px 5px 4px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
                marginRight: "20px",
                marginTop: "10px",
                width: "60px",
                height: "60px",
              }}
            ></img>
            <div>
              <JobSubTitle style={{ color: "#373737", marginBottom: "0" }}>
                {job?.company_info.name}
              </JobSubTitle>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    background: isFollow ? "#F48FB1" : "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isFollow ? "white" : "#616161",
                  }}
                >
                  <RiFocus3Line />
                </div>
                <BackButton>FOLLOWING</BackButton>
              </div>
            </div>
          </div>
          <ApplyButton>
            <RiMailLine style={{ width: "20px", height: "20px" }} />
            APPLY NOW
          </ApplyButton>
        </div>
      </div>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <JobTitle>{job?.title}</JobTitle>
        <JobCreateDate>
          <AiOutlineClockCircle />
          Posted {U.getDaysAgo(job?.created_at)}
        </JobCreateDate>
        <div style={{ display: "flex", gap: "32px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #F48FB1",
              borderRadius: "8px",
            }}
          >
            <JobData style={{ paddingTop: "8px" }}>Category</JobData>
            <JobSubTitle style={{ color: "#373737", padding: "0 32px" }}>
              <RiBuilding3Line style={{ marginRight: "10px" }} />
              {job?.category}
            </JobSubTitle>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #F48FB1",
              borderRadius: "8px",
            }}
          >
            <JobData style={{ paddingTop: "8px" }}>Type</JobData>
            <JobSubTitle style={{ color: "#373737", padding: "0 32px" }}>
              <RiCalendar2Line style={{ marginRight: "10px" }} />
              {job?.job_type}
            </JobSubTitle>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #F48FB1",
              borderRadius: "8px",
            }}
          >
            <JobData style={{ paddingTop: "8px" }}>Salary</JobData>
            <JobSubTitle
              style={{
                color: "#373737",
                padding: "0 32px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <RiMoneyDollarCircleLine style={{ marginRight: "10px" }} />
              {job?.min_salary} - {job?.max_salary}
            </JobSubTitle>
          </div>
        </div>
        <div style={{ width: "800px", marginTop: "30px" }}>
          <JobSubTitle>Complete your application</JobSubTitle>
          <Formik
            initialValues={{
              experience: user.experience,
              cv: user.cv_url,
            }}
            onSubmit={(values) => {
              // console.log(values);
              createAppliedJob({...values, professional_id: user.id, job_id: id})
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <StyledForm
                style={{ gap: "16px", padding: "0 20px" }}
                onSubmit={handleSubmit}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <StyledRadio
                    type="radio"
                    id="myCV"
                    name="myCV"
                    value={user.cv_url}
                    checked
                  ></StyledRadio>
                  <label for="huey">Use current CV</label>
                  <StyledRadio
                    type="radio"
                    id="newCV"
                    name="newCV"
                    value="user_cv_update"
                  ></StyledRadio>
                  <label for="dewey">Upload new CV</label>
                </div>
                <Input
                  name="experience"
                  type="textarea"
                  value={user.experience}
                  onChange={handleChange}
                  placeholder="Worked 6 years in a bitcoin farm until I decided to change my life...."
                  label="Professional experience (taken from your profile)"
                />
                {errors.experience && touched.experience && errors.experience}
                <JobCreateDate>Between 50 and 1000 characters</JobCreateDate>
                <Input
                  name="why"
                  type="textarea"
                  // value={}
                  onChange={handleChange}
                  placeholder="Mention things about The Company Name SA that excite you. Why would you be a good candidate?"
                  label="Why are you interested in working at The company name SA"
                />
                {errors.why && touched.why && errors.why}
                <JobCreateDate>Between 50 and 1000 characters</JobCreateDate>
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
                  <RiMailLine style={{ width: "20px", height: "20px" }} />
                  APPLY NOW
                </StyledButton>
              </StyledForm>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
}

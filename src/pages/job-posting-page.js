import styled from "@emotion/styled";
import JobPostingComponent from "../components/job-posting-component";

const ApplicationFilterTitle = styled("p")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  margin-top: 24px;
  letter-spacing: 1.5px;
`;

const ApplicationsTitle = styled("h1")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 41px;
  letter-spacing: 0.25px;
`;

const ApplicationFilterConteiner = styled("div")`
  display: flex;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
`;

const ApplicationsFound = styled("h2")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;

const ApplicationText = styled("p")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  margin-right: 10px;
`;

const jobs = [
  {
      "id": 1,
      "title": "Community-Services Architect",
      "category": "Advertising",
      "job_type": "Temporary",
      "recruiter_id": 1,
      "min_salary": 1000,
      "max_salary": 5000,
      "status": null,
      "about": null,
      "requeriments": null,
      "opt_requeriments": null,
      "status": true,
			"recruiter_id": 1,
			"created_at": "2023-01-17T23:42:40.404Z",
			"updated_at": "2023-01-17T23:42:40.404Z"
  },
  {
      "id": 2,
      "title": "Design Strategist",
      "category": "Banking",
      "job_type": "Contract",
      "recruiter_id": 1,
      "min_salary": 1000,
      "max_salary": 5000,
      "status": true,
      "about": null,
      "requeriments": null,
      "opt_requeriments": null,
      "status": null,
			"recruiter_id": 1,
			"created_at": "2023-01-17T23:42:40.404Z",
			"updated_at": "2023-01-17T23:42:40.404Z"
  },
  {
      "id": 3,
      "title": "Senior Technician",
      "category": "Advertising",
      "job_type": "Full-time",
      "recruiter_id": 1,
      "min_salary": 1000,
      "max_salary": 5000,
      "status": true,
      "about": null,
      "requeriments": null,
      "opt_requeriments": null,
      "status": null,
			"recruiter_id": 1,
			"created_at": "2023-01-17T23:42:40.404Z",
			"updated_at": "2023-01-17T23:42:40.404Z"
  },
  {
      "id": 4,
      "title": "International Healthcare Assistant",
      "category": "Legal",
      "job_type": "Contract",
      "recruiter_id": 1,
      "min_salary": 1000,
      "max_salary": 5000,
      "status": false,
      "about": null,
      "requeriments": null,
      "opt_requeriments": null,
      "status": null,
			"recruiter_id": 1,
			"created_at": "2023-01-17T23:42:40.404Z",
			"updated_at": "2023-01-17T23:42:40.404Z"
  },
  {
      "id": 5,
      "title": "Administration Developer",
      "category": "IT",
      "job_type": "Contract",
      "recruiter_id": 1,
      "min_salary": 1000,
      "max_salary": 5000,
      "status": false,
      "about": null,
      "requeriments": null,
      "opt_requeriments": null,
      "status": null,
			"recruiter_id": 1,
			"created_at": "2023-01-17T23:42:40.404Z",
			"updated_at": "2023-01-17T23:42:40.404Z"
  }
];


export default function JobPosting() {
  return (
    <div>
      <ApplicationsTitle>Job Postings</ApplicationsTitle>
      <div>
        <ApplicationFilterTitle>
          FILTER YOUR JOB POSTINGS
        </ApplicationFilterTitle>
        <ApplicationFilterConteiner>
          <input type="checkbox" />
          <ApplicationText style={{ color: "#616161" }}>ALL</ApplicationText>
          <input type="checkbox" />
          <ApplicationText style={{ color: "#616161" }}>
            Whit candidates on track
          </ApplicationText>
          <input type="checkbox" />
          <ApplicationText style={{ color: "#616161" }}>Closed</ApplicationText>
        </ApplicationFilterConteiner>
        <ApplicationsFound style={{ marginTop: "16px" }}>
          4 job postings found
        </ApplicationsFound>
      </div>
      {jobs.map(function(job){
        return <JobPostingComponent job={job}/>
      })}
    </div>
  );
}
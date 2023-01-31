import JobCard from "../JobCard";
import CompanyCard from "../CompanyCard";
import { Wrapper } from "./styles";
import { LoginText } from "../utils";

function JobsList({ props, type }) {
  return (
    <>
      <LoginText style={{marginTop: "24px", marginBottom: "8px"}}> you are following {props?.length} {(type === "company") ? (props?.length === 1) ? "company" : "companies" : (props?.length === 1) ? "job" : "jobs"} </LoginText>
      <Wrapper>
        {props?.map(({ ...props }) =>
          type === "company" ? (
            <CompanyCard key={props.id} {...props} />
          ) : (
            <JobCard key={props.id} {...props}  />
          )
        )}
      </Wrapper>
    </>
  );
}

export default JobsList;

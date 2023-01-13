import JobCard from "../JobCard";
import CompanyCard from "../CompanyCard";
import { Wrapper } from "./styles";

function JobsList({ props, type }) {
  return (
    <Wrapper>
      {props.map(({ ...props }) =>
        type === "company" ? (
          <CompanyCard key={props.id} {...props} />
        ) : (
          <JobCard key={props.id} {...props} />
        )
      )}
    </Wrapper>
  );
}

export default JobsList;

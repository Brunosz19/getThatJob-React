import ApplicationCard from "../ApplicationCard";
import { Wrapper } from "./styles";

function ApplicationList({ props }) {
  return (
    <Wrapper>
      {props?.map(({ ...props }) => (
        <ApplicationCard key={props.id} {...props} />
      ))}
    </Wrapper>
  );
}

export default ApplicationList;

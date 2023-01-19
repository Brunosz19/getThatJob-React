import ApplicationCard from "../ApplicationCard";
import { Wrapper } from "./styles";

function ApplicationList({ props }) {
  console.log(props);

  return (
    <Wrapper>
      {props?.map(({ ...props }) => (
        <ApplicationCard key={props.id} {...props?.job} />
      ))}
    </Wrapper>
  );
}

export default ApplicationList;

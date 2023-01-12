import JobCard from "../JobCard"
import { Wrapper } from "./styles"

function JobsList({ props }) {
  return (
    <Wrapper>
      {props.map(({ ...props }) => (
        <JobCard
          key={props.id}
          {...props}
        />
      ))}
    </Wrapper>
  )
}

export default JobsList

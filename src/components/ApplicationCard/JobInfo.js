import * as S from "./styles";
import * as U from "../utils/utils-date"

export default function JobInfo({
  category,
  job_type,
  min_salary,
  max_salary,
  date,
}) {
  return (
    <S.JobDataAndSalary>
      <div style={{ display: "flex" }}>
        <S.ApplicationsmmLetter style={{ marginRight: "10px" }}>
          {category}
        </S.ApplicationsmmLetter>
        <S.ApplicationsmmLetter>{job_type}</S.ApplicationsmmLetter>
      </div>
      <div style={{ display: "flex", width: "200px" }}>
        <S.ApplicationsmmLetter style={{ marginRight: "10px" }}>
          {(min_salary / 1000).toFixed(1)}k - {(max_salary / 1000).toFixed(1)}k
        </S.ApplicationsmmLetter>
        <S.ApplicationsmmLetter>Posted {U.getDaysAgo(date)}</S.ApplicationsmmLetter>
      </div>
    </S.JobDataAndSalary>
  );
}

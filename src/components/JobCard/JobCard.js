import * as S from "./styles"

function JobCard({category, title, job_type, min_salary, max_salary}) {
  return (
    <S.Wrapper>
      <S.JobCover>
        <p>Imagen</p>
        <S.JobInfo>
          <S.WrapperType>
            {category}
          </S.WrapperType>
          <h1>{title}</h1>
          <p>the company name</p>
          <S.WrapperType>
            <S.ExtraInfo>{job_type}</S.ExtraInfo>
            <S.ExtraInfo>{(min_salary/1000).toFixed(1)}k - {(max_salary/1000).toFixed(1)}k</S.ExtraInfo>
          </S.WrapperType>
        </S.JobInfo>
      </S.JobCover>
      <S.ButtonContainer>
        <p>Follow</p>
        <p>See More</p>
      </S.ButtonContainer>

    </S.Wrapper>
  );
}

export default JobCard;
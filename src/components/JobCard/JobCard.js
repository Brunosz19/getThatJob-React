import * as S from "./styles"

function JobCard({params}) {
  return (
    <S.Wrapper>
      <S.JobCover>
        <p>Imagen</p>
        <S.JobInfo>
          <S.WrapperType>
            {params.category}
          </S.WrapperType>
          <h1>{params.title}</h1>
          <p>the company name</p>
          <S.WrapperType>
            <S.ExtraInfo>{params.job_type}</S.ExtraInfo>
            <S.ExtraInfo>{(params.min_salary/1000).toFixed(1)}k - {(params.max_salary/1000).toFixed(1)}k</S.ExtraInfo>
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
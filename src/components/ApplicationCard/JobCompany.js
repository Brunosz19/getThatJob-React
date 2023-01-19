import * as S from "./styles";

export default function JobCompany({ title, company_info }) {
  return (
    <S.JobAndCompany>
      <img src={company_info?.logo} alt={company_info?.name}></img>
      <div>
        <S.ApplicationsFound>{title}</S.ApplicationsFound>
        <S.ApplicationsSmLetter>{company_info?.name}</S.ApplicationsSmLetter>
      </div>
    </S.JobAndCompany>
  );
}

import * as S from "./styles";

export default function JobCompany({title}) {
  return (
    <S.JobAndCompany>
      {/* <img src={LogoCompany} alt="logo"></img> */}
      <div>
        <S.ApplicationsFound>{title}</S.ApplicationsFound>
        <S.ApplicationsSmLetter>The company name SA</S.ApplicationsSmLetter>
      </div>
    </S.JobAndCompany>
  );
}

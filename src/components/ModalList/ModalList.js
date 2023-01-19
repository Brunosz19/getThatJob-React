import * as S from "../ApplicationCard/styles";

function ModalList({ detailsOpen, experience, why, status }) {

  return (
    <div
      style={{
        padding: "5px 10px",
        display: `${detailsOpen ? "flex" : "none"}`,
        flexDirection: "column",
      }}
    >
      <S.ApplicationFilterConteiner>
        Last Updated on 03/22/21
      </S.ApplicationFilterConteiner>
      <S.ApplicationSubTitle>Professional experience</S.ApplicationSubTitle>
      <S.ApplicationText>{experience}</S.ApplicationText>
      <S.ApplicationSubTitle>
        Why are you interested in working at The company name SA
      </S.ApplicationSubTitle>
      <S.ApplicationText>{why}</S.ApplicationText>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "end",
          gap: "10px",
        }}
      >
        <S.CVButton>DOWNLOAD CV</S.CVButton>
        <S.DeclineButton>DECLINED</S.DeclineButton>
      </div>
    </div>
  );
}

export default ModalList;

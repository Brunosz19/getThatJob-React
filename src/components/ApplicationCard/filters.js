import * as S from "./styles";

function FilterCheckboxs() {
  return (
    <>
      <S.ApplicationFilterTitle>
        FILTER YOUR APPLICATIONS
      </S.ApplicationFilterTitle>
      <S.ApplicationFilterConteiner>
        <input type="checkbox" />
        <S.ApplicationText style={{ color: "#616161" }}>ALL</S.ApplicationText>
        <input type="checkbox" />
        <S.ApplicationText style={{ color: "#616161" }}>
          Waiting
        </S.ApplicationText>
        <input type="checkbox" />
        <S.ApplicationText style={{ color: "#616161" }}>
          In progress
        </S.ApplicationText>
        <input type="checkbox" />
        <S.ApplicationText style={{ color: "#616161" }}>
          Finished
        </S.ApplicationText>
        <input type="checkbox" />
        <S.ApplicationText style={{ color: "#616161" }}>
          Declined
        </S.ApplicationText>
      </S.ApplicationFilterConteiner>
    </>
  );
}

export default FilterCheckboxs;

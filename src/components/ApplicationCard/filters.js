import * as S from "./styles";
import styled from "@emotion/styled";

const StyledRadio = styled("input")`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin: 0;
  border: 2px solid #f48fb1;
  transition: 0.2s all linear;

  &:checked {
    border: 6px solid #f48fb1;
  }

  &:focus {
    color: #f48fb1;
  }

  &:active {
  background-color: white;
  color: black;
  outline: 1px solid black;
}
`;

function FilterCheckboxs() {
  return (
    <>
      <S.ApplicationFilterTitle>
        FILTER YOUR APPLICATIONS
      </S.ApplicationFilterTitle>
      <S.ApplicationFilterConteiner>
        <StyledRadio type="checkbox" />
        <S.ApplicationText style={{ color: "#616161" }}>ALL</S.ApplicationText>
        <StyledRadio type="checkbox" />
        <S.ApplicationText style={{ color: "#616161" }}>
          Waiting
        </S.ApplicationText>
        <StyledRadio type="checkbox" />
        <S.ApplicationText style={{ color: "#616161" }}>
          In progress
        </S.ApplicationText>
        <StyledRadio type="checkbox" />
        <S.ApplicationText style={{ color: "#616161" }}>
          Finished
        </S.ApplicationText>
        <StyledRadio type="checkbox" />
        <S.ApplicationText style={{ color: "#616161" }}>
          Declined
        </S.ApplicationText>
      </S.ApplicationFilterConteiner>
    </>
  );
}

export default FilterCheckboxs;

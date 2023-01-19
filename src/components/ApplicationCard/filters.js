import * as S from "./styles";
import styled from "@emotion/styled";

// const RadioButton = styled.input`
//   appearance: none;
//   height: 18px;
//   width: 18px;
//   border: 1px solid palevioletred;
//   border-radius: 8px;
//   &:checked {
//     height: 16px;
//     width: 16px;
//     background-color: palevioletred;
//   }

//   &:active,
//   &:focus {
//     outline: 1px solid palevioletred;
//     outline-offset: 3px;
//   }
// `;

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

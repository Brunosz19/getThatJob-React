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

function FilterCheckboxs({ filter, setFilter }) {
  const options = ["all", "waiting", "in progress", "finished", "declined"];

  return (
    <>
      <S.ApplicationFilterTitle>
        FILTER YOUR APPLICATIONS
      </S.ApplicationFilterTitle>
      <S.ApplicationFilterConteiner
        onChange={(event) => setFilter(event.target.value)}
      >
        {options.map((option, index) => (
          <>
            <StyledRadio
              type="radio"
              id={`option${index}`}
              name="jobPostingType"
              value={option}
              onClick={(event) => setFilter(event.target.value)}
              checked={option === filter}
            />
            <S.ApplicationText style={{ color: "#616161" }} for="option1">
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </S.ApplicationText>
          </>
        ))}
      </S.ApplicationFilterConteiner>
    </>
  );
}

export default FilterCheckboxs;

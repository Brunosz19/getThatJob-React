import styled from "@emotion/styled";

const StyledContainer = styled("div")`
  display: flex;
  flex-direction: column;
  text-align: start;
`

const StyledLabel = styled("label")`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #B8B8BB;
`

const StyledInput = styled("input")`
  border: none;
  border-bottom: 1px solid black;
  background: inherit;
  ::placeholder {
    color: black;
  }
`

const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  text-align: start;
  height: 360px;
`

const StyledButton = styled("button")`
  border: none;
  border-radius: 30px;
  width: 310px;
  height: 70px;
  background: #FA4A0C;
  cursor: pointer;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: white;
`

function Input({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <StyledContainer>
      {label && <StyledLabel htmlFor={id || name}>{label}</StyledLabel>}
      <StyledInput
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </StyledContainer>
  );
}

export { Input, StyledForm, StyledButton };
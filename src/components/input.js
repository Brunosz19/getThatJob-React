import styled from "@emotion/styled";

const StyledContainer = styled("div")`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 4px;
`

const StyledLabel = styled("label")`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #8E8E8E;
  margin-top: 16px;
`

const StyledInput = styled("input")`
  border: 1px solid #F48FB1;
  border-radius: 8px;
  background: inherit;
  ::placeholder {
    color: #8E8E8E;
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
  width: 80px;
  height: 40px;
  background: #F48FB1;
  cursor: pointer;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: white;
  margin-top: 16px;
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
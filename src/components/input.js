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
  border: 1px solid #F48FB1;
  border-radius: 8px;
  background: #FFFFFF;
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
  border: 1px solid  #F48FB1;
  border-radius: 16px;
  width: 129px;
  height: 40px;
  cursor: pointer;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #616161;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
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
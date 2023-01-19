import styled from "@emotion/styled";

const StyledContainer = styled("div")`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 4px;
`;

const StyledLabel = styled("label")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #373737;
  margin-top: 16px;
`;

const StyledInput = styled("input")`
  border: 1px solid #f48fb1;
  border-radius: 8px;
  background: #ffffff;
  width: 380px;
  height: 36px;
  padding: 8px;
  display: flex;
  ::placeholder {
    color: #8e8e8e;
  }
`;

const StyledSearchInput = styled("input")`
  border: 1px solid #f48fb1;
  border-radius: 8px;
  background: #ffffff;
  width: 380px;
  height: 36px;
  padding: 8px;
  display: flex;
  ::placeholder {
    color: #8e8e8e;
    margin-left: 15px;
  }
`;

const StyledTextArea = styled("textarea")`
  border: 1px solid #f48fb1;
  border-radius: 8px;
  background: #ffffff;
  resize: none;
  row: 10;
  cols: 80;
  padding: 8px;
  ::placeholder {
    color: #8e8e8e;
  };
`;

const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  text-align: start;
  height: 360px;
`;

const StyledButton = styled("button")`
  border: 1px solid #f48fb1;
  border-radius: 16px;
  width: 129px;
  height: 40px;
  cursor: pointer;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  color: #616161;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const StyledInputNumber = styled("input")`
  border: 1px solid #f48fb1;
  border-radius: 8px;
  background: #ffffff;
  width: 500px;
  height: 36px;
  padding-left: 30px;
  display: flex;
  ::placeholder {
    color: #8e8e8e;
  }
`;

function Input({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
  width,
  height,
}) {
  return (
    <StyledContainer>
      {label && <StyledLabel htmlFor={id || name}>{label}</StyledLabel>}
      {type === "textarea" && (
        <StyledTextArea
          id={id || name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          cols={60}
          rows={3}
        />)}
      {type === "number" ? (
          <StyledInputNumber
            id={id || name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={{ width, height }}
          />
        ) : (
        <StyledInput
          id={id || name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{ width, height }}
        />
      )}
    </StyledContainer>
  );
}

export { Input, StyledForm, StyledButton, StyledLabel, StyledSearchInput };

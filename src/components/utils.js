import styled from "@emotion/styled";

const Title = styled("h1")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 61px;
  line-height: 74px;
  text-align: center;
  letter-spacing: -0.5px;
  width: 504px;
  margin-bottom: 32px;
`;

const SubTitle = styled("h1")`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #373737;
`;

const LoginText = styled("p")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 23px;
`;

const ContainerSignUp = styled("div")`
  display: flex;
  align-items: center;
`;

const Container = styled("div")`
  margin: auto;
  padding: 0 80px;
  background: #f5f5f6;
  height: 100vh;
  place-content: center;
  display: flex;
  justify-content: space-around;
`;

const StatusText = styled("h1")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const InformationText = styled("h1")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.5px;
  color: #373737;
`;

const NumberFinished = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  color: white;
  background: #616161;
  border-radius: 66.6667px;
`;

const NumberDisable = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  color: white;
  background: #e1e2e1;
  border-radius: 66.6667px;
`;

const NumberChoosen = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: #f48fb1;
  border-radius: 66.6667px;
`;

const Note = styled("div")`
  width: 380px;
  height: 24px;
  margin: 32px 0 0px 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #616161;
`;

const Advice = styled("div")`
  width: 153px;
  height: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #8e8e8e;
`;

const StyledFileButton = styled("div")`
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
`
export { Title, SubTitle, StyledFileButton, Advice, Note, LoginText, ContainerSignUp, Container, StatusText, InformationText, NumberFinished, NumberDisable, NumberChoosen };
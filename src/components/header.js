import styled from "@emotion/styled";

import Logo from "../styles/img/gtj-logo 1.svg";
import { useAuth } from "../context/auth-context";

const Button = styled("button")`
width: 129px;
height: 40px;
border-radius: 16px;
border: 1px solid  #F48FB1;
`;

export default function Header() {

    const { ChangeLandingPage } = useAuth();
    
    function LandingPageLink(){
        ChangeLandingPage("landing")
    }

    function LoginPageLink(){
        ChangeLandingPage("login")
    }

    function SignUpPageLink(){
        ChangeLandingPage("signup")
    }

    return (
      <div style={{ display: "flex", justifyContent: "space-around", height: "64px", alignItems:"center",}}>
        <button onClick={LandingPageLink} style={{border: "none", background: "white"}}><img src={Logo} alt="Page Logo" style={{width: "126px", height:"40px",}}/></button>
        <div style={{ display: "flex", alignItems: "center", gap: "10px"}}>
          <Button style={{ background: "white", cursor: "pointer"}} onClick={SignUpPageLink}>Sign Up</Button>
          <Button style={{ background: "white", cursor: "pointer"}} onClick={LoginPageLink}>Login</Button>
        </div>
      </div>
    );
}
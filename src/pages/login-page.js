import styled from "@emotion/styled"
import { useState } from "react";
import LoginForm from "../components/login-form"

const LoginTypeButton = styled("button")`
    border: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #8E8E8E;
    line-height: 24px;
    margin-right: 16px;
    margin-bottom: 16px;
`;

const LoginTitle = styled("h1")`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 59px;
    margin-bottom: 16px;
    margin-top: 40px;
`;

const LoginText = styled("p")`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 23px;
`;

export default function LoginPage() {
    const [loginType, setLoginType] = useState("professional");

    function LoginType(type){
        setLoginType(type)
        console.log(loginType)
    }

    return (
        <div style={{display: "flex", justifyContent: "center", alignContent: "center", height: "100vh", width: "100pvw",}}>
            <div style={{width: "360px",}}>
                <div>
                    <LoginTitle>Welcome back</LoginTitle>
                    <LoginText>Login to you account as...</LoginText>
                    {loginType === "professional" && (
                        <>
                            <LoginTypeButton style={{color: "#373737", borderBottom: "2px solid #F48FB1"}} onClick={() => LoginType("professional")}>PROFESSIONAL</LoginTypeButton>
                            <LoginTypeButton style={{borderBottom: "2px solid #8E8E8E"}} onClick={() => LoginType("recruiter")}>RECRUITER</LoginTypeButton>
                        </>
                    )}
                    {loginType === "recruiter" && (
                        <>
                            <LoginTypeButton style={{borderBottom: "2px solid #8E8E8E"}} onClick={() => LoginType("professional")}>PROFESSIONAL</LoginTypeButton>
                            <LoginTypeButton style={{color: "#373737", borderBottom: "2px solid #F48FB1 "}} onClick={() => LoginType("recruiter")}>RECRUITER</LoginTypeButton>
                        </>
                    )}
                    <LoginForm type={loginType}/>
                </div>
                <img></img>
            </div>
        </div>
    )
}
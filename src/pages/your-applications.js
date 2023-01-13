import styled from "@emotion/styled";
import { useState } from "react";
import LogoCompany from "../styles/img/LogoCompany.svg";

const ApplicationFilterTitle = styled("p")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  margin-top: 24px;
  letter-spacing: 1.5px;
`;

const ApplicationsTitle = styled("h1")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 41px;
  letter-spacing: 0.25px;
`;

const ApplicationFilterConteiner = styled("div")`
  display: flex;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
`;

const ApplicationsFound = styled("h2")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;

const ApplicationsSmLetter = styled("p")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #616161;
`;

const ApplicationsmmLetter = styled("p")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1px;
  color: #616161;
`;

const ApplicationSubTitle = styled("h3")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #bf5f82;
  margin: 10px 0 16px;
`;

const ApplicationText = styled("p")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  margin-right: 10px;
`;

const DeclineButton = styled("button")`
  padding: 8px 16px;
  gap: 8px;
  width: 242px;
  height: 40px;
  background: #bf5f82;
  border-radius: 16px;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CVButton = styled("button")`
  width: 242px;
  height: 40px;
  border-radius: 16px;
  border: 1px solid #f48fb1;
`;

export default function YourApplications() {
  const [detailsOpen, setDetailsOpen] = useState("none");

  function ExpandedButton(selected) {
    if (selected === detailsOpen) {
      return setDetailsOpen("none");
    }
    setDetailsOpen(selected);
  }

  return (
    <div>
      <ApplicationsTitle>Your Applications</ApplicationsTitle>
      <div>
        <ApplicationFilterTitle>
          FILTER YOUR APPLICATIONS
        </ApplicationFilterTitle>
        <ApplicationFilterConteiner>
          <input type="checkbox" />
          <ApplicationText style={{ color: "#616161" }}>ALL</ApplicationText>
          <input type="checkbox" />
          <ApplicationText style={{ color: "#616161" }}>
            Waiting
          </ApplicationText>
          <input type="checkbox" />
          <ApplicationText style={{ color: "#616161" }}>
            In progress
          </ApplicationText>
          <input type="checkbox" />
          <ApplicationText style={{ color: "#616161" }}>
            Finished
          </ApplicationText>
          <input type="checkbox" />
          <ApplicationText style={{ color: "#616161" }}>
            Declined
          </ApplicationText>
        </ApplicationFilterConteiner>
        <ApplicationsFound style={{ marginTop: "16px" }}>
          4 applications found
        </ApplicationsFound>
        <div
          style={{
            marginTop: "8px",
            marginBottom: "16px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
            border: "1px solid #E1E2E1",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "100%",
              widht: "100%",
              alignItems: "center",
              padding: "5px 10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={LogoCompany}></img>
              <div>
                <ApplicationsFound>The job title</ApplicationsFound>
                <ApplicationsSmLetter>The company name SA</ApplicationsSmLetter>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex" }}>
                <ApplicationsmmLetter style={{ marginRight: "10px" }}>
                  Manufactoring
                </ApplicationsmmLetter>
                <ApplicationsmmLetter>Full Time</ApplicationsmmLetter>
              </div>
              <div style={{ display: "flex", width: "200px" }}>
                <ApplicationsmmLetter style={{ marginRight: "10px" }}>
                  2.0k - 2.5k
                </ApplicationsmmLetter>
                <ApplicationsmmLetter>Posted 2 days ago</ApplicationsmmLetter>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <ApplicationsmmLetter
                style={{ width: "80px", textAlign: "center" }}
              >
                Send 1 min ago
              </ApplicationsmmLetter>
              <ApplicationsmmLetter
                style={{ width: "80px", textAlign: "center" }}
              >
                Waiting for review
              </ApplicationsmmLetter>
              <button
                onClick={() => {
                  ExpandedButton("hola");
                }}
              >
                v
              </button>
            </div>
          </div>
          <div
            style={{
              padding: "5px 10px",
              display: `${detailsOpen === "hola" ? "flex" : "none"}`,
              flexDirection: "column",
            }}
          >
            <ApplicationFilterConteiner>
              Last Updated on 03/22/21
            </ApplicationFilterConteiner>
            <ApplicationSubTitle>Professional experience</ApplicationSubTitle>
            <ApplicationText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              feugiat quam ut tempor maximus. Sed neque arcu, rhoncus elementum
              sodales a, tristique sed quam. Aliquam nibh velit, pharetra ac
              faucibus in, ornare eu tortor. Vestibulum lacus ligula, elementum
              sit amet purus ut, sagittis molestie ex. In hendrerit orci tellus.
              Integer pharetra porttitor nulla, nec fringilla dolor ultricies
              et. Integer accumsan feugiat urna, eu hendrerit dui varius sit
              amet. Mauris eget tristique turpis. Curabitur eget hendrerit
              turpis. Etiam rutrum dolor eu posuere vehicula.Pellentesque ut
              mauris neque. Maecenas posuere sit amet erat at placerat. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              potenti. Donec tempor lobortis nisl. Maecenas sit amet massa in
              tortor pulvinar sollicitudin. Fusce vitae feugiat felis, ut
              malesuada purus. Curabitur felis velit, interdum vitae viverra
              quis, sagittis ac nulla. Quisque tempus pharetra ornare. In sed
              nulla eget risus cursus facilisis vel quis nibh. Praesent euismod
              lectus a.
            </ApplicationText>
            <ApplicationSubTitle>
              Why are you interested in working at The company name SA
            </ApplicationSubTitle>
            <ApplicationText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              egestas ex at libero feugiat volutpat. Praesent fringilla
              scelerisque felis, ac elementum metus fringilla in. Maecenas et
              nibh fringilla, egestas arcu vel, tristique dui. Nulla quis
              suscipit erat, nec pretium arcu. Aenean blandit lacinia mauris,
              quis bibendum ante sagittis cursus. Pellentesque mattis ipsum et
              lorem euismod rutrum. Duis ullamcorper venenatis nisi, nec
              malesuada tellus tincidunt a. Maecenas suscipit odio sed justo
              accumsan iaculis. Quisque vitae erat ac felis tincidunt auctor
              vitae non est. Praesent vehicula feugiat faucibus.
            </ApplicationText>
            <div
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "end",
                gap: "10px",
              }}
            >
              <CVButton>DOWNLOAD CV</CVButton>
              <DeclineButton>DECLINED</DeclineButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

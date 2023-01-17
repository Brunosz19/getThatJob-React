import { useState } from "react"
import * as S from "./styles"
import FilterCheckboxs from "./filters";

function ApplicationCard() {
  const [detailsOpen, setDetailsOpen] = useState("none");

  function ExpandedButton(selected) {
    if (selected === detailsOpen) {
      return setDetailsOpen("none");
    }
    setDetailsOpen(selected);
  }

  return (
    <div>
      <S.ApplicationsTitle>Your Applications</S.ApplicationsTitle>
      <div>
        <FilterCheckboxs />
        <S.ApplicationsFound style={{ marginTop: "16px" }}>
          4 applications found
        </S.ApplicationsFound>
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
              {/* <img src={LogoCompany} alt="logo"></img> */}
              <div>
                <S.ApplicationsFound>The job title</S.ApplicationsFound>
                <S.ApplicationsSmLetter>The company name SA</S.ApplicationsSmLetter>
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
                <S.ApplicationsmmLetter style={{ marginRight: "10px" }}>
                  Manufactoring
                </S.ApplicationsmmLetter>
                <S.ApplicationsmmLetter>Full Time</S.ApplicationsmmLetter>
              </div>
              <div style={{ display: "flex", width: "200px" }}>
                <S.ApplicationsmmLetter style={{ marginRight: "10px" }}>
                  2.0k - 2.5k
                </S.ApplicationsmmLetter>
                <S.ApplicationsmmLetter>Posted 2 days ago</S.ApplicationsmmLetter>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <S.ApplicationsmmLetter
                style={{ width: "80px", textAlign: "center" }}
              >
                Send 1 min ago
              </S.ApplicationsmmLetter>
              <S.ApplicationsmmLetter
                style={{ width: "80px", textAlign: "center" }}
              >
                Waiting for review
              </S.ApplicationsmmLetter>
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
            <S.ApplicationFilterConteiner>
              Last Updated on 03/22/21
            </S.ApplicationFilterConteiner>
            <S.ApplicationSubTitle>Professional experience</S.ApplicationSubTitle>
            <S.ApplicationText>
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
            </S.ApplicationText>
            <S.ApplicationSubTitle>
              Why are you interested in working at The company name SA
            </S.ApplicationSubTitle>
            <S.ApplicationText>
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
            </S.ApplicationText>
            <div
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "end",
                gap: "10px",
              }}
            >
              <S.CVButton>DOWNLOAD CV</S.CVButton>
              <S.DeclineButton>DECLINED</S.DeclineButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default ApplicationCard
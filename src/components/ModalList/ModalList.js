import * as S from "../ApplicationCard/styles"

function ModalList({ detailsOpen }){
  return (<div
            style={{
              padding: "5px 10px",
              display: `${detailsOpen ? "flex" : "none"}`,
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
          </div>)
}

export default ModalList
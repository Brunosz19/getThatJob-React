import * as S from "./styles"

export default function JobStatus({onClick}){
  return (<div style={{ display: "flex" }}>
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
    onClick={onClick}
  >
    v
  </button>
</div>)
}
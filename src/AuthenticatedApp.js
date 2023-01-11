import { Route, Routes } from "react-router-dom";

function AuthenticatedApp() {
  function Home(){
    return(
      <h1>Homeeeee</h1>  
    )
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;

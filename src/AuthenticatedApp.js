import { Route, Routes } from "react-router-dom";

function AuthenticatedApp() {
  function Home(){
    return(
      <h1>home</h1>  
    )
  }

  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;

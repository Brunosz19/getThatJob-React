import { Route, Routes } from "react-router-dom";
import ApplicationJob from "./pages/application-job-page";

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
        <Route path="/jobapp" element={<ApplicationJob />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;

import styled from "@emotion/styled";
import { colors } from "./styles/colors";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import JobPage from "./pages/job-page";
// import RecruiterProfilePage from "./pages/recruiter-profile";
import CreateJob from "./pages/create-job";

const Container = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  background-color: ${colors.gray[50]};
  height: 100vh;
`;

const MainContainer = styled.main`
  padding: 1.5rem 2rem;
`;

function AuthenticatedApp() {
  return (
    <Container>
      <Sidebar />
      <MainContainer>
        <Routes>
          <Route index element={<Navigate to="find-that-job" />} />
          {/* <Route path="/company/profile" element={<RecruiterProfilePage />} /> */}
          <Route path="/find-that-job" element={<JobPage />} />
          <Route path="/new-job" element={<CreateJob />} />


          {/* <Route path="/categories/:type" element={<CategoriesPage />} />
          <Route path="/transactions" element={<h1>Transactions</h1>} />
          <Route path="/budgets" element={<h1>Budgets</h1>} /> */}
        </Routes>
      </MainContainer>
    </Container>
  );
}

export default AuthenticatedApp;

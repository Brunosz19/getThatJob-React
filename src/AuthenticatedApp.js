import styled from "@emotion/styled";
import { colors } from "./styles/colors";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import JobPage from "./pages/job-page";
import RecruiterProfilePage from "./pages/recruiter-profile";
import CreateJob from "./pages/create-job";
import FollowingPage from "./pages/following-page"
import YourApplications from "./pages/your-applications"
import JobPosting from "./pages/job-posting-page";
import JobPostingDetails from "./pages/job-posting-details";
import RecruiterProfilePage from "./pages/recruiter-profile";
import ProfessionalProfilePage from "./pages/professional-profile";

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
          <Route index path="/find-that-job" element={<JobPage />} />
          <Route path="/find-that-job" element={<JobPage />} />
          <Route path="/following" element={<FollowingPage />} />
          <Route path="/job-posting" element={<JobPosting />} />
          <Route path="/your-applications" element={<YourApplications />} />
          <Route path="/new-job" element={<CreateJob />} />
          <Route path="/job-posting/details" element={<JobPostingDetails />} />
          <Route path="/recruiter/profile" element={<RecruiterProfilePage />} />
          <Route path="/professional/profile" element={<ProfessionalProfilePage />} />
          {/* <Route path="/categories/:type" element={<CategoriesPage />} />
          <Route path="/transactions" element={<h1>Transactions</h1>} />
          <Route path="/budgets" element={<h1>Budgets</h1>} /> */}
          {/* <Route
          path="*"
          element={<Navigate to="/find-that-job" replace />}
          /> */}
        </Routes>
      </MainContainer>
    </Container>
  );
}

export default AuthenticatedApp;

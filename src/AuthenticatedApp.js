import styled from "@emotion/styled";
import { colors } from "./styles/colors";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import { useAuth } from "./context/auth-context";
import CreateJob from "./pages/create-job";
import JobPostingDetails from "./pages/job-posting-details";
import JobPosting from "./pages/job-posting-page";
import RecruiterProfilePage from "./pages/recruiter-profile";
import FollowingPage from "./pages/following-page";
import JobPage from "./pages/job-page";
import ProfessionalProfilePage from "./pages/professional-profile";
import JobDetails from "./pages/job-details-page";
import ApplicationJob from "./pages/application-job-page";
import YourApplications from "./pages/your-applications";

const Container = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  background-color: ${colors.gray[50]};
  height: 100vh;
`;

const MainContainer = styled.main`
  padding: 1.5rem 2rem;
`;

export default function AuthenticatedApp() {
  const { user } = useAuth();

  return (
    <Container>
      <Sidebar />
      <MainContainer>
        {user.role === "recruiter" ? (
          <Routes>
            <Route path="/professional/job/:id" element={< JobPostingDetails />} />
            <Route index element={<JobPosting />} />
            <Route path="/job-posting" element={<JobPosting />} />
            <Route path="/new-job" element={<CreateJob />} />
            <Route
              path="/recruiter/profile"
              element={<RecruiterProfilePage />}
            />
            <Route path="*" element={<JobPosting />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/professional/job/appli/:id" element={< ApplicationJob />} />
            <Route path="/professional/job/:id" element={< JobDetails />} />
            <Route index element={<JobPage />} />
            <Route path="/find-that-job" element={<JobPage />} />
            <Route path="/following" element={<FollowingPage />} />
            <Route path="/your-applications" element={<YourApplications />} />
            <Route
              path="/professional/profile"
              element={<ProfessionalProfilePage />}
            />
            <Route path="*" element={<JobPage />} />
          </Routes>
        )}
      </MainContainer>
    </Container>
  );
}

//export default AuthenticatedApp;

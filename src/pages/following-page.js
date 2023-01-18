import JobsList from "../components/JobsList";
import { useAuth } from "../context/auth-context";

function FollowingPage() {
  const { user } = useAuth();
  return (
    <>
      <h1>Following Page</h1>
      <p>You are following {user.following_jobs.length} jobs</p>
      <JobsList props={user.following_jobs} />

      <p>You are following {user.following_companies.length} companies</p>
      <JobsList props={user.following_companies} type={"company"} />
    </>
  );
}

export default FollowingPage;

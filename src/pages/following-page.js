import JobsList from "../components/JobsList";
import { useAuth } from "../context/auth-context";

function FollowingPage() {
  const { user } = useAuth();
  return (
    <>
      <h1>Following Page</h1>
      <JobsList props={user.following_jobs} />

      <JobsList props={user.following_companies} type={"company"} />
    </>
  );
}

export default FollowingPage;

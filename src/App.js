import AuthenticatedApp from "./AuthenticatedApp";
import { useAuth } from "./context/auth-context";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
  const { user } = useAuth();
  console.log(user);
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
  // return <AuthenticatedApp />;
}

export default App;

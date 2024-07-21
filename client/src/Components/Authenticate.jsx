import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";

const Authenticate = () => {
  const { user, isLoaded } = useUser();
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route
          path="/"
          element={
            isLoaded && !user ? (
              <Navigate to={"/sign-in"} />
            ) : (
              <SignedIn>
                <Home />
              </SignedIn>
            )
          }
        />
        <Route
          path="*"
          element={
            <SignedOut>
              <Navigate to="/sign-in" />
            </SignedOut>
          }
        />
      </Routes>
    </Router>
  );
};

export default Authenticate;

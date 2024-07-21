import { useUser } from "@clerk/clerk-react";
import "./App.css";
import Authenticate from "./Components/Authenticate";
function App() {
  const { isLoaded } = useUser();
  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        Loading ...
      </div>
    );
  }
  return (
    <>
      <Authenticate />
    </>
  );
}

export default App;

import { SignUp } from "@clerk/clerk-react";

const Signup = () => (
  <div className="flex justify-center items-center w-screen h-screen">
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </div>
);

export default Signup;

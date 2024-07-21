import { SignIn } from "@clerk/clerk-react";

const Signin = () => (
  <div className="flex justify-center items-center w-screen h-screen">
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </div>
);

export default Signin;

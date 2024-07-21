import { useUser, useClerk } from "@clerk/clerk-react";
const Home = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  console.log(user);
  return (
    <>
      <div className="flex justify-center bg-slate-300 relative">
        <h1 className="text-3xl">Welcome to home</h1>
        <h1
          className="absolute top-1 right-5 cursor-pointer"
          onClick={() => signOut()}
        >
          Logout?
        </h1>
      </div>
      <div className="user-info">
        <div className="flex justify-center mt-5">
          <img src={user?.imageUrl} alt="" className="w-40 h-40 rounded-full" />
        </div>
        <h1 className="text-center text-5xl">{user?.fullName}</h1>
        <h1 className="text-center text-2xl">
          {user?.primaryEmailAddress.emailAddress}
        </h1>
      </div>
    </>
  );
};

export default Home;

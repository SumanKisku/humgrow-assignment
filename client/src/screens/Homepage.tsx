import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-slate-100 text-gray-800">
      <div className="p-4">
        <h1 className="font-bold text-gray-900 text-4xl">
          Make your dream career a reality
        </h1>
        <div className="flex gap-4 justify-center mt-10">
          <Link to={"/signup"}>
            <Button>Sign Up</Button>
          </Link>
          <Link to={"/login"}>
            <Button>Log In</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

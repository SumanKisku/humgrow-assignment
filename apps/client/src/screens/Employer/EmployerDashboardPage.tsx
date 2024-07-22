// import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployerDashboardPage = () => {
  const navigate = useNavigate();
  const [authData, setAuthData] = useState(null);
  const userData = useAuth();

  const handleLogout = async () => {
    await fetch("http://localhost:3000/api/user/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    setAuthData(null);
    navigate("/login");
  };
  useEffect(() => {
    setAuthData(userData);
  }, [userData]);

  return (
    <>
      {authData ? (
        <>
          <Navbar name={authData} handleLogout={handleLogout} />

          {/* Create new job post button */}
          <div className="absolute bottom-10 right-10">
            <Link to={`/employer/create-job`}>
              <Button title="Create New Job Post" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </>
      ) : (
        "Not authorized"
      )}
    </>
  );
};

export default EmployerDashboardPage;

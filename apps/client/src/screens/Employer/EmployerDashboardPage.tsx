// import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployerDashboardPage = () => {
  const navigate = useNavigate();
  const [authData, setAuthData] = useState(null);
  const data = useAuth();

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
    setAuthData(data);
  }, [data]);
  return (
    <>
      {authData ? (
        <>
          <Navbar name={authData} handleLogout={handleLogout} />
          <div>
            <Button>Create a new job ppost</Button>
          </div>
        </>
      ) : (
        "Not authorized"
      )}
    </>
  );
};

export default EmployerDashboardPage;

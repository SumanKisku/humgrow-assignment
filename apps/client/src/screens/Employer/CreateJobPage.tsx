import JobForm from "@/components/JobForm";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateJobPage = () => {
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
      {authData && (
        <>
          <Navbar name={authData} handleLogout={handleLogout} />
          <JobForm email={userData.data.email} />
        </>
      )}
    </>
  );
};

export default CreateJobPage;

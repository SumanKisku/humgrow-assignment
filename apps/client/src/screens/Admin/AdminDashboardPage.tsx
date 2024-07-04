// import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboardPage = () => {
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
    <div>
      <h1>Dashboard</h1>
      <div>
        {authData ? (
          <div>
            {JSON.stringify(authData)}
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          "Not authorized"
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage;

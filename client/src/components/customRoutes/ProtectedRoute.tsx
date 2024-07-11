import { useEffect, useState } from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = ({
  role,
  component: Component,
  ...rest
}: {
  role: string;
  component: React.ReactNode;
}) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await fetch(`/api/check-auth?role=${role}`, {
          method: "POST",
          credentials: "include",
        }).then(async (data) => {
          const result = await data.json();
          if (result.status == "ok") {
            setIsAuthorized(true);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    checkAuth();
  }, [role]);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorized ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;

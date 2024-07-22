import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
export const useAuth = () => {
    const { data } = useQuery({
        queryKey: ['authorized'],
        queryFn: async () => {
            try {
                const response = await fetch("http://localhost:3000/api/user/isauthorized", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then((data) => data.json())
                return response;
            } catch (error) {
                console.log(error);
            }
        }
    })
    return data;
};

export const useLogout = () => {
    const navigate = useNavigate();
    useQuery({
        queryKey: ['logout'],
        queryFn: () => {
            fetch("http://localhost:3000/api/user/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
        }
    })
    navigate("/login");
};

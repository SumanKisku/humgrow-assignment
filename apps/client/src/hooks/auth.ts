import { useQuery } from "@tanstack/react-query";
export const useAuth = () => {
    console.log("auht is called");

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
    console.log("🚀 ~ useAuth ~ data:", data)
    return data;
};

import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/user/isauthorized", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const result = await response.json();
                if (result.status === "ok") {
                    setUser(result.data);
                } else {
                    setUser(null);
                }
            } catch (error) {
                setUser(null);
            }
        };
        fetchData();
    }, []);

    return user;
};

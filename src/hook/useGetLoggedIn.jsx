import { useEffect, useState } from "react";

const useGetLoggedIn = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loggedIn = localStorage.getItem('loggedIn');
        setLoggedIn(loggedIn);
        setLoading(false);
    }, [])

    return {loggedIn: JSON.parse(loggedIn), loading, setLoggedIn};
};

export default useGetLoggedIn;
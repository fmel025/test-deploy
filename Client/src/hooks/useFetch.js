import axios from "../utils/axios"
import { useAuth } from "./useAuth"
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { token } = useAuth();

    useEffect(() => {
        const source = new AbortController();
        const fetchData = async () => {
            try {
                const response = await axios.get(url, {
                    signal: source.signal, // Signal to abort
                    headers: {
                        Authorization: `Bearer ${token}`, // Use the token here
                    },
                });
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                } else {
                    setError(error);
                }
                setIsLoading(false);
            }
        };

        fetchData();

        return () => {
            source.abort();
        }

    }, [url, token]);

    return { data, isLoading, error };
}
export default useFetch;
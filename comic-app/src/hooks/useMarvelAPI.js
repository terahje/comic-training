import { useState, useEffect } from "react";

function useMarvelAPI(url) {
    const [comics, setComics] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setComics(json.data.results);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
            console.log("failed to fetch", err);
        }
    }

    useEffect(() => {
        setTimeout(()=>{
            fetchData();
        }, 1000)
    }, [])

    return {comics, error, loading}
}

export { useMarvelAPI }
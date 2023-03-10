import { useState, useEffect } from "react";
import { ComicProps } from "../types"

function useMarvelAPI(url: string): {loading: boolean, comics: ComicProps[], error: string | unknown} {
    const [comics, setComics] = useState<ComicProps[]>([]);
    const [error, setError] = useState<string | unknown>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setComics(json);
                setLoading(false);
            } catch (err) {
                setError(error);
                setLoading(false);
                console.log("failed to fetch", err);
            }
        }
        fetchData();
    }, [url])

    return {comics, error, loading}
}

export { useMarvelAPI }
import { useState, useEffect } from "react";
import { ComicProps, FetchedResult } from "../types"

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
				
				const { results } = json.data;

				const newResults = results.map((comic: FetchedResult) => {
					const {
						id,
						thumbnail: img,
						creators: { items: creators },
						issueNumber,
						title,
						modified: publishDate,
					} = comic;
					const thumbnail = `${img.path}.${img.extension}`;

					return { id, thumbnail, creators, issueNumber, title, publishDate };
				});
					
				setComics(newResults);
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
import { useState, useEffect } from "react";
import { ComicProps, FetchedResult } from "../types"

function useMarvelAPI(url: string): {loading: boolean, comics: ComicProps[], error: string | unknown, total: number,} {
	const [comics, setComics] = useState<ComicProps[]>([]);
	const [error, setError] = useState<string | unknown>(null);
	const [loading, setLoading] = useState(false);
	const [total, setTotal] = useState<number>(0);

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
						characters: {items: characters },
						dates,
					} = comic;
					const thumbnail = `${img.path}.${img.extension}`;

					return { id, thumbnail, creators, issueNumber, title, dates, characters };
				});
					
				setComics(newResults);
				setTotal(json.data.total)
				setLoading(false);
			} catch (err) {
				setError(error);
				setLoading(false);
				console.log("failed to fetch", err);
			}
		}
		fetchData();
	}, [url])
	
	return {comics, error, loading, total}
}

export { useMarvelAPI }
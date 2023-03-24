import styles from '../styles/Home.module.css';
import { useState, useEffect, useRef } from 'react';
import { ComicList } from '../components/ComicList';
import { Hero } from '../components/Hero';
import { Intro } from '../components/Intro';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FavoriteList } from '../components/Favorites';
import { Filter } from '../components/Filter';
import { Pager } from '../components/Pager';
import { Favorites } from '../types';
import { useMarvelAPI } from '../hooks/useMarvelAPI';
import viewPortSize from '../hooks/useIsMobile';

const publicKey: string = process.env.NEXT_PUBLIC_MARVEL_KEY;

export let API_URL = `https://gateway.marvel.com:443/v1/public/comics?limit=15&offset=0&apikey=${publicKey}`


export default function Home() {
	const [favorites, setFavorites] = useState<Favorites[]>([]);
	const [query, setQuery] = useState<string>(API_URL);
	const [characterId, setCharacterId] = useState<string>('');
	const [creatorId, setCreatorId] = useState<string>('');
	const [offset, setOffset] = useState<number>(0);
	const { comics, total, loading, error } = useMarvelAPI(query);
	const limit = 15;
	let initialRender = useRef(true);
	const [isMobile] = viewPortSize();

	useEffect(() => {
		const favoriteComicsList = localStorage.getItem("Favorite_Comics");
		if (favoriteComicsList) {
			setFavorites(JSON.parse(favoriteComicsList));
		}
	}, []);

	useEffect(() => {
		if (!initialRender.current) {
			let newQuery: string;

			if (characterId !== '' && creatorId === '') {
				newQuery=`https://gateway.marvel.com/v1/public/comics?characters=${characterId}&limit=${limit}&offset=${offset}&apikey=${publicKey}`
			} else if (characterId === '' && creatorId !== '') {
				newQuery=`https://gateway.marvel.com/v1/public/comics?creators=${creatorId}&limit=${limit}&offset=${offset}&apikey=${publicKey}`
			} else if (characterId !== '' && creatorId !== '') {
				newQuery = `https://gateway.marvel.com/v1/public/comics?creators=${creatorId}&characters=${characterId}&limit=${limit}&offset=${offset}&apikey=${publicKey}`
			} else {
				newQuery = `https://gateway.marvel.com/v1/public/comics?limit=${limit}&offset=${offset}&apikey=${publicKey}`;
			}

			setQuery(newQuery);
		}
		
		return () => {
			initialRender.current = false;
		}
	}, [characterId, creatorId, offset]);

	function updateFilter(event: any): void {
		const target = event.target as HTMLSelectElement;
		const id = target.value;
		const name = target.name;

		//Set offset back to zero
		setOffset(0);
		name === 'characterFilter' ? setCharacterId(id) : setCreatorId(id)
	}

	function handlePagination(event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>): void {
		const target = event.currentTarget;
		const name = target.name;

		if (name === 'prev') {
			if (offset === 0) {
				return;
			} else {
				setOffset(prev => prev - limit);
			}
		} else {
			if (offset + 15 > total) {
				return;
			} else {
				setOffset(prev => prev + limit);
			}
		}
	}

	return (
		<>
			<Header favCapcity={favorites.length}/>
			<Hero/>
			<Intro/>
			<div className={styles.comicPanel}>
				<div className={styles.mainCont}>
					<Filter favorites={favorites} setFavorites={setFavorites} updateFilter={updateFilter}></Filter>
					<ComicList comics={comics} loading={loading} error={error} favorites={favorites} setFavorites={setFavorites}/>
					<Pager total={total} firstComic={offset} limit={limit} handlePagination={handlePagination}/>
				</div>
				{isMobile ? (
					<div className={styles.mobileFavs}>
						<FavoriteList handleCloseButtonClick={() => null} favorites={favorites} setFavorites={setFavorites} />
					</div>
				) : (
					<div className={styles.desktopFavs}>
						<FavoriteList handleCloseButtonClick={() => null} favorites={favorites} setFavorites={setFavorites} />
					</div>
				)}
			</div>
			<Footer/>
		</>
	)
}

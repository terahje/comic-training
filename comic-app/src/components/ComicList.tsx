import { useState, useEffect, useRef } from 'react'
import Comic from "./Comic";
import styles from '../styles/Comic.module.css'
import PacmanLoader from "react-spinners/PacmanLoader";
import { ComicProps } from '../types';

export function ComicList({favorites, setFavorites, comics, error, loading }) {

	return (
		<>
			<div className={styles.comicGrid}>
				{loading ? (
						<PacmanLoader 
							color={"#C24868"}
							loading={loading}
							className={styles.loading}
							size={50}
							aria-label="Loading Spinner"
							data-testid="loader"
						/>
					) :error ? (
						<div>Page Not Found!</div>
					) : (
						comics?.map((comic: ComicProps) => 
						<Comic key={comic.id} comic={comic} favorites={favorites} setFavorites={setFavorites}/>)
				)}
			</div>
		</>
	)
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../styles/Comic.module.css';
import { ComicProps } from "../types";

import {
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";

type buttonProps = {
	comicProps: ComicProps;
	isFavorite: ComicProps;
	isFavoritesFull: boolean;
	favorites: any;
	setFavorites: any;
}

type addToFavorites = () => void
type removeFromFavorites = () => void;

export default function BoltButton ({ comicProps, favorites, setFavorites, isFavorite, isFavoritesFull }: buttonProps) {


	function addToFavorites(): addToFavorites {
		if(isFavoritesFull) return;

		setFavorites(prevFavorites => {
			const newFavorites: ComicProps[] = [...prevFavorites, {...comicProps}]
			localStorage.setItem(
				"Favorite_Comics",
				JSON.stringify(newFavorites)
			);
			return newFavorites;
		});
	}

	function removeFromFavorites(): removeFromFavorites {
		setFavorites(prevFavorites => {
			const newFavorites: ComicProps[] = [...prevFavorites]
			const index: number = prevFavorites.findIndex(favorite => favorite.id === comicProps.id);
			newFavorites.splice(index, 1);
			localStorage.setItem(
				"Favorite_Comics",
				JSON.stringify(newFavorites)
			);
			return newFavorites;
		});
		return;
	}
	

	return (
		<button className={`${styles.button} ${isFavorite && styles.selected}`} onClick={!isFavorite ? addToFavorites : removeFromFavorites}>
			<FontAwesomeIcon
				icon={faBoltLightning}
				style={{ fontSize: 16, color: "white" }}
			/>
		</button>
	 );
}

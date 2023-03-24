import Image from 'next/image';
import { ComicProps, Thumbnail } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Favorites.module.css';

type FavoriteDetailProp = {
	key: number;
	id: number;
	title: string;
	issueNumber: number;
	thumbnail: Thumbnail;
	favorites: any;
	setFavorites: any;
}

type removeFromFavorites = () => void;


export default function FavoritesDetail({ favorites, setFavorites}:  FavoriteDetailProp ) {

	const { id, title, issueNumber, thumbnail } = favorites

	function removeFromFavorites(): removeFromFavorites {
		setFavorites(favorites => {
			const newFavorites: ComicProps[] = [...favorites]
			const index: number = favorites.findIndex(favorite => favorite.id === id);
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
		<div className={styles.favSlide}>
			<div className={styles.imgCont}>
				<button
					className={styles.removeButton}
					onClick={removeFromFavorites}
				>
					<FontAwesomeIcon icon={faTimes} style={{ color: "#C24868" }}/>
				</button>
				<Image
					src={thumbnail}
					alt={title}
					className={styles.img}
					width={50}
					height={75}
					blurDataURL='blurDataURL'
					placeholder='blur'
					sizes="(min-width 64em) height={276} "
				/>
			</div>
			<div className={styles.contentSection}>
				<h5 className={styles.slideTitle}>{title}</h5>
				<span className={styles.issueNumber}>Issue: {issueNumber}</span>
			</div>
		</div>
	)
}
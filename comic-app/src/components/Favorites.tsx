import React from 'react';
import styles from '../styles/Favorites.module.css';
import FavoritesDetail from './FavoritesDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { Thumbnail } from '../types';
  
interface Props {
	favorites: any;
	setFavorites: any;
	handleCloseButtonClick: React.MouseEventHandler;
}

export const FavoriteList = ({ favorites, setFavorites, handleCloseButtonClick }: Props) => {

	return ( 
		<div className={styles.favCont}>
			<div className={styles.favorites}>
				<h3>Favorites</h3>
			</div>
			<div className={styles.favComicList}>
					{
						favorites.map((favorites: { id: number; title: string; issueNumber: number; thumbnail: Thumbnail; }) => {
							return (
								<FavoritesDetail 
									key={favorites.id}
									id={favorites.id}
									title={favorites.title}
									issueNumber={favorites.issueNumber}
									thumbnail={favorites.thumbnail}
									favorites={favorites}
									setFavorites={setFavorites}
								/>
							)
						})
					}
			</div>
			<button
				className={styles.closeButton}
				onClick={handleCloseButtonClick}
			>
				Hide Favorites
				<FontAwesomeIcon icon={faBoltLightning} aria-hidden='true' />
			</button>
		</div>
		
	)
}
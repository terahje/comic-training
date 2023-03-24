import { useState } from 'react';
import { FavoriteList } from '../components/Favorites';
import Options from './Options';
import { FilterButton } from './FilterButton';
import { faBoltLightning, faFilter } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Filter.module.css'
import { Favorites } from '../types';

interface FilterProps {
	updateFilter(event: React.ChangeEvent): void;
	handleCloseButtonClick: React.MouseEventHandler;
	favorites: Favorites;
	setFavorites: Favorites;
}

export const Filter = ({ updateFilter, favorites, setFavorites} : FilterProps) => {
	const [showFavorites, setShowFavorites] = useState<boolean>(false);
	const [showFilterOptions, setShowFilterOptions] = useState<boolean>(false);

	return (
		<>
		<div className={`${styles.mobileFilter} ${showFavorites ? styles["dropdown-open"] : ""}` }>
			<div className={styles.mobileFilterInner}>
				<FilterButton caption={"Filter"} icon={faFilter} handleClick={() => {
							setShowFavorites(false);
							setShowFilterOptions(!showFilterOptions)
						}}
					/>
				<FilterButton caption={!showFavorites ? "Show Favorites" : "Hide Favorites"} icon={faBoltLightning} handleClick={() => {
						setShowFilterOptions(false)
						setShowFavorites(!showFavorites)
					}}
				/>
			</div>
			{showFilterOptions &&
				<Options updateFilter={updateFilter} />
			}
			{showFavorites &&
				<FavoriteList handleCloseButtonClick={() => setShowFavorites(!showFavorites)} favorites={favorites} setFavorites={setFavorites}/>
			}
		</div>
		<div className={styles.desktopFilter}>
			<span className={styles.filterLabel}>Filter By: </span>
				<Options updateFilter={updateFilter} />
		</div>
		</>
	)
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from '../styles/Filter.module.css';

type FilterButton = {
	caption: string;
	icon: IconDefinition;
	handleClick : React.MouseEventHandler;
}

export const FilterButton = ({ caption, icon, handleClick }: FilterButton) => {
	return (
		<button 
			className={styles.filterButton}
			onClick={handleClick}
		>
			{caption}
			<FontAwesomeIcon icon={icon} />
		</button>
	)
}
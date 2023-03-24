import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';

type PagerProps = {
	firstComic: number;
	total: number;
	limit: number;
	handlePagination: (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
}

export const Pager = ({limit, total, firstComic, handlePagination} : PagerProps) => {
	const firstIndex = total > 0 ? firstComic + 1 : 0;
	const lastIndex = firstComic + limit > total ? total : firstComic + limit;

	return (
		<div className={styles.pagerCont}>
			<div className={styles.pager}>
				<button className={styles.pagerButton} name="prev" onClick={event => handlePagination(event)}>
					<FontAwesomeIcon icon={faAngleLeft} aria-hidden="true"/>
				</button>
				<span>{firstIndex}-{lastIndex} of {total}</span>
				<button name="next" onClick={event => handlePagination(event)}>
					<FontAwesomeIcon icon={faAngleRight} aria-hidden="true"/>
				</button>
			</div>
		</div>
	)
}


import React from "react";
import styles from '../styles/Comic.module.css'

type DetailProps = {
	title: string, 
	issueNumber: number,
	dates: Date[];
	creators: string;
}

export default function Detail({ title, issueNumber, dates, creators }: DetailProps) {
	let dateFormat = new Date(
		dates.find((item: any) => (item.type = "onsaleDate")).date
	).toLocaleDateString("en-us", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	
	return ( 
		<div className={styles.contSection} data-testid='details'>
			<h3 className={styles.title} data-testid='comic-title'>{title}</h3>
			<p className={styles.pTag} data-testid='comic-issueNumber'><strong>Issue: </strong>{issueNumber}</p>
			<p data-testid='comic-publishDate'><strong>Published: </strong>{ dateFormat }</p>
			{creators && <p data-testid='comic-creators'><strong>Creators: </strong>{ creators }</p>}
		</div>
	 );
}
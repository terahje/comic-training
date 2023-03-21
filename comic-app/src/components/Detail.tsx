import React from "react";
import Moment from 'react-moment';
import styles from '../styles/Comic.module.css'

type DetailProps = {
    title: string, 
    issueNumber: number,
    date: string | undefined;
	creators: string;
}

export default function Detail({ title, issueNumber = 0, date, creators }: DetailProps) {
    
    return ( 
        <div className={styles.contSection} data-testid='details'>
            <h3 className={styles.title} data-testid='comic-title'>{title}</h3>
            <p className={styles.pTag} data-testid='comic-issueNumber'><strong>Issue: </strong>{issueNumber}</p>
            {<p data-testid='comic-publishDate'><strong>Published: </strong><Moment format='LL'>{ date }</Moment></p>}
            {creators && <p data-testid='comic-creators'><strong>Creators: </strong>{ creators }</p>}
        </div>
     );
}
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
        <div className={styles.contSection}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.pTag}><strong>Issue: </strong>{issueNumber}</p>
            {!!date && <li><strong>Pubulished: </strong><Moment format='LL'>{ date }</Moment></li>}
            {creators && <li><strong>Creators: </strong>{ creators }</li>}
        </div>
     );
}
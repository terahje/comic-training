import React from "react";
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import styles from '@/styles/Comic.module.css'

export default function Detail ({title, issueNumber, publishDate, creators}) {
    
    return ( 
        <div className={styles.contSection}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.pTag}><strong>Issue: </strong>{issueNumber}</p>
            <p className={styles.pTag}><strong>Published: </strong><Moment format="MMMM DD, YYYY">{publishDate}</Moment></p>
            <p className={styles.pTag}><strong>Creators: </strong>{creators.items.map(creator => creator.name.split(' ')[1]).join(', ')}</p>
        </div>
     );
}


Detail.prototype = {
    comic: PropTypes.shape({
        title: PropTypes.string.isRequired,
        issueNumber: PropTypes.string.isRequired,
        publishDate: PropTypes.string.isRequired,
        creators: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired
    })
}
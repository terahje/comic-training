import React from "react";
import PropTypes from 'prop-types'
import Image from "next/image";
import Moment from 'react-moment';
import BoltButton from "./BoltButton";
import Detail from "./Detail";
import styles from '@/styles/Comic.module.css'

export default function Comic ({comic}) {

    return ( 
        <div className={styles.comicSlide}>
            <div className={styles.imgCont}>
            <Image
                className={styles.comicImg}
                alt={comic.title}
                src={comic.thumbnail}
                blurDataURL={comic.thumbnail}
                placeholder='blur'
                sizes="(min-width 64em) height={276} "
                height={276}
                width={183}
                responsive="true"
            />
            <BoltButton/>
            </div>
            <Detail title={comic.title} issueNumber={comic.issueNumber} publishDate={comic.publishDate} creators={comic.creators}/>
        </div>
     );
}


Comic.prototype = {
    comic: PropTypes.shape({
        title: PropTypes.string.isRequired,
        issueNumber: PropTypes.string.isRequired,
        publishDate: PropTypes.string.isRequired,
        creators: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired
    })
}
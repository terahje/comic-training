import React from "react";
import PropTypes from 'prop-types'
import Image from "next/image";
import BoltButton from "./BoltButton";
import Detail from "./Detail";
import styles from '@/styles/Comic.module.css'

export default function Comic ({comics}) {
    {console.log("comics", comics);}
    return ( 
        <>
        {
            {comics} ? (
                comics.map(comic => {
                    return (
                        <li className={styles.comicSlide} key={comic.id}>
                            <div className={styles.imgCont}>
                            <Image
                                className={styles.comicImg}
                                alt={comic.title}
                                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                sizes="(min-width 64em) height={276} "
                                height={276}
                                width={183}
                                responsive="true"
                            />
                            <BoltButton/>
                            </div>
                            <Detail title={comic.title} issueNumber={comic.issueNumber} publishDate={comic.publishDate} creators={comic.creators}/>
                    </li>
                    )
                })
            ):""
        }
        </>
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
import React from "react";
import Image from "next/image";
import BoltButton from "./BoltButton";
import Detail from "./Detail";
import styles from '../styles/Comic.module.css'
import { ComicProps } from '../types'

interface Props {
	comic: ComicProps;
}

export default function Comic ({ comic }: Props) {
    if(!comic) return null;
    
    const { title, thumbnail, issueNumber, publishDate, creators } = comic;
    
    console.log(publishDate);
    
    return ( 
            <div className={styles.comicSlide} >
                <div className={styles.imgCont}>
                <Image
                    className={styles.comicImg}
                    alt={title}
                    src={thumbnail}
                    blurDataURL='blurDataURL'
                    placeholder='blur'
                    sizes="(min-width 64em) height={276} "
                    height={276}
                    width={183}
                />
                <BoltButton/>
                </div>
                <Detail 
                    title={comic.title}
                    issueNumber={+issueNumber}
                    date={Date.parse(publishDate) ? publishDate : undefined}
                    creators={creators?.map(({ name }) => name.split(' ')[1]).join(', ')}
                />
            </div>
     );
}
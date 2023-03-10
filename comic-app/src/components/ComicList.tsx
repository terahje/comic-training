import React, { useState } from "react";
import Comic from "./Comic";
import { useMarvelAPI } from "../hooks/useMarvelAPI"
import styles from '../styles/Comic.module.css'
import PacmanLoader from "react-spinners/PacmanLoader";
import { ComicProps} from '../types';


const slides = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(183px, 1fr))',
    gridGap: '30px 20px',
    padding: '0 20px'
}

export function ComicList() {
    const { comics, error, loading  } = useMarvelAPI('/api/comics')
    
    return (
        <>
            <div style={slides} >
                {loading ? (
                        <PacmanLoader 
                            color={"#C24868"}
                            loading={loading}
                            className={styles.loading}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    ) :error ? (
                        <div>Page Not Found!</div>
                    ) : (
                        comics?.map((comic: ComicProps) => <Comic key={comic.id} comic={comic}/>)
                )}
            </div>
        </>
    )
}
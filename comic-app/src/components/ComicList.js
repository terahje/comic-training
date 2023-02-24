import React, { useState } from "react";
import Comic from "./Comic";
import HeroFilter from "./HeroFilter";
import CreatorFilter from "./CreatorFilter";
import { useMarvelAPI } from "../hooks/useMarvelAPI"
import styles from '@/styles/Comic.module.css'
import PacmanLoader from "react-spinners/PacmanLoader";


const API_URL = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=ff34e285bad35f7abc603c31db177f23&hash=17323b56c7cd1c765b981a2d95310893'

const slides = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(183px, 1fr))',
    gridGap: '30px 20px',
    padding: '0 12px'
}

export function ComicList() {
    const [filter, setFilter] = useState("")
    const {comics, error, loading  } = useMarvelAPI(API_URL)

    return (
        <>
            <div className="filter-cont">
                <HeroFilter filter={filter} setFilter={setFilter}/>
                <CreatorFilter filter={filter} setFilter={setFilter}/>
            </div>
            
            <ul style={slides} >
                { error && <div>Page Not Found!</div>}
                {
                    loading ?
                        <PacmanLoader 
                            color={"#C24868"}
                            loading={loading}
                            className={styles.loading}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    :
                        (!comics)?<p>Not found</p>:<Comic comics={comics}/>
                }
            </ul>
        </>
    )
}
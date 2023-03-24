import React, { useState } from "react";
import Comic from "./Comic";
import HeroFilter from "./HeroFilter";
import CreatorFilter from "./CreatorFilter";
import { useMarvelAPI } from "../hooks/useMarvelAPI"
import styles from '@/styles/Comic.module.css'
import PacmanLoader from "react-spinners/PacmanLoader";


const publicKey = process.env.NEXT_PUBLIC_MARVEL_KEY;

export let API_URL = `https://gateway.marvel.com:443/v1/public/comics?limit=15&offset=0&apikey=${publicKey}`

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
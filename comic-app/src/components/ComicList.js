import React, { useState, useEffect } from "react";
import Comic from "./Comic";
import HeroFilter from "./HeroFilter";
import CreatorFilter from "./CreatorFilter";
import comics from '../data/content.json';
import styles from '@/styles/Comic.module.css'

const slides = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(183px, 1fr))',
    gridGap: '30px 20px',
    padding: '0 12px'
}

export function ComicList() {
    const [filter, setFilter] = useState("")

    useEffect(() =>{
        
    }, [])

    return (
        <div>
            <div className="filter-cont">
                <HeroFilter filter={filter} setFilter={setFilter}/>
                <CreatorFilter filter={filter} setFilter={setFilter}/>
            </div>
            <ul style={slides} >
                {comics.filter((comic) => 
                    comic.title.toLocaleLowerCase().includes(filter.toLowerCase())
                ).map((comic) => 
                    (
                        <Comic key={comic.id} comic={comic}/>
                    )
                )}
            </ul>
        </div>
    )
}
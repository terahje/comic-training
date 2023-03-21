import React from "react";
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faBoltLightning,
    faBars
  } from "@fortawesome/free-solid-svg-icons";

export function Header() {
    return (
        <>
        <header className={styles.header}>
            <div className={styles.logoCont}>
                <a href='/'>
                    <Image
                        className={styles.logo}
                        data-testid='image'
                        alt='logo'
                        src='../logo.svg'
                        width={106}
                        height={106}
                        loading='eager'
                    />
                </a>
            </div>
            <nav className={styles.navbar}>
                <div className={styles.desktopItems}>
                    <a href='/'>Home</a>
                    <a href='/'>Shop</a>
                </div>
                <div className={styles.boltCont}>
                    <span>
                    <FontAwesomeIcon
                        icon={faBoltLightning}
                        style={{ fontSize: 18, color: "white" }}
                    />
                    <span className={styles.boltDesktop}>My Favorites</span>
                    (0)
                    </span>
                </div>
                <button className={styles.barsMobile}>
                    <FontAwesomeIcon
                        icon={faBars}
                        style={{ fontSize: 20, color: "white" }}
                    />
				</button>
            </nav>
        </header>
        </>
    )
}
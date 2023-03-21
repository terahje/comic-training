import React from "react";
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export function Footer() {
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.footerLogo}>
                <a href='/'>
                    <Image
                        data-testid='image'
                        alt='logo'
                        src='../logo.svg'
                        width={106}
                        height={106}
                        loading='eager'
                    />
                </a>
            </div>
            <nav className={styles.footerNav}>
                <div className={styles.navItems}>
                    <a href='/'>Privacy Policy</a>
                    |
                    <a href='/'>Terms of Service</a>
                </div>
            </nav>
            <div className={styles.copyright}>
                Copyright 2022. Comic Closet, LLC. All rights reserved.
            </div>
        </footer>
        </>
    )
}
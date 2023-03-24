import { useState } from 'react'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faBoltLightning,
	faBars
  } from "@fortawesome/free-solid-svg-icons";

export function Header({favCapcity}) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function toggleMenu(): void {
		setIsOpen(!isOpen);
	}
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
					({favCapcity})
					</span>
				</div>
				<button onClick={toggleMenu} className={styles.barsMobile}>
					<FontAwesomeIcon
						icon={faBars}
						style={{ fontSize: 20, color: "white" }}
					/>
				</button>
				<nav className={`${styles.dropdown} ${isOpen ? styles["dropdown-open"] : ""}`}>
					<a href="/" target="_blank" >Home</a>
					<a href="/" target="_blank" >Shop</a>
				</nav>
			</nav>
		</header>
		</>
	)
}
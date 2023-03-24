import React from "react";
import styles from '../styles/Comic.module.css'
import image from '../../public/hero-photo.png'

export function Hero() {
	return (
		<>            
			<div style={{ backgroundImage: `url(${image})`}} className={styles.heroCont}>
				<div className={styles.heroContentSection}>
					<h1 className={styles.heroTitle}>Comic Closet</h1>
				</div>
			</div>
			<div className={styles.heroTexture}></div>
		</>
	)
}
import Image from 'next/image'
import styles from '../styles/Comic.module.css'

export function Hero() {
	return (
		<>
			<div className={styles.heroCont}>
				<Image
					src='/hero-photo.png'
					alt='Comic Books spread on floor, looking down at feet'
					className={styles.heroImage}
					fill
					priority
				/>
				<div className={styles.heroContentSection}>
					<h1 className={styles.heroTitle}>Comic Closet</h1>
				</div>
			</div>
			<div className={styles.heroTexture}></div>
		</>
	)
}
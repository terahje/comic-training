import React from "react";
import styles from '../styles/Comic.module.css'

export function Intro() {
	return (
		<>
				<div className={styles.introCont}>
					<h4 className={styles.introSubtitle}>New Comics!</h4>
					<h2 className={styles.introTitle}>Coming Out Daily</h2>
					<p>Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
				</div>
		</>
	)
}
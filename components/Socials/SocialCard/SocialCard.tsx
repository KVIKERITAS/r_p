import Image from 'next/image'
import styles from './socialCard.module.scss'

type TSocialCard = {
	type: 'chrome' | 'apple'
}

export const SocialCard = ({ type }: TSocialCard) => {
	if (type === 'chrome') {
		return (
			<div className={styles.singleSocial}>
				<Image src='chrome.svg' width={56} height={52} alt='chrome' />
				<div className={styles.socialText}>
					<span>available in the</span>
					<p>chrome web store</p>
				</div>
			</div>
		)
	}

	if (type === 'apple') {
		return (
			<div className={styles.singleSocial}>
				<Image src='apple.svg' width={56} height={52} alt='chrome' />
				<div className={styles.socialText}>
					<span>available in the</span>
					<p>apple app store</p>
				</div>
			</div>
		)
	}
}

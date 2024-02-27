import Image from 'next/image'
import Link from 'next/link'
import styles from './socialCard.module.scss'

type TSocialCard = {
	type: 'chrome' | 'apple'
}

export const SocialCard = ({ type }: TSocialCard) => {
	if (type === 'chrome') {
		return (
			<Link
				href='https://chromewebstore.google.com/detail/ratepunk-hotel-booking-an/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk'
				className={styles.singleSocial}
			>
				<Image src='chrome.svg' width={56} height={52} alt='chrome' />
				<div className={styles.socialText}>
					<span>available in the</span>
					<p>chrome web store</p>
				</div>
			</Link>
		)
	}

	if (type === 'apple') {
		return (
			<Link
				href='https://apps.apple.com/us/app/ratepunk-hotel-and-travel/id1607823726'
				className={styles.singleSocial}
			>
				<Image src='apple.svg' width={56} height={52} alt='chrome' />
				<div className={styles.socialText}>
					<span>available in the</span>
					<p>apple app store</p>
				</div>
			</Link>
		)
	}
}

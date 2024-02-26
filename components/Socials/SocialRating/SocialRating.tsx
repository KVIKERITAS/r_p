import { Noto_Sans } from 'next/font/google'
import Image from 'next/image'
import styles from './socialRating.module.scss'

const notoSans = Noto_Sans({ subsets: ['latin'] })

export const SocialRating = () => {
	return (
		<div className={styles.rating}>
			<div className={styles.stars}>
				<Image src='ion-md-star.svg' width={21} height={20} alt='star icon' />
				<Image src='ion-md-star.svg' width={21} height={20} alt='star icon' />
				<Image src='ion-md-star.svg' width={21} height={20} alt='star icon' />
				<Image src='ion-md-star.svg' width={21} height={20} alt='star icon' />
				<Image src='ion-md-star.svg' width={21} height={20} alt='star icon' />
			</div>
			<p className={notoSans.className}>Chrome Store reviews</p>
		</div>
	)
}

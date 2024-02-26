import { SocialCard } from './SocialCard/SocialCard'
import { SocialRating } from './SocialRating/SocialRating'
import styles from './socials.module.scss'

export const Socials = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.socials}>
				<SocialCard type='chrome' />
				<SocialCard type='apple' />
				<SocialRating />
			</div>
		</div>
	)
}

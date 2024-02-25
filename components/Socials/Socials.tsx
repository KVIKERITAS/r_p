import { SocialCard } from './SocialCard/SocialCard'
import styles from './socials.module.scss'

export const Socials = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.socials}>
				<SocialCard type='chrome' />
				<SocialCard type='apple' />
			</div>
		</div>
	)
}

import Image from 'next/image'
import styles from './socialIcon.module.scss'

type TSocialIconProps = {
	img: string
	imgAlt: string
}

export const SocialIcon = ({ img, imgAlt }: TSocialIconProps) => {
	return (
		<button className={styles.socialIcon}>
			<Image src={img} width={16} height={16} alt={imgAlt} />
		</button>
	)
}

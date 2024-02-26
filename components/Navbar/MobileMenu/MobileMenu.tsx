import Image from 'next/image'
import styles from './mobileMenu.module.scss'

export const MobileMenu = () => {
	return (
		<div className={styles.mobileMenu}>
			<button>
				<Image src='/menu.svg' width={18} height={16} alt='menu' />
			</button>
		</div>
	)
}

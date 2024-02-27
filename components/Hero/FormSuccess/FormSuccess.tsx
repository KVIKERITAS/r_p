import { Noto_Sans } from 'next/font/google'
import Image from 'next/image'
import styles from './formSuccess.module.scss'

const notoSans = Noto_Sans({ subsets: ['latin'] })

export const FormSuccess = () => {
	return (
		<div className={styles.success}>
			<Image src='success.svg' width={32} height={32} alt='success icon' />
			<h5 className={notoSans.className}>Your email is confirmed!</h5>
		</div>
	)
}

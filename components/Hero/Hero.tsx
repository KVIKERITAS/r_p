import { Caveat_Brush, Noto_Sans } from 'next/font/google'
import { ReferForm } from './ReferForm/ReferForm'
import { Steps } from './Steps/Steps'
import styles from './hero.module.scss'

const caveatBrush = Caveat_Brush({
	weight: '400',
	subsets: ['latin'],
	style: 'normal',
})

const notoSans = Noto_Sans({ subsets: ['latin'] })

export const Hero = () => {
	return (
		<div className={styles.wrapper}>
			<main className={styles.hero}>
				<ReferForm />
				<Steps />
			</main>
		</div>
	)
}

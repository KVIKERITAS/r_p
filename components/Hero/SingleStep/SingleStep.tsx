import { Caveat_Brush, Noto_Sans } from 'next/font/google'
import Image from 'next/image'
import styles from './singleStep.module.scss'

const caveatBrush = Caveat_Brush({
	weight: '400',
	subsets: ['latin'],
	style: 'normal',
})

const notoSans = Noto_Sans({ subsets: ['latin'] })

type TSingleStep = {
	imgSrc: string
	imgAlt: string
	imgHeight: number
	imgWidth: number
	imgPosition: 'left' | 'right'
	step: string
	title: string
	text: string
}

export const SingleStep = ({
	imgSrc,
	imgAlt,
	imgHeight,
	imgWidth,
	imgPosition,
	step,
	title,
	text,
}: TSingleStep) => {
	if (imgPosition === 'left') {
		return (
			<div className={styles.step}>
				<Image src={imgSrc} width={imgWidth} height={imgHeight} alt={imgAlt} />
				<div className={styles.stepDetails}>
					<h3 className={notoSans.className}>STEP {step}</h3>
					<h2 className={caveatBrush.className}>{title}</h2>
					<p className={notoSans.className}>{text}</p>
				</div>
			</div>
		)
	}

	return (
		<div className={styles.step}>
			<div className={styles.stepDetails}>
				<h3 className={notoSans.className}>STEP {step}</h3>
				<h2 className={caveatBrush.className}>{title}</h2>
				<p className={notoSans.className}>{text}</p>
			</div>
			<Image src={imgSrc} width={imgWidth} height={imgHeight} alt={imgAlt} />
		</div>
	)
}

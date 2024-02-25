import { steps } from '@/data/data'
import { Caveat_Brush, Noto_Sans } from 'next/font/google'
import { ReferForm } from './ReferForm/ReferForm'
import { SingleStep } from './SingleStep/SingleStep'
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
				{/* <div className={styles.steps}>
					{steps.map(step => (
						<SingleStep
							key={step.id}
							imgSrc={step.img}
							imgAlt={step.imgAlt}
							imgHeight={step.imgHeight}
							imgWidth={step.imgWidth}
							imgPosition={step.imgPosition}
							step={step.id}
							title={step.title}
							text={step.text}
						/>
					))}
				</div> */}
			</main>
		</div>
	)
}

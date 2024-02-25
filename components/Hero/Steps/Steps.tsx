import { Caveat_Brush, Noto_Sans } from 'next/font/google'
import Image from 'next/image'
import styles from './steps.module.scss'

const notoSans = Noto_Sans({ subsets: ['latin'] })

const caveatBrush = Caveat_Brush({
	weight: '400',
	subsets: ['latin'],
	style: 'normal',
})

export const Steps = () => {
	return (
		<div className={styles.steps}>
			<div className={styles.singleStep}>
				<Image src='invite.svg' height={140} width={128} alt='letter' />
				<div className={styles.stepInfo}>
					<h3 className={notoSans.className}>STEP 1</h3>
					<h2 className={caveatBrush.className}>INVITE FRIENDS</h2>
					<p className={notoSans.className}>
						Refer friends with your unique referral link.
					</p>
				</div>
			</div>

			<div className={styles.singleStep}>
				<div className={styles.stepInfo}>
					<h3 className={notoSans.className}>STEP 2</h3>
					<h2 className={caveatBrush.className}>COLLECT COINS</h2>
					<p className={notoSans.className}>
						Get 1 coin for each friend that installs our extension using your
						referral link.
					</p>
				</div>
				<Image src='collect-coins.svg' height={140} width={128} alt='hand' />
			</div>

			<div className={styles.singleStep}>
				<Image src='voucher.svg' height={140} width={128} alt='voucher' />
				<div className={styles.stepInfo}>
					<h3 className={notoSans.className}>STEP 3</h3>
					<h2 className={caveatBrush.className}>GET VOUCHER</h2>
					<p className={notoSans.className}>
						Redeem for a $20 hotel booking voucher once you collect 20 coins.
					</p>
				</div>
			</div>
		</div>
	)
}

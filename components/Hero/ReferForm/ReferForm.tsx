/* eslint-disable react/no-unescaped-entities */
import { Caveat_Brush, Noto_Sans } from 'next/font/google'
import styles from './referForm.module.scss'

const caveatBrush = Caveat_Brush({
	weight: '400',
	subsets: ['latin'],
	style: 'normal',
})

const notoSans = Noto_Sans({ subsets: ['latin'] })

export const ReferForm = () => {
	return (
		<div className={styles.refer}>
			<h1 className={caveatBrush.className}>REFER FRIENDS AND GET REWARDS</h1>
			<p className={notoSans.className}>
				Refer your friends to us and earn hotel booking vouchers. We'll give you
				1 coin for each friend that installs our extension. Minimum cash-out at
				20 coins.
			</p>
			<form>
				<p>error</p>
				<input type='text' placeholder='lalalal' />
				<button type='submit'>Referal</button>
			</form>
		</div>
	)
}

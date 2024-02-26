/* eslint-disable react/no-unescaped-entities */
import { Caveat_Brush, Noto_Sans } from 'next/font/google'
import Image from 'next/image'
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
			<div className={styles.formGroup}>
				<p>error</p>
				<form>
					<input
						type='text'
						placeholder='Enter your email address'
						className={notoSans.className}
					/>
					<button type='submit' className={notoSans.className}>
						Get Referral Link
					</button>
					<Image src='email.svg' height={16} width={20} alt='email' />
				</form>
				<span>Limits on max rewards apply.</span>
			</div>
		</div>
	)
}

/* eslint-disable react/no-unescaped-entities */
'use client'

import { Caveat_Brush, Noto_Sans } from 'next/font/google'
import Image from 'next/image'
import { FormEvent, useState } from 'react'
import { FormError } from '../FormError/FormError'
import { FormSuccess } from '../FormSuccess/FormSuccess'
import { ReferralButton } from '../ReferralButton/ReferralButton'
import styles from './referForm.module.scss'

const caveatBrush = Caveat_Brush({
	weight: '400',
	subsets: ['latin'],
	style: 'normal',
})

const notoSans = Noto_Sans({ subsets: ['latin'] })

export const ReferForm = () => {
	const [error, setError] = useState(false)
	const [success, setSuccess] = useState(false)
	const [email, setEmail] = useState('')

	const apiKey = '$2a$10$FR2uHje/Ci3dggnnoi4hbegx8qX25y/M3/tBfOrGkokY.NqP8BSz6'

	const sendEmail = (e: FormEvent) => {
		e.preventDefault()

		const jsonData = {
			email: email,
		}

		fetch('https://api.jsonbin.io/v3/b', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Master-Key': apiKey,
			},
			body: JSON.stringify(jsonData),
		})
			.then(response => response.json())
			.then(data => setSuccess(true))
			.catch(error => setError(true))
	}

	return (
		<div className={styles.refer}>
			<h1 className={caveatBrush.className}>REFER FRIENDS AND GET REWARDS</h1>
			<p className={notoSans.className}>
				Refer your friends to us and earn hotel booking vouchers. We'll give you
				1 coin for each friend that installs our extension. Minimum cash-out at
				20 coins.
			</p>
			<div className={styles.formGroup}>
				<form onSubmit={e => sendEmail(e)}>
					{error && <FormError />}
					{success && <FormSuccess />}

					{success ? (
						<ReferralButton />
					) : (
						<div className={styles.formInputs}>
							<input
								type='email'
								placeholder='Enter your email address'
								className={notoSans.className}
								onChange={e => setEmail(e.target.value)}
							/>
							<button type='submit' className={notoSans.className}>
								Get Referral Link
							</button>
							<Image src='email.svg' height={16} width={20} alt='email' />
						</div>
					)}
				</form>
				<span>Limits on max rewards apply.</span>
			</div>
		</div>
	)
}

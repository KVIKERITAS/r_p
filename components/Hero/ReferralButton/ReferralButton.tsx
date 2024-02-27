import styles from './referralButton.module.scss'

export const ReferralButton = () => {
	return (
		<div className={styles.referralInput}>
			<input placeholder='https://ratepunk.com/referral' />{' '}
			<button>Copy</button>
		</div>
	)
}

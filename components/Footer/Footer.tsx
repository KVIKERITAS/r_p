import Image from 'next/image'
import Link from 'next/link'
import { SocialIcon } from './SocialIcon/SocialIcon'
import styles from './footer.module.scss'

export const Footer = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.footer}>
				<div className={styles.about}>
					<Image src='logo.svg' height={32} width={125} alt='logo' />
					<p>
						Ratepunk compares hotel room prices across the major online travel
						agencies. When you search for a room, Ratepunk extension scans the
						top booking sites and runs a price comparison, so you can be
						confident in knowing you’re getting the best deal!
					</p>
				</div>
				<div className={styles.footerInfo}>
					<div className={styles.footerNav}>
						<h4>QUICK LINKS</h4>
						<Link href='/'>Price Comparison</Link>
						<Link href='/'>Chrome Extension</Link>
						<Link href='/'>How It Works</Link>
						<Link href='/'>Ratepunk Blog</Link>
						<Link href='/'>Privacy Policy</Link>
					</div>

					<div className={styles.footerLinks}>
						<div className={styles.footerContact}>
							<h4>CONTACT</h4>
							<div className={styles.footerEmail}>
								<Image
									src='email-footer.svg'
									height={13}
									width={16}
									alt='email icon'
								/>
								<p>hi@ratepunk.com</p>
							</div>
						</div>
						<div className={styles.footerSocial}>
							<h4>SOCIAL</h4>
							<div className={styles.socialIcons}>
								<SocialIcon img='/instagram.svg' imgAlt='instagram icon' />
								<SocialIcon img='/facebook.svg' imgAlt='facebook icon' />
								<SocialIcon img='/linkedin.svg' imgAlt='linkedin icon' />
								<SocialIcon img='/twitter.svg' imgAlt='twitter icon' />
								<SocialIcon img='/tiktok.svg' imgAlt='tiktok icon' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

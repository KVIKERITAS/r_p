import { Noto_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { MobileMenu } from './MobileMenu/MobileMenu'
import styles from './navbar.module.scss'

const notoSans = Noto_Sans({ subsets: ['latin'] })

export const Navbar = () => {
	return (
		<div className={styles.wrapper}>
			<header className={styles.navbar}>
				<Image src='/logo.svg' alt='logo' width={125} height={32} />
				<nav>
					<Link href='/' className={notoSans.className}>
						Chrome Extension
					</Link>
					<Link href='/' className={notoSans.className}>
						Price Comparison
					</Link>
					<Link href='/' className={notoSans.className}>
						Blog
					</Link>
				</nav>

				<MobileMenu />
			</header>
		</div>
	)
}

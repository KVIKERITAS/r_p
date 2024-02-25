import { Noto_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import styles from './navbar.module.scss'

const notoSans = Noto_Sans({ subsets: ['latin'] })

export const Navbar = () => {
	return (
		<div className={styles.wrapper}>
			<header className={styles.navbar}>
				<Image src='/logo.svg' alt='logo' width={125} height={32} />
				<nav>
					<Link href='/'>Chrome Extension</Link>
					<Link href='/'>Price Comparison</Link>
					<Link href='/'>Blog</Link>
				</nav>
			</header>
		</div>
	)
}

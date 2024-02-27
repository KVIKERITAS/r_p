'use client'

import { Noto_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MobileMenu } from './MobileMenu/MobileMenu'
import styles from './navbar.module.scss'

const notoSans = Noto_Sans({ subsets: ['latin'] })

export const Navbar = () => {
	const [open, setOpen] = useState(true)

	return (
		<div className={styles.wrapper}>
			<header className={styles.navbar}>
				<div className={styles.menu}>
					<Image src='/logo.svg' alt='logo' width={125} height={32} />
					<MobileMenu open={open} setOpen={setOpen} />
				</div>
				<nav className={open ? styles.open : styles.close}>
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
			</header>
		</div>
	)
}

'use client'

import Image from 'next/image'
import { SetStateAction } from 'react'
import styles from './mobileMenu.module.scss'

type TMobileMenuProps = {
	open: boolean
	setOpen: React.Dispatch<SetStateAction<boolean>>
}

export const MobileMenu = ({ open, setOpen }: TMobileMenuProps) => {
	return (
		<div className={styles.mobileMenu}>
			<button
				onClick={() => {
					setOpen(!open)
				}}
				className={open ? styles.close : styles.open}
			>
				<Image src='/menu.svg' width={18} height={16} alt='menu' />
			</button>

			<button
				onClick={() => {
					setOpen(!open)
				}}
				className={open ? styles.open : styles.close}
			>
				<Image src='/close.svg' width={18} height={16} alt='menu' />
			</button>
		</div>
	)
}

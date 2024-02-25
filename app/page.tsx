import { Footer } from '@/components/Footer/Footer'
import { Hero } from '@/components/Hero/Hero'
import { Navbar } from '@/components/Navbar/Navbar'
import { Socials } from '@/components/Socials/Socials'

export default function Landing() {
	return (
		<>
			<Navbar />
			<Hero />
			<Socials />
			<Footer />
		</>
	)
}

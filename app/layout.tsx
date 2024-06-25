import type { Metadata } from 'next'
import { Inter, Roboto, Lora, League_Spartan } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-roboto',
})
const lora = Lora({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-lora' })

const leage_spartan = League_Spartan({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-spartan',
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${roboto.variable} ${lora.variable} ${leage_spartan.variable}`}>
				{children}
				<Footer />
			</body>
		</html>
	)
}

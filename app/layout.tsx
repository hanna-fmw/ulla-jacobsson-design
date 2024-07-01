import type { Metadata } from 'next'
import { Inter, Roboto, Lora, League_Spartan } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-inter' })

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
	title: 'Ulla Jacobsson Design',
	description: 'Kläder och hållbar design i vackra tyger från Järvsö i Hälsinglands hjärta',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1' />
			</Head>
			<body
				className={`${roboto.variable} ${lora.variable} ${leage_spartan.variable} ${inter.variable}`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}

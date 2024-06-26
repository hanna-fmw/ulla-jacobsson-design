import Link from 'next/link'
import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { CiInstagram } from 'react-icons/ci'
import { CiMail } from 'react-icons/ci'

const Navbar = () => {
	return (
		<div className='py-10 mx-auto flex justify-between items-center w-[90vw] md:w-[80vw] md:px-16 lg:w-screen lg:px-32'>
			<div className='hidden sm:visible'></div>

			<h2 className='font-inter text-sm sm:text-base md:text-lg font-semibold uppercase tracking-[1px] '>
				Ulla Jacobsson Design
			</h2>

			<nav className='flex gap-6 items-center translate-y-[-25%]'>
				<Link href='/'>
					<CiFacebook size={20} />
				</Link>
				<Link
					href='/'
					className='text-navbar-link-color hover:text-navbar-link-hover-color hover:font-bold'>
					<CiInstagram size={20} />
				</Link>
				<Link
					href='mailto:ulla@ullajacobssondesign.se'
					className='text-navbar-link-color hover:text-navbar-link-hover-color hover:font-bold'>
					<CiMail size={20} />
				</Link>
			</nav>
		</div>
	)
}

export default Navbar

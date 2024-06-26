import Link from 'next/link'
import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { CiInstagram } from 'react-icons/ci'
import { CiMail } from 'react-icons/ci'

const Navbar = () => {
	return (
		<div className='py-8 mx-auto flex justify-between items-center w-[90vw] md:py-6 md:px-4 lg:w-screen lg:px-32'>
			<div className='hidden sm:visible'></div>
			<p className='font-inter text-[0.6rem] sm:text-xs md:font-normal uppercase tracking-[1px]'>
				Ulla Jacobsson Design
			</p>
			<nav className='flex gap-6 items-center translate-y-[-25%]'>
				<Link href='/'>
					<CiFacebook className='w-4 h-4 md:w-5 md:h-5' />
				</Link>
				<Link href='/' className='text-navbar-link-color hover:text-light-gray hover:font-bold'>
					<CiInstagram className='w-4 h-4 md:w-5 md:h-5' />
				</Link>
				<Link
					href='mailto:ulla@ullajacobssondesign.se'
					className='text-navbar-link-color hover:text-light-gray hover:font-bold'>
					<CiMail className='w-4 h-4 md:w-5 md:h-5' />
				</Link>
			</nav>
		</div>
	)
}

export default Navbar

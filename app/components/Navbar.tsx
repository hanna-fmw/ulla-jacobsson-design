import Link from 'next/link'
import React from 'react'
import { SlSocialTwitter } from 'react-icons/sl'
import { SlSocialFacebook } from 'react-icons/sl'
import { SlSocialYoutube } from 'react-icons/sl'
import Image from 'next/image'
import logo from '../../public/logo.png'

const Navbar = () => {
	return (
		<div className='m-8 flex justify-between items-center w-screen p-6 md:px-16 h-20 lg:px-32'>
			<Link href='/' className='cursor-pointer font-semibold'>
				<Image src={logo} alt='logo' width={100} height={100} />
			</Link>

			<nav className='flex gap-6 items-center'>
				<Link
					href='/'
					className='text-sm md:text-[12px] hover:underline hover:underline-offset-2 hover:decoration-hero-title-color'>
					Home
				</Link>
				<Link
					href='/'
					className='text-sm md:text-[12px] hover:underline hover:underline-offset-2 hover:decoration-hero-title-color'>
					About
				</Link>
				<Link
					href='/'
					className='text-sm md:text-[12px] hover:underline hover:underline-offset-2 hover:decoration-hero-title-color'>
					Contact
				</Link>
				<Link href='/'>
					<SlSocialFacebook size={15} />
				</Link>
				<Link
					href='/'
					className='text-navbar-link-color hover:text-navbar-link-hover-color hover:font-bold'>
					<SlSocialYoutube size={15} />
				</Link>
			</nav>
		</div>
	)
}

export default Navbar

import Link from 'next/link'
import React from 'react'
import { SlSocialTwitter } from 'react-icons/sl'
import { SlSocialFacebook } from 'react-icons/sl'
import { SlSocialYoutube } from 'react-icons/sl'
import Image from 'next/image'
import logo from '../../public/logo.png'

const Navbar = () => {
	return (
		<div
			className='w-screen flex justify-between items-center px-[20px] md:px-[70px] h-20'
			style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
			{/* <div className='w-screen flex justify-between items-center px-[20px] md:px-[70px] h-20'> */}
			<Link href='/' className='cursor-pointer font-semibold'>
				<Image src={logo} alt='logo' width={25} height={25} />
			</Link>

			<nav className='flex gap-6 items-center'>
				<Link
					href='/'
					className='text-sm md:text-[12px] hover:font-bold text-navbar-link-color hover:text-navbar-link-hover-color'>
					Home
				</Link>
				<Link
					href='/'
					className='text-sm md:text-[12px] hover:font-bold text-navbar-link-color hover:text-navbar-link-hover-color'>
					About
				</Link>
				<Link
					href='/'
					className='text-sm md:text-[12px] hover:font-bold text-navbar-link-color hover:text-navbar-link-hover-color'>
					Contact
				</Link>
				<Link href='/'>
					<SlSocialFacebook size={15} color='#e5e5e5' fill='#e5e5e5' />
				</Link>
				<Link href='/' className='hover:font-bold'>
					<SlSocialTwitter size={15} color='#e5e5e5' fill='#e5e5e5' />
				</Link>
				<Link
					href='/'
					className='text-navbar-link-color hover:text-navbar-link-hover-color hover:font-bold'>
					<SlSocialYoutube size={15} color='#e5e5e5' fill='#e5e5e5' />
				</Link>
			</nav>
		</div>
	)
}

export default Navbar

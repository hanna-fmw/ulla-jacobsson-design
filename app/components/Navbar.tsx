import React from 'react'
import { LiaFacebook } from 'react-icons/lia'
import { FaInstagram } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'

const Navbar = () => {
	return (
		<>
			<section>
				<div className='p-4 text-center uppercase font-inter text-white bg-[#232323] text-[0.6rem] sm:text-xs md:font-normal tracking-[1px]'>
					Hållbart mode för alla tillfällen
				</div>
				<div className='py-4 mx-auto flex justify-between items-center w-[90vw] md:py-6 md:px-4 lg:w-screen lg:px-32'>
					<div className='hidden md:block'></div>

					<div>
						<nav className='flex gap-6 items-center'>
							<a
								href='https://www.facebook.com/'
								className='text-navbar-link-color hover:text-navbar-link-hover-color cursor-not-allowed'>
								<LiaFacebook size={20} fill='#000' color='#000' />
							</a>
							<a
								href='https://www.instagram.com/ullajacobssondesign?igsh=ZW02NjhlZHU4d2Ry'
								className='text-navbar-link-color hover:text-navbar-link-hover-color'>
								<FaInstagram size={15} fill='#000' color='#000' />
							</a>
							<a
								href='mailto:ulla@ullajacobssondesign.se'
								className='text-navbar-link-color hover:text-navbar-link-hover-color'>
								<IoMailOutline size={18} fill='#000' color='#000' />
							</a>
						</nav>
					</div>
				</div>
			</section>
		</>
	)
}

export default Navbar

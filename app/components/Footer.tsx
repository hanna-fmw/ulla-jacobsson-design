import Link from 'next/link'
import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { CiInstagram } from 'react-icons/ci'
import { CiMail } from 'react-icons/ci'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const Footer = () => {
	return (
		<footer className='w-screen pt-10 bg-[#232323]'>
			<section className='w-full font-lora justify-center pb-2 grid grid-cols-2 md:mx-auto md:w-[80vw] lg:grid-cols-3 lg:py-16'>
				<div className='mx-auto'>
					<h2 className='font-medium text-[#fff] text-xs md:text-sm lg:text-base'>Kontakt</h2>
					<p className='text-[#fff] text-[10px] mb-2 sm:text-xs'>
						<a href='mailto:ulla@ullajacobssondesign.se'>ulla@ullajacobssondesign.se</a>
					</p>
					{/* <p className='text-[#fff] text-[10px] mb-1 sm:text-xs lg:sm:text-xs'>
						<a href='https://ullajacobssondesign.se' className='cursor-not-allowed'>
							www.ullajacobssondesign.se
						</a>
					</p> */}

					<p className='text-[#fff] text-[10px] mb-1 sm:text-xs'>+46 (0) 070-300&nbsp;13&nbsp;90</p>
				</div>
				<div className='mx-auto'>
					<h2 className='text-[#fff] font-medium text-xs md:text-sm lg:text-base'>
						Fysiska butiker
					</h2>
					<div className='flex flex-col lg:gap-2'>
						<p className='text-[#fff] text-[10px] mb-1 sm:text-xs'>Butik Tidlös, Vattlång</p>
						<p className='text-[#fff] text-[10px] mb-1 sm:text-xs'>Gårdsbutiken, Stenegård</p>
					</div>
				</div>
				<div className='hidden lg:block md:mx-auto'>
					<h2 className='text-[#fff] font-medium text-xs md:text-sm lg:text-base'>
						Sociala Medier
					</h2>
					<div className='flex flex-col gap-1'>
						<p className='text-[#fff] text-[10px] mb-1 sm:text-xs'>
							<Link href='/'>Facebook</Link>
						</p>
						<p className='text-[#fff] text-[10px] mb-1 sm:text-xs'>
							<Link href='/'>Instagram</Link>
						</p>
					</div>
				</div>
			</section>
			<section className='mx-auto pb-8 w-[90vw] mt-[1.5rem] gap-6 flex justify-center lg:hidden'>
				<a
					href='https://www.facebook.com/designbyam.se/?locale=sv_SE'
					className='text-[#fff] hover:text-navbar-link-hover-color'>
					<FaFacebook size={15} fill='#fff' color='#fff' />
				</a>
				<a
					href='https://www.instagram.com/gardsbutiken_stenegard?igsh=MXh2bm1iMm5tMzllOA=='
					className='text-[#fff] hover:text-navbar-link-hover-color'>
					<FaInstagram size={15} fill='#fff' color='#fff' />
				</a>
				<a
					href='mailto:info@amdesign.se'
					className='text-[#fff] hover:text-navbar-link-hover-color'>
					<IoMail size={15} fill='#fff' color='#fff' />
				</a>
			</section>
			<section className='w-full h-[8vh] text-sm text-white bg-[#343A40] flex items-center pl-6'>
				<p
					className='text-[#fff] flex items-center text-[8px] sm:text-xs gap-3 font-light'
					style={{ transform: 'translateY(25%)' }}>
					&copy;2024 <span className='inline-block h-1 w-1 rounded-full bg-white'></span> Ulla
					Jacobsson Design
				</p>
			</section>
		</footer>
	)
}

export default Footer

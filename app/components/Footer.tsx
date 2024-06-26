import Link from 'next/link'
import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { CiInstagram } from 'react-icons/ci'
import { CiMail } from 'react-icons/ci'

const Footer = () => {
	return (
		<footer className='text-lg mx-auto py-10 w-[90vw] md:w-screen'>
			<>
				<section className='w-full py-10 grid grid-cols-2 sm:grid-cols-3'>
					<div className='mx-auto'>
						<h2 className='font-inter text-sm sm:text-base md:text-lg font-semibold uppercase tracking-[1px]'>
							Kontakt
						</h2>
						<div className='flex flex-col text-base md:text-base'>
							<Link
								href='mailto:ulla@ullajacobssondesign.se'
								className='cursor-pointer hover:text-hero-title-color-pink'>
								ulla@ullajacobssondesign.se
							</Link>
							<div>+46&nbsp;(0)&nbsp;70-300&nbsp;13&nbsp;90</div>
						</div>
					</div>
					<div className='mx-auto'>
						<h2 className='font-inter text-sm sm:text-base md:text-lg font-semibold uppercase tracking-[1px]'>
							Fysiska butiker
						</h2>
						<div className='flex flex-col text-base md:text-base'>
							<Link href='/' className='cursor-pointer hover:text-hero-title-color-pink'>
								www.gårdsbutiken.se
							</Link>
							<Link href='/' className='cursor-pointer hover:text-hero-title-color-pink'>
								www.butik-tidlos.se
							</Link>
						</div>
					</div>
					<div className='hidden sm:block sm:mx-auto'>
						<h2 className='font-inter text-sm sm:text-base md:text-lg font-semibold uppercase tracking-[1px]'>
							Sociala Medier
						</h2>
						<div className='flex flex-col text-base md:text-base'>
							<Link href='/' className='cursor-pointer hover:text-hero-title-color-pink'>
								Facebook
							</Link>
							<Link href='/' className='cursor-pointer hover:text-hero-title-color-pink'>
								Instagram
							</Link>
						</div>
					</div>
				</section>
				<section className='w-[90vw] gap-6 flex justify-center mt-4 sm:hidden'>
					<Link href='/' className='cursor-pointer hover:text-hero-title-color-pink'>
						<CiFacebook size={20} color='#333' fill='#333' />
					</Link>
					<Link href='/' className='cursor-pointer hover:text-hero-title-color-pink'>
						<CiInstagram size={20} color='#333' fill='#333' />
					</Link>
					<Link href='/' className='cursor-pointer hover:text-hero-title-color-pink'>
						<CiMail size={20} color='#333' fill='#333' />
					</Link>
				</section>
			</>
		</footer>
	)
}

export default Footer

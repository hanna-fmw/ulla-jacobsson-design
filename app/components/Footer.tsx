import Link from 'next/link'
import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { CiInstagram } from 'react-icons/ci'
import { CiMail } from 'react-icons/ci'

const Footer = () => {
	return (
		<footer className='mx-auto py-10 w-[90vw] md:w-screen'>
			<>
				<section className='w-full md:py-10 grid grid-cols-2 sm:grid-cols-3'>
					<div className='mx-auto'>
						<h3 className='font-inter text-[0.6rem] font-normal lg:text-xs uppercase tracking-[1px]'>
							Kontakt
						</h3>
						<div className='flex flex-col'>
							<Link
								href='mailto:ulla@ullajacobssondesign.se'
								className='cursor-pointer text-[0.6rem] md:text-xs hover:text-accent-pink'>
								ulla@ullajacobssondesign.se
							</Link>
							<p className='md:text-xs'>+46&nbsp;(0)&nbsp;70-300&nbsp;13&nbsp;90</p>
						</div>
					</div>
					<div className='mx-auto'>
						<h3 className='font-inter text-[0.6rem] font-normal lg:text-xs uppercase tracking-[1px]'>
							Fysiska butiker
						</h3>
						<div className='flex flex-col'>
							<Link
								href='/'
								className='cursor-pointer text-[0.6rem] lg:text-xs hover:text-accent-pink'>
								www.gårdsbutiken.se
							</Link>
							<Link
								href='/'
								className='cursor-pointer text-[0.6rem] lg:text-xs hover:text-accent-pink'>
								www.butik-tidlos.se
							</Link>
						</div>
					</div>
					<div className='hidden sm:block sm:mx-auto'>
						<h3 className='font-inter text-[0.6rem] font-normal lg:text-xs uppercase tracking-[1px]'>
							Sociala Medier
						</h3>
						<div className='flex flex-col'>
							<Link
								href='/'
								className='cursor-pointer text-[0.6rem] md:text-xs hover:text-accent-pink'>
								Facebook
							</Link>

							<Link
								href='/'
								className='cursor-pointer text-[0.6rem] md:text-xs hover:text-accent-pink'>
								Instagram
							</Link>
						</div>
					</div>
				</section>
				<section className='w-[90vw] mt-[1.5rem] gap-6 flex justify-center sm:hidden'>
					<Link href='/' className='cursor-pointer'>
						<CiFacebook color='#333' fill='#333' className='w-4 h-4' />
					</Link>
					<Link href='/' className='cursor-pointer'>
						<CiInstagram color='#333' fill='#333' className='w-4 h-4' />
					</Link>
					<Link href='/' className='cursor-pointer'>
						<CiMail color='#333' fill='#333' className='w-4 h-4' />
					</Link>
				</section>
			</>
		</footer>
	)
}

export default Footer

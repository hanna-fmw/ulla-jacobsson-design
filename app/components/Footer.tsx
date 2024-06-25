import Link from 'next/link'
import React from 'react'
import { SlSocialFacebook, SlSocialTwitter, SlSocialYoutube } from 'react-icons/sl'

const Footer = () => {
	return (
		<footer className='mx-auto py-10 w-[90vw] md:w-screen'>
			<>
				<section className='w-full py-10 grid grid-cols-2 sm:grid-cols-3 font-lora'>
					<div className='mx-auto'>
						<h2 className='text-[14px] mb-2 md:text-2xl'>Kontakt</h2>
						<ul>
							<li className='cursor-pointer'>ulla@ullajacobssondesign.se</li>
							<li>070-300&nbsp;13&nbsp;90</li>
						</ul>
					</div>
					<div className='mx-auto'>
						<h2 className='text-[14px] mb-2 md:text-2xl'>Fysiska butiker</h2>
						<div className='flex flex-col gap-2'>
							<Link href='/'>www.gårdsbutiken.se</Link>
							<Link href='/'>www.butik-tidlos.se</Link>
						</div>
					</div>
					<div className='hidden sm:block sm:mx-auto'>
						<h2 className='text-[14px] mb-2 md:text-2xl'>Sociala Medier</h2>
						<div className='flex flex-col gap-2'>
							<Link href='/'>Facebook</Link>
							<Link href='/'>Twitter</Link>
							<Link href='/'>Instagram</Link>
						</div>
					</div>
				</section>
				<section className='w-[90vw] gap-6 flex justify-center sm:hidden'>
					<Link href='/'>
						<SlSocialFacebook size={15} color='#333' fill='#333' />
					</Link>
					<Link href='/' className='hover:font-bold'>
						<SlSocialTwitter size={15} color='#333' fill='#333' />
					</Link>
					<Link
						href='/'
						className='text-navbar-link-color hover:text-navbar-link-hover-color hover:font-bold'>
						<SlSocialYoutube size={15} color='#333' fill='#333' />
					</Link>
				</section>
			</>
		</footer>
	)
}

export default Footer

import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<footer className='mx-auto py-10 w-[90vw] md:w-screen'>
			<section className='w-full py-10 grid grid-cols-3 font-lora text-white justify-center'>
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
				<div className='mx-auto'>
					<h2 className='text-[14px] mb-2 md:text-2xl'>Sociala Medier</h2>
					<div className='flex flex-col gap-2'>
						<Link href='/'>Facebook</Link>
						<Link href='/'>Twitter</Link>
						<Link href='/'>Instagram</Link>
					</div>
				</div>
			</section>
		</footer>
	)
}

export default Footer

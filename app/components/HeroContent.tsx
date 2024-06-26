import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'

type Props = {
	postTitle: string
	subheading?: string
}

const HeroContent = ({ postTitle, subheading }: Props) => (
	<div className='flex flex-col items-center absolute h-full right-4 top-[5%] sm:top-[20%] sm:w-1/2 sm:right-[5%] md:top-[20%] md:w-1/2 md:right-[5%] lg:w-[45%] lg:right-[15%]'>
		<h1 className='hidden sm:block font-lora text-accent-pink overflow-hidden sm:text-3xl lg:text-4xl'>
			{postTitle}
		</h1>

		<p className='hidden sm:block text-center font-inter lg:text-sm my-3'>{subheading}</p>
		<Image src={logo} alt='logo' width={120} height={120} />
	</div>
)

export default HeroContent

import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'

type Props = {
	postTitle: string
	subheading?: string
}

const HeroContent = ({ postTitle, subheading }: Props) => (
	<div className='flex flex-col items-center absolute h-full right-3 top-[10%] sm:top-[20%] sm:w-1/2 sm:right-[5%] md:top-[20%] md:w-1/2 md:right-[10%] lg:w-[45%] lg:right-[15%]'>
		<h1 className='hidden sm:block font-lora text-accent-pink-vivid overflow-hidden sm:text-3xl sm:mb-1 lg:text-5xl'>
			{postTitle}
		</h1>

		<p className='hidden sm:block text-center font-lora text-medium sm:text-sm lg:text-base my-3'>
			{subheading}
		</p>
		<Image src={logo} alt='logo' width={120} height={120} />
	</div>
)

export default HeroContent

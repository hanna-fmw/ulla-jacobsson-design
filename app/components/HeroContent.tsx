import React from 'react'
import Image from 'next/image'
import logoBgRemoved from '../../public/logo-bg-removed.png'

type Props = {
	postTitle: string
	subheading?: string
}

const HeroContent = ({ postTitle, subheading }: Props) => (
	<div className='flex flex-col items-center absolute h-full right-8 top-[5%] md:top-[20%] md:w-1/2 md:right-[5%] lg:w-[45%] lg:right-[15%]'>
		<h1 className='hidden sm:block font-inter text-hero-title-color-pink overflow-hidden sm:text-4xl lg:text-5xl'>
			{postTitle}
		</h1>

		<p className='hidden sm:block text-center font-inter sm:text-base lg:text-xl mt-3'>
			{subheading}
		</p>
		<Image src={logoBgRemoved} alt='logo' width={120} height={120} />
	</div>
)

export default HeroContent

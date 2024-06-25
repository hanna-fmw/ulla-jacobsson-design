import React from 'react'

type Props = {
	postTitle: string
	subheading?: string
}

const HeroContent = ({ postTitle, subheading }: Props) => (
	<div className='absolute bottom-[10%] right-0 w-1/2 md:bottom-[35%] md:w-1/2 lg:w-[60%] px-[20px] md:px-[70px]'>
		<h2 className='text-base md:text-lg font-semibold uppercase tracking-[1px] '>
			Ulla Jacobsson Design
		</h2>
		<h1 className='text-hero-title-color-pink font-lora overflow-hidden text-5xl sm:text-6xl md:text-6xl'>
			{postTitle}
		</h1>
		<p className='font-inter text-base md:text-xl mt-3'>{subheading}</p>
	</div>
)

export default HeroContent

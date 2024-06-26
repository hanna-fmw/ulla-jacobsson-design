import React from 'react'
import Image from 'next/image'

type ItemProps = {
	item: {
		id: number
		model_name?: string
		short_description?: string
		image?: string
		price?: string
	}
}

const ItemCard = ({ item }: ItemProps) => {
	return (
		<section className='mx-auto w-[43vw] sm:w-[30vw] md:w-[25vw] lg:w-[18vw]'>
			<div>
				<Image
					src={`/images/${item.image}`}
					alt='Post Image'
					width={250}
					height={200}
					className='rounded-[3px] object-cover object-center w-full h-[45vh] sm:w-full sm:h-[60vh] md:w-full md:h-[45vh] lg:w-full lg:h-[50vh]'
				/>
			</div>
			<div className='mt-1 max-w-full'>
				<div className='flex justify-between'>
					<p className='font-inter mb-1 text-[0.6rem] lg:text-xs font-normal uppercase'>
						{item.model_name}
					</p>
					<p className='text-[0.6rem] lg:text-xs'>{item.price}</p>
				</div>
				<p className='text-[0.6rem] lg:text-xs'>{item.short_description}</p>
			</div>
		</section>
	)
}

export default ItemCard

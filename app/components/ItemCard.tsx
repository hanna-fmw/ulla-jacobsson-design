import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
		<section className='cursor-pointer py-4'>
			<div className='mt-8'>
				<div className='relative'>
					<Image
						src='/images/linen_shirt.jpg'
						alt='Post Image'
						width={250}
						height={200}
						className='object-cover w-[90vw] h-[40vh] md:w-[35vw] md:h-[35vh] lg:w-[20vw] lg:h-[50vh] rounded-md'
					/>
				</div>
				<div className='mt-3'>
					<div className='font-semibold text-base md:text-lg'>Modell: {item.model_name}</div>
					<div className='text-base md:text-lg'>{item.short_description}</div>
					<div className='text-base md:text-lg'>{item.price}</div>
				</div>
			</div>
		</section>		
	)
}

export default ItemCard

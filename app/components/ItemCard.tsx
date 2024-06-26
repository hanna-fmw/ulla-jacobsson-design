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
		<section className='cursor-pointer py-2 md:py-4'>
			<div className='mt-6'>
				<div>
					<Image
						src={`/images/${item.image}`}
						alt='Post Image'
						width={250}
						height={200}
						className='object-cover object-center w-[45vw] h-[45vh] sm:object-top sm:h-[55vh] md:w-[35vw] md:h-[45vh] lg:w-[15vw] lg:h-[40vh] rounded-[3px]'
					/>
				</div>
				<div className='mt-3'>
					<h2 className='font-inter font-medium text-sm sm:text-base md:text-base uppercase'>
						{item.model_name}
					</h2>

					<div className='text-base md:text-lg'>{item.short_description}</div>
					<div className='text-base md:text-lg'>{item.price}</div>
				</div>
			</div>
		</section>
	)
}

export default ItemCard

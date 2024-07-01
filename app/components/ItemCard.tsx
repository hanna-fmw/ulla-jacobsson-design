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
		<section className=' flex flex-col cursor-pointer bg-white mt-2 md:w-[25vw] rounded-md md:mb-3 lg:mb-2 lg:w-[16vw] '>
			<div className='relative'>
				<Image
					// src={`/images/${item.image}`}
					src={`/images/${item.image}`}
					alt='Ulla Jacobsson Design'
					width={250}
					height={200}
					// className='object-cover h-[30vh] md:w-full sm:h-[40vh] md:h-[40vh]'
					className='rounded-[3px] object-cover object-center w-full h-[45vh] sm:w-full sm:h-[60vh] md:w-full md:h-[45vh] lg:w-full lg:h-[40vh]'
				/>
			</div>
			{/* <div className='px-2 flex-grow flex flex-col justify-between'>
				<div>
					<div className='flex justify-between mt-2'>
						<h2 className='font-lora mb-2 text-sm md:text-xs font-medium'>{item.model_name}</h2>
						<p className='font-lora mb-1 text-xs'>{item.price}</p>
					</div>
					<p className='font-lora text-xs'>{item.short_description}</p>
				</div>
			</div> */}
			<div className='p-2 max-w-full'>
				<div className='flex justify-between'>
					<p className='font-lora font-semibold text-[10px] sm:text-xs'>{item.model_name}</p>
					<p className='font-lora text-[10px] sm:text-xs'>{item.price}</p>
				</div>
				<p className='font-lora text-[10px] sm:text-xs'>{item.short_description}</p>
			</div>
		</section>
	)
}

export default ItemCard

import Image from 'next/image'

const ImageGrid = () => {
	return (
		<div className='container mx-auto grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 md:grid-rows-2'>
			<div className='col-span-1 row-span-2'>
				<Image
					src='/images/misc/studio.jpg'
					alt='Image 1'
					width={500}
					height={300}
					className='rounded-md object-cover w-full h-full'
				/>
			</div>

			<div>
				<Image
					src='/images/misc/work_day.jpg'
					alt='Image 2'
					width={200}
					height={150}
					className='rounded-md object-cover w-full h-[30vh] md:h-[35vh] md:object-top'
				/>
			</div>
			<div>
				<Image
					// src='/images/misc/color_fabric.jpg'
					src='/images/misc/color_fabric.jpg'
					alt='Image 3'
					width={200}
					height={150}
					className='rounded-md object-cover w-full h-[30vh] md:h-[35vh] md:object-top'
				/>
			</div>

			<div>
				<Image
					src='/images/misc/clothes_on_rack.jpg'
					alt='Image 4'
					width={500}
					height={600}
					className='rounded-md object-cover w-full h-[30vh] md:h-[35vh] md:object-top'
				/>
			</div>
			<div>
				<Image
					src='/images/misc/ulla_bengt_studio.jpg'
					alt='Image 5'
					width={500}
					height={600}
					className='rounded-md object-cover w-full h-[30vh] md:h-[35vh]'
				/>
			</div>
		</div>
	)
}

export default ImageGrid

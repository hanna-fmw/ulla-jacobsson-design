'use client'
import { useState } from 'react'
import HeroContent from './components/HeroContent'
import ItemCard from './components/ItemCard'
import items from '@/data/db.json'
import Link from 'next/link'
import Image from 'next/image'
import Modal from './components/Modal'
import SizeChart from './components/SizeChart'

type Item = {
	id: number
	model_name?: string
	short_description?: string
	image?: string
	price?: string
}

const Home = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	return (
		<main>
			<section className='mx-auto bg-navbar-link-hover-color pr-5 rounded-[3px] w-[100vw] h-[90vh] md:w-[100vw] md:h-[90vh] md:pr-10 overflow-hidden relative lg:w-[100vw] lg:h-[90vh]'>
				<Image
					src='/images/rosa-hero.png'
					width={300}
					height={250}
					alt='hero image'
					className='h-[100%] w-auto object-cover lg:h-[100%] lg:w-auto'
				/>

				<HeroContent
					postTitle='Hållbart mode för alla'
					subheading='Skapat med passion och omsorg i hjärtat av vackra Hälsingland, där varje plagg berättar en historia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Sed vulputate auctor justo.
'
				/>
			</section>

			<section className='mx-auto my-10 sm:my-20 w-[80vw] md:w-[70vw] md:my-28'>
				<h2 className='font-inter text-sm sm:text-base md:text-lg font-semibold uppercase tracking-[1px] '>
					Om Ulla Jacobsson Design
				</h2>

				<p className='text-base md:text-xl'>
					Välkommen till mitt lilla modeuniversum! Jag har sytt kläder i många år från min
					pittoreska ateljé i det vackra Järvsö i Hälsingland. Min passion för unika tyger och
					tidlösa plagg har tagit mig på otaliga äventyr till auktioner och märkliga platser där jag
					fyndar tyger som berättar historier. Varje bit tyg jag väljer blir till en del av en
					begränsad kollektion av plagg, allt från vardagskläder till lite festligare nummer.
					Eftersom allt material är återanvänt bidrar varje plagg inte bara till din garderob utan
					också till en mer hållbar värld.
				</p>

				<p className='text-base md:text-xl'>
					Om du är nyfiken på vad som finns tillgängligt just nu eller har en speciell förfrågan,
					tveka inte att skicka mig ett mail. Jag kan berätta vilka plagg som är färdigsydda och
					redo att skickas, vilka storlekar som finns, eller visa dig vårt urval av tyger i olika
					material, mönster och färger. Du är en del av skapandeprocessen här, och jag älskar att
					anpassa kläder som känns rätt just för dig.
				</p>

				<p className='text-base md:text-xl'>
					Du hittar också mina kläder i fysiska butiker &ndash; i{' '}
					<Link href='https://example.com/stenegard'>
						<span className='text-hero-title-color-pink hover:font-semibold'>Gårdsbutiken</span>
					</Link>{' '}
					på Stenegård i Järvsö och i{' '}
					<Link href='https://example.com/tidlos'>
						<span className='text-hero-title-color-pink hover:font-semibold'>Butik Tidlös</span>
					</Link>{' '}
					i Vattlång. Besök gärna deras webbplatser för mer information om öppettider och mer.
				</p>

				<p className='text-base md:text-xl mb-2'>Varmt välkommen att kontakta mig!</p>
				<div className='flex items-center mt-812 gap-14 md:mt-8'>
					<div className='flex flex-col text-base md:text-xl'>
						<span>Ulla Jacobsson</span>
						<span className='cursor-pointer text-hero-title-color-pink hover:font-semibold'>
							<a href='mailto:ulla@ullajacobssondesign.se'>ulla@ullajacobssondesign.se</a>
						</span>
					</div>
				</div>
			</section>
			<section className='bg-navbar-link-hover-color w-screen md:py-20 mt-14 md:mt-16 px-[20px] md:px-[70px] lg:px-[200px]'>
				<div className='pt-10 md:pt-12'>
					<h2 className='font-inter text-sm sm:text-base md:text-lg font-semibold uppercase tracking-[1px] '>
						Ett axplock
					</h2>
				</div>
				<div>
					<p className='text-base md:text-xl mb-4'>
						En måttabell för samtliga modeller finns{' '}
						<button className='text-hero-title-color-pink hover:font-semibold' onClick={openModal}>
							här
						</button>
						.
					</p>

					<Modal isOpen={isModalOpen} onClose={closeModal}>
						<div className='flex flex-col items-center mb-6'>
							<h2 className='font-inter text-sm sm:text-base md:text-lg font-semibold uppercase tracking-[1px] '>
								Måttabell
							</h2>
							<p className='text-lg mb-4'>
								Måtten gäller för följande modeller: Vera, Mia och Saga
							</p>
						</div>
						<SizeChart />
					</Modal>
				</div>

				<div className='pb-5 mx-auto grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
					{items.map((item: Item) => (
						<ItemCard key={item.id} item={item} />
					))}
				</div>
			</section>
		</main>
	)
}

export default Home

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
			<section className='mx-auto bg-light-gray pr-5 rounded-[3px] w-[100vw] h-[85vh] sm:h-[100vh] md:w-[100vw] md:h-[90vh] md:pr-10 overflow-hidden relative lg:w-[100vw] lg:h-[90vh]'>
				<Image
					src='/images/hero.png'
					width={300}
					height={250}
					alt='hero image'
					className='h-[100%] w-auto object-cover lg:h-[100%] lg:w-auto'
				/>

				<HeroContent
					postTitle='Hållbart mode för alla'
					subheading='Skapat med passion i hjärtat av Hälsingland, där varje plagg berättar en historia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
'
				/>
			</section>
			<section className='bg-[#232323]'>
				<div className='px-4 py-10 font-inter text-white text-[0.6rem] sm:text-xs md:font-normal uppercase tracking-[1px] md:text-right lg:w-[90vw]'>
					Ulla Jacobsson Design
				</div>
			</section>

			<section className='mx-auto font-lora mt-6 mb-10 w-[80vw] md:mt-12 md:mb-12 md:w-[70vw] lg:w-[70vw] lg:my-16'>
				<h2 className='font-lora font-medium text-base md:text-xl'>Om Ulla Jacobsson Design</h2>
				<div className='hidden md:block'>
					<p className='font-lora text-xs sm:text-sm'>
						Välkommen till mitt lilla modeuniversum! Jag har sytt kläder i många år från min
						pittoreska ateljé i det vackra Järvsö i Hälsingland. Min passion för unika tyger och
						tidlösa plagg har tagit mig på otaliga äventyr till auktioner och märkliga platser där
						jag fyndar tyger som berättar historier. Varje bit tyg jag väljer blir till en del av en
						begränsad kollektion av plagg, allt från vardagskläder till lite festligare nummer.
						Eftersom allt material är återanvänt bidrar varje plagg inte bara till din garderob utan
						också till en mer hållbar värld.
					</p>
					<p className='font-lora text-xs sm:text-sm'>
						Om du är nyfiken på vad som finns tillgängligt just nu eller har en speciell förfrågan,
						tveka inte att skicka mig ett mail. Jag kan berätta vilka plagg som är färdigsydda och
						redo att skickas, vilka storlekar som finns, eller visa dig vårt urval av tyger i olika
						material, mönster och färger. Du är en del av skapandeprocessen här, och jag älskar att
						anpassa kläder som känns rätt just för dig.
					</p>
					´
				</div>
				<div className='block md:hidden'>
					<p className='font-lora text-xs sm:text-sm'>
						Välkommen till mitt modeuniversum! Jag syr kläder från min ateljé i Järvsö, Hälsingland.
						Min passion för unika tyger och tidlösa plagg leder till kollektioner av återanvänt
						material som bidrar till en hållbar värld.
					</p>

					<p className='font-lora text-xs sm:text-sm'>
						Nyfiken på vad som finns eller har en speciell förfrågan? Maila mig för info om plagg,
						storlekar och tyger. Jag anpassar gärna kläder som känns rätt för dig.
					</p>
				</div>

				<p className='font-lora text-xs sm:text-sm'>
					Du hittar också mina kläder i fysiska butiker &ndash; i{' '}
					<Link href='https://example.com/stenegard'>
						<span className='font-lora  text-xs sm:text-sm underline underline-offset-2 hover:font-semibold'>
							Gårdsbutiken
						</span>
					</Link>{' '}
					på Stenegård i Järvsö och i{' '}
					<Link href='https://example.com/tidlos'>
						<span className='font-lora text-xs sm:text-sm underline underline-offset-2 hover:font-semibold'>
							Butik Tidlös
						</span>
					</Link>{' '}
					i Vattlång. Besök gärna deras webbplatser för mer information om öppettider och mer.
				</p>

				<p className='font-lora text-xs sm:text-sm'>Varmt välkommen att kontakta mig!</p>
				<div className='flex items-center mt-8 gap-14 md:mt-8'>
					<div className='flex flex-col'>
						<span className='font-lora text-xs sm:text-sm'>Ulla Jacobsson</span>
						<span>
							<a
								href='mailto:ulla@ullajacobssondesign.se'
								className='font-lora text-xs sm:text-sm cursor-pointer font-medium text-accent-pink-vivid'>
								ulla@ullajacobssondesign.se
							</a>
						</span>
					</div>
				</div>
			</section>
			<section className='bg-light-gray pt-6 pb-10 md:pt-8 md:pb-8'>
				<section className='mx-auto font-lora w-[90vw] sm:w-[65vw] md:w-[80vw] lg:w-[70vw]'>
					<h2 className='font-lora font-medium text-base md:text-xl'>Ett axplock</h2>

					<div>
						<p className='font-lora text-xs sm:text-sm mb-4'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum enim sint
							ratione? Exercitationem ex quod velit ullam at odit esse! Molestiae porro accusamus
							sequi iste doloribus repellendus incidunt quam.
						</p>
						<p className='font-lora text-xs sm:text-sm mb-4'>
							En måttabell för samtliga modeller finns{' '}
							<button
								className='text-inherit underline underline-offset-2 hover:font-semibold'
								onClick={openModal}>
								här
							</button>
							.
						</p>

						<Modal isOpen={isModalOpen} onClose={closeModal}>
							<div className='flex flex-col items-center mb-4'>
								<h3 className='font-lora text-center text-xs mt-3 font-normal sm:text-xs md:text-sm uppercase tracking-[1px]'>
									Måttabell
								</h3>

								<p className='font-lora text-xs text-center mb-4 sm:text-sm'>
									Måtten gäller för följande modeller: Vera, Mia, Ella och Saga.
								</p>
							</div>
							<SizeChart />
						</Modal>
					</div>

					<div className='grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-6 md:gap-1 md:w-full md:grid-cols-3 lg:grid-cols-4'>
						{items.map((item: Item) => (
							<ItemCard key={item.id} item={item} />
						))}
					</div>
				</section>
			</section>
			<section className='mx-auto font-lora mt-6 mb-10 md:mt-16 md:mb-16 lg:mt-20 lg:mb-20 w-[80vw] md:w-[70vw] lg:w-[70vw] md:my-20'>
				<h2 className='font-lora font-medium text-base md:text-xl'>Ulla Jacobsson Kläder</h2>

				<div className='md:grid md:grid-cols-2 md:gap-10 lg:gap-12'>
					<div>
						<p className='font-lora text-xs sm:text-sm'>
							Lorem, ipsum sit amet consectetur adipisicing elit. Architecto, deserunt, dolorem
							officia voluptatum neque ipsam expedita quam fugit est, enim magni inventore illum quo
							impedit facere. Ipsam expedita quam fugit est. Architecto, deserunt, dolorem officia
							voluptatum. Autem!
						</p>
						<section className='font-lora w-full flex items-center mb-4'>
							{/* <p className='flex items-center gap-3' style={{ transform: 'translateY(25%)' }}> */}
							{/* <Link href='/' className='hover:font-medium'>
										www.ullajacobssondesign.se
									</Link>{' '}
									<span className='inline-block h-[6px] w-[6px] rounded-full bg-[#333]'></span>{' '} */}
							<a
								href='https://ullajacobsson.se/'
								className='font-lora text-xs sm:text-sm hover:font-medium'>
								www.ullajacobsson.se
							</a>
							{/* </p> */}
						</section>
					</div>
					<div className='flex justify-between gap-2 sm:w-[35vw] lg:w-[25vw] md:grid md:grid-cols-2 md:gap-4'>
						<Image
							src='/images/UJK/UJK_ella_scarf.jpg'
							alt='profile'
							width={200}
							height={200}
							className='h-[35vh] md:h-[30vh] rounded-md object-cover'
						/>

						<Image
							src='/images/UJK/UJK_scarf.jpg'
							alt='profile'
							width={200}
							height={200}
							className='h-[35vh] md:h-[30vh] rounded-md object-cover'
						/>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Home

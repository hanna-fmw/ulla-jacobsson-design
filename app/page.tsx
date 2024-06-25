import HeroContent from './components/HeroContent'
import ItemCard from './components/ItemCard'
import items from '@/data/db.json'

import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'

type Item = {
	id: number
	model_name?: string
	short_description?: string
	image?: string
	price?: string
}

const Home = () => {
	return (
		<main>
			<section className='mx-auto my-28 bg-navbar-link-hover-color rounded-[5px] w-[80vw] h-[65vh] sm:h-[80vh] md:w-[70vw] md:h-[60vh] overflow-hidden relative'>
				<Image src='/images/rosa-hero.png' width={300} height={250} alt='hero image' />
				<HeroContent
					postTitle='Hållbart mode för alla'
					subheading='Skapat med passion och omsorg i hjärtat av vackra Hälsingland, där varje plagg berättar en historia.'
				/>
			</section>

			<section className='mx-auto my-20 font-lora w-[80vw] md:w-[70vw] md:my-28'>
				<h2>Om Ulla Jacobsson Design</h2>
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
					i Vattlånga. Besök gärna deras webbplatser för mer information om öppettider och mer.
				</p>

				<p className='text-base md:text-xl mb-6'>Varmt välkommen att kontakta mig!</p>
				<div className='flex items-center mt-12 gap-14 md:mt-14'>
					<Image src={logo} alt='logo' width={65} height={65} />
					<div className='flex flex-col text-base md:text-xl'>
						<span>Ulla Jacobsson</span>
						<span className='cursor-pointer text-hero-title-color-pink hover:font-semibold'>
							ulla@ullajacobssondesign.se
						</span>
					</div>
				</div>
			</section>
			<section className='bg-navbar-link-hover-color w-screen md:py-20 mt-14 md:mt-16 px-[20px] md:px-[70px] lg:px-[200px]'>
				<div className='pt-12 md:pt-0'>
					<h2>Ett axplock</h2>
				</div>
				<div className='pb-5 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
					{items.map((item: Item) => (
						<ItemCard key={item.id} item={item} />
					))}
				</div>
			</section>
		</main>
	)
}

export default Home

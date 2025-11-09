import Link from 'next/link';
import { Button } from '../ui/button';
import HeroCarousel from './HeroCarousel';

function Hero() {
	return (
		<section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
			<div>
				<h1 className='max-w-2xl font-bold capitalize text-4xl tracking-tight sm:text-6xl'>
					We are changing the way people dive
				</h1>
				<p className='mt-8 max-w-xl text-lg leading-8'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
					ipsam modi quam adipisci dignissimos eveniet quas facilis corrupti
					porro laboriosam, quae dicta possimus aliquid vero distinctio cumque
					rerum, debitis commodi. Ullam animi qui rem, aut porro fugit tempora
					dolorem expedita molestias ab cumque assumenda reiciendis officiis
					doloribus beatae. Quisquam, magnam sit esse cumque temporibus aperiam
					perspiciatis eum architecto mollitia adipisci!
				</p>
				<Button asChild size='lg' className='mt-10'>
					<Link href='/products'>Our Products</Link>
				</Button>
			</div>
			<HeroCarousel />
		</section>
	);
}
export default Hero;

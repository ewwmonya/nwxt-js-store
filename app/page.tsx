import Divider from '@/components/global/Divider';
import LoadingContainer from '@/components/global/LoadingContainer';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Hero from '@/components/home/Hero';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';

function HomePage() {
	return (
		<>
			<Hero />
			<Divider />
			<Suspense fallback={<LoadingContainer />}>
				<FeaturedProducts />
			</Suspense>
			<Divider />
		</>
	);
}
export default HomePage;

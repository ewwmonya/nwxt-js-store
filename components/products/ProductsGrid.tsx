import { Products } from '@prisma/client';
import { formatPrice } from '@/utils/formatPrice';
import { Card, CardContent, CardTitle, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import { FaTruckFast } from 'react-icons/fa6';
import Image from 'next/image';
import FavoriteToggleButton from './FavoriteToggleButton';
import { Button } from '../ui/button';
function ProductsGrid({ products }: { products: Products[] }) {
	return (
		<div className=' grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
			{products.map((product) => {
				const { name, price, image, id: productId } = product;
				const dollarsAmount = formatPrice(price);
				return (
					<article key={productId} className='group relative'>
						<Card className='shadow-sm border-none dark:bg-slate-900'>
							<CardContent className='p-0'>
								<div className='relative h-64 rounded overflow-hidden '>
									<Link className='' href={`products/${productId}`}>
										<Image
											alt={name}
											src={image}
											fill
											sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
											priority
											className='rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500'
										/>
									</Link>
								</div>
								<div className='my-4 text-center mx-auto'>
									<CardTitle>
										<p className='text-lg  capitalize'>{name}</p>
										<div className=' text-green-700 flex items-center justify-center gap-1'>
											<p className='my-1'>Free Shipping </p>
											<FaTruckFast className='w-6 h-6' />
										</div>
										<p className='text-muted-foreground mt-2 text-center'>
											{dollarsAmount}
										</p>
									</CardTitle>
								</div>
								<div className='absolute top-4 right-4 z-100'>
									<FavoriteToggleButton
										productId={productId}
										className={
											name === 'avant-garde lamp' ? 'text-red-600' : ''
										}
									/>
								</div>
								<CardFooter className='flex justify-end'>
									<Button
										variant='secondary'
										className=' hover:bg-orange-600 hover:text-white'
									>
										Add To Cart
									</Button>
								</CardFooter>
							</CardContent>
						</Card>
					</article>
				);
			})}
		</div>
	);
}
export default ProductsGrid;

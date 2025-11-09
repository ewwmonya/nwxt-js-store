import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import Link from 'next/link';

async function CartButton() {
	const numItemsInCart = 9;
	return (
		<Button
			asChild
			variant={'link'}
			className='flex justify-center items-center relative outline-none'
		>
			<Link href={'/cart'}>
				<PiShoppingCartSimpleFill className='w-10 h-8 text-black dark:text-white' />
				<Badge
					className='absolute -right-0.5 -top-2  bg-primary text-white rounded-full flex items-center justify-center text-xs shadow-sm'
					variant={'outline'}
				>
					{numItemsInCart}
				</Badge>
			</Link>
		</Button>
	);
}
export default CartButton;

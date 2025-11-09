import { FaHeart } from 'react-icons/fa';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

function FavoriteToggleButton({
	productId,
	className,
}: {
	productId?: string;
	className?: string;
}) {
	return (
		<>
			<Button
				size='icon'
				variant='outline'
				className='p-2 bg-white bg-opacity-35'
			>
				<FaHeart className={cn(className)} />
			</Button>
		</>
	);
}
export default FavoriteToggleButton;

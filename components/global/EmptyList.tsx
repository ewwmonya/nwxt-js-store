import { cn } from '@/lib/utils';

interface EmptyType {
	heading?: string;
	className?: string;
}

function EmptyList({ heading = 'No items found', className }: EmptyType) {
	return <h2 className={cn('text-xl', className)}>{heading}</h2>;
}
export default EmptyList;

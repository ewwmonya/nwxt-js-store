import { Skeleton } from '../ui/skeleton';
import { Card, CardContent } from '../ui/card';
export function LoadingProduct({}) {
	return (
		<Card className='shadow-sm border-none'>
			<CardContent className='p-0 h-64 md:h-64'>
				<Skeleton className='h-64 md:h-64 w-full dark:bg-muted' />
				<Skeleton className='h-4 w-3/4 mt-4 dark:bg-muted' />
				<Skeleton className='h-4 w-1/4 mt-4 dark:bg-muted' />
			</CardContent>
		</Card>
	);
}

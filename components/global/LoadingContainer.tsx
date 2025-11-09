import { LoadingProduct } from './LoadingProduct';

function LoadingContainer() {
	return (
		<div className='mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
			<LoadingProduct />
			<LoadingProduct />
			<LoadingProduct />
		</div>
	);
}
export default LoadingContainer;

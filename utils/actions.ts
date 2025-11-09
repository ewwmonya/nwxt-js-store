import db from '@/utils/db';
import { redirect } from 'next/navigation';

export const fetchFeaturedProducts = async () => {
	const products = await db.products.findMany({
		where: {
			featured: true,
		},
	});
	return products;
};

export const fetchAllProducts = ({ search = '' }: { search: string }) => {
	const products = db.products.findMany({
		where: {
			OR: [
				{ name: { contains: search, mode: 'insensitive' } },
				{ company: { contains: search, mode: 'insensitive' } },
			],
		},
		orderBy: {
			createdAt: 'desc',
		},
	});
	return products;
};

export const fetchSingleProduct = async (productId: string) => {
	const product = await db.products.findFirst({
		where: {
			id: productId,
		},
	});
	if (!product) redirect('/products');
	return product;
};

export const fetchAllProductsWithPriceLess = async ({
	inputLessPrice,
	inputAtLeastPrice,
}: {
	inputLessPrice?: number;
	inputAtLeastPrice?: number;
}) => {
	const products = await db.products.findMany({
		where: {
			OR: [
				{
					price: {
						lte: inputLessPrice, // lowest price exp. under 300
					},
				},
				{
					price: {
						gte: inputAtLeastPrice, // lowest price exp. 200 -300
					},
				},
			],
		},
	});
	return products;
};

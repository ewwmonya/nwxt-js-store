import db from '@/utils/db';
import { redirect } from 'next/navigation';

const isDatabaseConfigured = () => {
        if (process.env.DATABASE_URL) return true;
        console.warn(
                'DATABASE_URL is not set. Returning fallback results so the build can complete. '
        );
        return false;
};

export const fetchFeaturedProducts = async () => {
        if (!isDatabaseConfigured()) return [];
        try {
                const products = await db.products.findMany({
                        where: {
                                featured: true,
                        },
                });
                return products;
        } catch (error) {
                console.error('Failed to fetch featured products', error);
                return [];
        }
};

export const fetchAllProducts = async ({ search = '' }: { search: string }) => {
        if (!isDatabaseConfigured()) return [];
        try {
                const products = await db.products.findMany({
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
        } catch (error) {
                console.error('Failed to fetch products', error);
                return [];
        }
};

export const fetchSingleProduct = async (productId: string) => {
        if (!isDatabaseConfigured()) redirect('/products');
        try {
                const product = await db.products.findFirst({
                        where: {
                                id: productId,
                        },
                });
                if (!product) redirect('/products');
                return product;
        } catch (error) {
                console.error('Failed to fetch product', error);
                redirect('/products');
        }
};

export const fetchAllProductsWithPriceLess = async ({
        inputLessPrice,
        inputAtLeastPrice,
}: {
        inputLessPrice?: number;
        inputAtLeastPrice?: number;
}) => {
        if (!isDatabaseConfigured()) return [];
        try {
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
        } catch (error) {
                console.error('Failed to filter products by price', error);
                return [];
        }
};

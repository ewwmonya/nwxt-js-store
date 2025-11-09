const { PrismaClient } = require('@prisma/client');
const products = require('../utils/products.json');
const prisma = new PrismaClient();

async function main() {
	for (const product of products) {
		console.log('Product added: ', product);
		await prisma.products.create({
			data: product,
		});
	}
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

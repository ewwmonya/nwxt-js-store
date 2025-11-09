export const formatPrice = (amount: number | null) => {
	const value = amount || 0;
	return new Intl.NumberFormat('en-us', {
		currency: 'USD',
		style: 'currency',
	}).format(value);
};

'use client';
import { Input } from '../ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';

function NavSearch() {
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const [search, setSearch] = useState(
		searchParams.get('search')?.toString() || ''
	);
	const handleSearch = useDebouncedCallback((value: string) => {
		const params = new URLSearchParams(searchParams);
		if (value) {
			params.set('search', value);
		} else {
			params.delete('search');
		}
		replace(`/products?${params.toString()}`);
	}, 200);

	useEffect(() => {
		if (!searchParams.get('search')) {
			setSearch('');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams.get('search')]);

	return (
		<Input
			type='search'
			placeholder='Search a product...'
			className='sm:max-w-lg max-w-xs dark:bg-muted'
			value={search}
			onChange={(e) => {
				setSearch(e.target.value);
				handleSearch(e.target.value);
			}}
		/>
	);
}
export default NavSearch;

import { Suspense } from 'react';
import Container from '../global/Container';
import { CartButton, DarkMode, LinksDropdown, Logo, NavSearch } from './index';

function Navbar() {
	return (
		<nav className='border-b'>
			<Container className='flex flex-row  sm:justify-between sm:items-center flex-nowrap gap-4 py-8'>
				<div className='flex gap-4'>
					<Logo />
				</div>
				<Suspense>
					<NavSearch />
				</Suspense>
				<div className='flex gap-4 items-center'>
					<CartButton />
					<DarkMode />
					<LinksDropdown />
				</div>
			</Container>
		</nav>
	);
}
export default Navbar;

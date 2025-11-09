import Link from 'next/link';
import { Button } from '../ui/button';
import { TbScubaDiving } from 'react-icons/tb';
function Logo() {
	return (
		<Link href='/' className='flex flex-row gap-2 border-b border-accent'>
			<TbScubaDiving className='w-8 h-8 bg-primary text-black p-1 rounded-sm' />
			<span className='text-3xl font-black'>Dip</span>
		</Link>
	);
}
export default Logo;

import { links } from '@/utils/links';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { LuAlignLeft } from 'react-icons/lu';

function LinksDropdown() {
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<LuAlignLeft />
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuSeparator />
					{links.map((link) => {
						return (
							<DropdownMenuItem key={link.label} className='m-2'>
								<Link
									className='p-2 text-primary tracking-wide capitalize w-full'
									href={link.href}
								>
									{link.label}
								</Link>
							</DropdownMenuItem>
						);
					})}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
export default LinksDropdown;

import { Separator } from '@radix-ui/react-dropdown-menu';

function SectionTitle({ text }: { text: string }) {
	return (
		<>
			<h2 className='text-3xl font-medium tracking-wider capitalize mb-8'>
				{text}
			</h2>
			<Separator />
		</>
	);
}
export default SectionTitle;

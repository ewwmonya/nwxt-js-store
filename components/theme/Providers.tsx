'use client';

import { ThemeProvider } from './ThemeProvider';

function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			{/* TOAST */}
			<ThemeProvider
				attribute='class'
				defaultTheme='system'
				enableSystem
				disableTransitionOnChange
			>
				{children}
			</ThemeProvider>
		</>
	);
}
export default Providers;

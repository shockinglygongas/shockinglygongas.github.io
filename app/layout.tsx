import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'ShockinglyGongas',
	description: 'Pokémon ROM hacks by Gongas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<div className="shell">{children}</div>
			</body>
		</html>
	);
}

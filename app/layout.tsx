import type { Metadata } from 'next';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';

config.autoAddCss = false;

export const metadata: Metadata = {
	title: 'ShockinglyGongas',
	description: 'Pokémon Royal Sapphire and Evergreen by Gongas / ShockinglyGongas! ',
	icons: { icon: '/img/mascot.png' },
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

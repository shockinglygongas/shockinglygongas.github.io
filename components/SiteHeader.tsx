import Link from 'next/link';
import type { ReactNode } from 'react';

const LINKS = [
	{ href: '/', label: 'HUB' },
	{ href: '/faq', label: 'FAQ' },
	{ href: '/credits', label: 'CREDITS' },
];

export function SiteHeader({ current, brand }: { current: string; brand?: ReactNode }) {
	return (
		<header className="site-header panel">
			<Link className="site-mascot" href="/" aria-label="Hub">
				<img src="/img/mascot.png" alt="" />
			</Link>
			<div className="site-brand">
				{brand ?? <div className="slot" style={{ minWidth: 240 }}>website logoy</div>}
			</div>
			<nav className="site-nav">
				{LINKS.map((link) => (
					<Link key={link.href} href={link.href} aria-current={link.href === current ? 'page' : undefined}>
						{link.label}
					</Link>
				))}
			</nav>
		</header>
	);
}

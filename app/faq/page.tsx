import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export default function FaqPage() {
	return (
		<>
			<SiteHeader current="/faq" />
			<main className="panel">
				<h1>FAQ</h1>
				<div className="slot" style={{ minHeight: 320 }}>nothing is here yet</div>
			</main>
			<SiteFooter />
		</>
	);
}

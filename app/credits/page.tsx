import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export default function CreditsPage() {
	return (
		<>
			<SiteHeader current="/credits" />
			<main className="panel">
				<h1>Credits</h1>
				<div className="slot" style={{ minHeight: 320 }}>bel was here</div>
			</main>
			<SiteFooter />
		</>
	);
}

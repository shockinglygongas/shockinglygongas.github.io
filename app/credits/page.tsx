import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { SectionTabs } from '@/components/SectionTabs';
import { getGame } from '@/lib/games';

export default function CreditsPage() {
	return (
		<>
			<SiteHeader current="/credits" />
			<main className="panel">
				<h1>Credits</h1>
				<SectionTabs
					tabs={[
						{ id: 'royal-sapphire', label: 'Royal Sapphire', sections: getGame('royal-sapphire')?.credits ?? [] },
						{ id: 'evergreen', label: 'Evergreen', sections: getGame('evergreen')?.credits ?? [] },
						{ id: 'extra', label: 'Extra', sections: [] },
					]}
				/>
			</main>
			<SiteFooter />
		</>
	);
}

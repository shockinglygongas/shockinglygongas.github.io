import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const CREDITS = [
	{
		heading: 'Lead Developer / Map Changes / Fight Design',
		names: ['Gongas'],
	},
	{
		heading: 'Playtesting / Balancing / Feedback Team',
		names: ['Drayano', 'Vylegon', 'Mal', 'Zemaille', 'Koga', 'Invoise', 'Buggford', 'Dreamie', 'Bagon', 'Max', 'Llamarizzi', 'Vik'],
	},
	{
		heading: 'Spritework & Assets',
		names: ['idilio', 'goliathgastropod', 'StarGazaar', 'weterpete', 'justalavender', 'LouLilie', 'Ninjacat26', 'SkidMarc25'],
	},
	{
		heading: 'Music & Arrangements',
		names: ['JoeyZeed', 'zg4north', 'PacoScarso', 'Ninjacat26'],
	},
	{
		heading: 'Tools / Resources',
		names: ['haven', 'defa', 'HZLA', '7decibel', 'shucaberry'],
	},
];

export default function CreditsPage() {
	return (
		<>
			<SiteHeader current="/credits" />
			<main className="panel">
				<h1>Credits</h1>
				<div className="tabs">
					{CREDITS.map((section) => (
						<article key={section.heading}>
							<h3>{section.heading}</h3>
							<ul>
								{section.names.map((name) => (
									<li key={name}>{name}</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</main>
			<SiteFooter />
		</>
	);
}

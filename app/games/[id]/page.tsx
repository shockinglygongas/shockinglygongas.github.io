import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { DownloadCount } from '@/components/DownloadCount';
import { RomPatcher } from '@/components/RomPatcher';
import { Carousel } from '@/components/Carousel';
import { SectionTabs } from '@/components/SectionTabs';
import { VISIBLE_GAMES, getGame } from '@/lib/games';

export function generateStaticParams() {
	return VISIBLE_GAMES.map((game) => ({ id: game.id }));
}

export default async function GamePage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const game = getGame(id);
	if (!game || game.status !== 'visible') notFound();

	const emulators = game.emulators ?? { pc: [], ios: [], android: [] };

	return (
		<>
			<SiteHeader
				current="/"
				brand={
					game.logo ? (
						<img className="game-logo" src={game.logo} alt={game.title} />
					) : (
						<div className="slot" style={{ minWidth: 240 }}>{game.title} logo</div>
					)
				}
			/>
			<main className="panel">
				{game.links?.length ? (
					<nav className="game-nav">
						{game.links.map((link) => (
							<a
								key={link.label}
								href={link.url}
								target={link.url.startsWith('http') ? '_blank' : undefined}
								rel={link.url.startsWith('http') ? 'noreferrer' : undefined}
							>
								{link.label}
							</a>
						))}
					</nav>
				) : null}

				<div className="game-detail">
					<section>
						<h2>Trailer & Screenshots</h2>
						{game.screenshots?.length || game.trailer ? (
							<Carousel shots={game.screenshots ?? []} trailer={game.trailer} label={game.title} />
						) : (
							<div className="slot" style={{ minHeight: 320 }}>screenshots pending</div>
						)}
					</section>

					<section>
						<h2>Description</h2>
						{game.description?.length ? (
							game.description.map((para, i) => <p key={i}>{para}</p>)
						) : (
							<div className="slot" style={{ minHeight: 240 }}>description pending</div>
						)}
						{game.tags?.length ? (
							<ul className="tag-grid">
								{game.tags.map((tag) => (
									<li key={tag}>{tag}</li>
								))}
							</ul>
						) : null}
					</section>
				</div>

				<SectionTabs
					tabs={[
						{ id: 'features', label: 'Features', sections: game.features ?? [] },
						{ id: 'faq', label: 'FAQ', sections: game.faq ?? [] },
						{ id: 'credits', label: 'Credits', sections: game.credits ?? [] },
					]}
				/>

				<h2>Emulator Support</h2>
				<table className="emulators">
					<thead>
						<tr>
							<th>PC</th>
							<th>iOS</th>
							<th>Android</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							{(['pc', 'ios', 'android'] as const).map((platform) => (
								<td key={platform}>
									{emulators[platform].length ? emulators[platform].join(', ') : <span className="slot">pending</span>}
								</td>
							))}
						</tr>
					</tbody>
				</table>

				{game.patch ? (
					<RomPatcher gameId={game.id} title={game.title} patch={game.patch} />
				) : (
					<div className="slot" style={{ minHeight: 160, marginTop: 24 }}>todo: need BPS</div>
				)}

				<DownloadCount gameId={game.id} label="number of downloads" />
				<p className="counter">
					<Link href="/">back to hub</Link>
				</p>
			</main>
			<SiteFooter />
		</>
	);
}

export const dynamicParams = false;

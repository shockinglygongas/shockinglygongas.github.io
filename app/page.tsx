import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { GameCard } from '@/components/GameCard';
import { DownloadCount } from '@/components/DownloadCount';
import { GAMES } from '@/lib/games';

export default function HubPage() {
	return (
		<>
			<SiteHeader current="/" />
			<main className="panel">
				<h1>select a game for more information</h1>
				<div className="game-grid">
					{GAMES.map((game) => (
						<GameCard key={game.id} game={game} />
					))}
				</div>
				<DownloadCount label="number of downloads" />
			</main>
			<SiteFooter />
		</>
	);
}

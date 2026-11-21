import Link from 'next/link';
import type { Game } from '@/lib/games';

export function GameCard({ game }: { game: Game }) {
	if (game.status === 'unrevealed') {
		return (
			<div className="game-card" data-status="unrevealed">
				<div className="slot">unrevealed</div>
			</div>
		);
	}

	return (
		<Link className="game-card" href={`/games/${game.id}`} data-status={game.status}>
			<div className="slot">cover art</div>
			<strong>{game.title}</strong>
		</Link>
	);
}

import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { Game } from '@/lib/games';
import { Bubbles } from '@/components/Bubbles';

export function GameCard({ game }: { game: Game }) {
	if (game.status === 'unrevealed') {
		return (
			<div className="game-card" data-status="unrevealed">
				<div className="slot">unrevealed</div>
			</div>
		);
	}

	if (game.comingSoon) {
		return (
			<div className="game-card" data-status="coming-soon" style={{ '--accent': game.accent } as CSSProperties}>
				{game.cover ? <img className="game-cover" src={game.cover} alt={game.title} loading="lazy" /> : null}
				<p className="coming-soon">coming soon</p>
			</div>
		);
	}

	return (
		<Link
			className="game-card"
			href={`/games/${game.id}`}
			data-status={game.status}
			aria-label={game.title}
			style={{ '--accent': game.accent } as CSSProperties}
		>
			{game.effect === 'bubbles' ? <Bubbles /> : null}
			{game.cover ? (
				<img className="game-cover" src={game.cover} alt="" loading="lazy" />
			) : (
				<div className="slot">cover art</div>
			)}
		</Link>
	);
}

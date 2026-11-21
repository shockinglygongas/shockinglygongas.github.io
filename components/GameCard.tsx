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

'use client';

import { useEffect, useState } from 'react';
import { downloads, sum } from '@/lib/downloads';

export function DownloadCount({ gameId, label }: { gameId?: string; label: string }) {
	const [count, setCount] = useState<number | null>(null);

	useEffect(() => {
		let active = true;
		downloads
			.getAll()
			.then((counts) => {
				if (!active) return;
				setCount(gameId ? (counts[gameId] ?? 0) : sum(counts));
			})
			.catch(() => {
				if (active) setCount(null);
			});
		return () => {
			active = false;
		};
	}, [gameId]);

	return (
		<p className="counter">
			{label}
			<br />
			<strong>{count === null ? '—' : count.toLocaleString()}</strong>
		</p>
	);
}

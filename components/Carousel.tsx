'use client';

import { useState } from 'react';
import type { Screenshot } from '@/lib/games';

type Slide = { kind: 'video'; id: string } | { kind: 'image'; src: string };

export function Carousel({ shots, trailer, label }: { shots: Screenshot[]; trailer?: string; label: string }) {
	const [index, setIndex] = useState(0);

	const slides: Slide[] = [
		...(trailer ? [{ kind: 'video' as const, id: trailer }] : []),
		...shots.map((shot) => ({ kind: 'image' as const, src: shot.src })),
	];

	if (!slides.length) return null;

	const active = slides[index];
	const go = (delta: number) => setIndex((i) => (i + delta + slides.length) % slides.length);

	return (
		<div
			className="carousel"
			role="group"
			aria-roledescription="carousel"
			aria-label={label}
			tabIndex={0}
			onKeyDown={(e) => {
				if (e.key === 'ArrowLeft') go(-1);
				if (e.key === 'ArrowRight') go(1);
			}}
		>
			<div className="carousel-frame">
				{active.kind === 'video' ? (
					<iframe
						src={`https://www.youtube-nocookie.com/embed/${active.id}`}
						title={`${label} trailer`}
						allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
				) : null}
				{slides.map((slide, i) =>
					slide.kind === 'image' ? (
						<img key={slide.src} src={slide.src} alt="" hidden={i !== index} loading={i <= 1 ? 'eager' : 'lazy'} />
					) : null,
				)}
			</div>

			<div className="carousel-controls">
				<button type="button" onClick={() => go(-1)} aria-label="Previous">
					&larr;
				</button>
				<span aria-live="polite">
					{index + 1} / {slides.length}
				</span>
				<button type="button" onClick={() => go(1)} aria-label="Next">
					&rarr;
				</button>
			</div>

			<div className="carousel-thumbs">
				{slides.map((slide, i) => (
					<button
						key={slide.kind === 'video' ? slide.id : slide.src}
						type="button"
						className={i === index ? 'is-active' : undefined}
						aria-label={slide.kind === 'video' ? 'Trailer' : `Screenshot ${trailer ? i : i + 1}`}
						aria-current={i === index || undefined}
						onClick={() => setIndex(i)}
					>
						{slide.kind === 'video' ? (
							<>
								<img src={`https://i.ytimg.com/vi/${slide.id}/mqdefault.jpg`} alt="" loading="lazy" />
								<span className="thumb-play" aria-hidden="true">
									&#9654;
								</span>
							</>
						) : (
							<img src={slide.src} alt="" loading="lazy" />
						)}
					</button>
				))}
			</div>
		</div>
	);
}

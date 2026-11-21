const BUBBLES = [
	{ left: 5, size: 16, delay: 0 },
	{ left: 15, size: 28, delay: 0.8 },
	{ left: 25, size: 14, delay: 0.3 },
	{ left: 35, size: 34, delay: 1.2 },
	{ left: 45, size: 20, delay: 0.5 },
	{ left: 55, size: 38, delay: 1.5 },
	{ left: 65, size: 18, delay: 0.2 },
	{ left: 75, size: 30, delay: 1 },
	{ left: 85, size: 22, delay: 0.6 },
	{ left: 95, size: 26, delay: 1.3 },
];

export function Bubbles() {
	return (
		<div className="bubbles" aria-hidden="true">
			{BUBBLES.map((b, i) => (
				<img
					key={i}
					className="bubble"
					src="/img/bubble.png"
					alt=""
					width={b.size}
					height={b.size}
					style={{ left: `${b.left}%`, animationDelay: `${b.delay}s` }}
				/>
			))}
		</div>
	);
}

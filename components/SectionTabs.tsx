'use client';

import { useId, useState } from 'react';
import type { Feature } from '@/lib/games';

export interface Tab {
	id: string;
	label: string;
	sections: Feature[];
}

export function SectionTabs({ tabs }: { tabs: Tab[] }) {
	const [active, setActive] = useState(0);
	const uid = useId();

	if (!tabs.length) return null;

	const tabId = (i: number) => `${uid}-tab-${tabs[i].id}`;
	const panelId = (i: number) => `${uid}-panel-${tabs[i].id}`;

	const move = (delta: number) => {
		const next = (active + delta + tabs.length) % tabs.length;
		setActive(next);
		document.getElementById(tabId(next))?.focus();
	};

	return (
		<div className="tabs">
			<div role="tablist" aria-label="Game details" className="tablist">
				{tabs.map((tab, i) => (
					<button
						key={tab.id}
						id={tabId(i)}
						type="button"
						role="tab"
						aria-selected={i === active}
						aria-controls={panelId(i)}
						tabIndex={i === active ? 0 : -1}
						className={i === active ? 'is-active' : undefined}
						onClick={() => setActive(i)}
						onKeyDown={(e) => {
							if (e.key === 'ArrowLeft') move(-1);
							if (e.key === 'ArrowRight') move(1);
						}}
					>
						{tab.label}
					</button>
				))}
			</div>

			{tabs.map((tab, i) => (
				<div key={tab.id} id={panelId(i)} role="tabpanel" aria-labelledby={tabId(i)} hidden={i !== active}>
					{tab.sections.length ? (
						tab.sections.map((section, k) => (
							<article key={section.heading ?? k}>
								{section.heading ? <h3>{section.heading}</h3> : null}
								{section.body?.map((para, j) => (
									<p key={j}>{para}</p>
								))}
								{section.list?.length ? (
									section.ordered ? (
										<ol>
											{section.list.map((item) => (
												<li key={item}>{item}</li>
											))}
										</ol>
									) : (
										<ul>
											{section.list.map((item) => (
												<li key={item}>{item}</li>
											))}
										</ul>
									)
								) : null}
							</article>
						))
					) : (
						<div className="slot" style={{ minHeight: 160 }}>
							{tab.label.toLowerCase()} pending
						</div>
					)}
				</div>
			))}
		</div>
	);
}

'use client';

import Script from 'next/script';
import { useCallback } from 'react';
import { downloads } from '@/lib/downloads';
import type { Patch } from '@/lib/games';

interface EmbeddedPatch {
	file: string;
	name: string;
	outputName: string;
	inputMd5?: string;
}

interface PatcherSettings {
	language: string;
	requireValidation: boolean;
	allowDropFiles: boolean;
	onpatch: () => void;
}

declare global {
	interface Window {
		RomPatcherWeb?: {
			initialize: (settings: PatcherSettings, patch: EmbeddedPatch) => void;
		};
	}
}

export function RomPatcher({ gameId, title, patch }: { gameId: string; title: string; patch: Patch }) {
	const start = useCallback(() => {
		const container = document.getElementById('rom-patcher-container');
		try {
			window.RomPatcherWeb?.initialize(
				{
					language: 'en',
					requireValidation: Boolean(patch.inputMd5),
					allowDropFiles: true,
					onpatch: () => {
						downloads.increment(gameId).catch(() => {});
					},
				},
				{
					file: patch.file,
					name: title,
					outputName: patch.outputName,
					inputMd5: patch.inputMd5,
				},
			);
		} catch (err) {
			if (container) {
				container.textContent = err instanceof Error ? err.message : 'Patcher unavailable.';
			}
		}
	}, [gameId, title, patch]);

	return (
		<>
			<link rel="stylesheet" href="/rom-patcher-js/style.css" />
			<Script src="/rom-patcher-js/RomPatcher.webapp.js" strategy="afterInteractive" onReady={start} />

			<div id="rom-patcher-container">
				<div className="rom-patcher-row margin-bottom" id="rom-patcher-row-file-rom">
					<div className="text-right">
						<label htmlFor="rom-patcher-input-file-rom">ROM file:</label>
					</div>
					<div className="rom-patcher-container-input">
						<input type="file" id="rom-patcher-input-file-rom" className="empty" disabled />
					</div>
				</div>

				<div className="margin-bottom text-selectable text-mono text-muted" id="rom-patcher-rom-info">
					<div className="rom-patcher-row">
						<div className="text-right">CRC32:</div>
						<div className="text-truncate">
							<span id="rom-patcher-span-crc32" />
						</div>
					</div>
					<div className="rom-patcher-row">
						<div className="text-right">MD5:</div>
						<div className="text-truncate">
							<span id="rom-patcher-span-md5" />
						</div>
					</div>
					<div className="rom-patcher-row">
						<div className="text-right">SHA-1:</div>
						<div className="text-truncate">
							<span id="rom-patcher-span-sha1" />
						</div>
					</div>
					<div className="rom-patcher-row" id="rom-patcher-row-info-rom">
						<div className="text-right">ROM:</div>
						<div className="text-truncate">
							<span id="rom-patcher-span-rom-info" />
						</div>
					</div>
				</div>

				<div className="rom-patcher-row margin-bottom" id="rom-patcher-row-file-patch">
					<div className="text-right">
						<label htmlFor="rom-patcher-input-file-patch">Patch file:</label>
					</div>
					<div className="rom-patcher-container-input">
						<select id="rom-patcher-select-patch" />
					</div>
				</div>

				<div className="rom-patcher-row margin-bottom" id="rom-patcher-row-patch-description">
					<div className="text-right text-mono text-muted">Description:</div>
					<div className="text-truncate" id="rom-patcher-patch-description" />
				</div>

				<div
					className="rom-patcher-row margin-bottom text-selectable text-mono text-muted"
					id="rom-patcher-row-patch-requirements"
				>
					<div className="text-right text-mono" id="rom-patcher-patch-requirements-type">
						ROM requirements:
					</div>
					<div className="text-truncate" id="rom-patcher-patch-requirements-value" />
				</div>

				<div className="text-center" id="rom-patcher-row-apply">
					<div id="rom-patcher-row-error-message" className="margin-bottom">
						<span id="rom-patcher-error-message" />
					</div>
					<button id="rom-patcher-button-apply" disabled>
						Apply patch
					</button>
				</div>
			</div>

			<div id="rom-patcher-powered" className="text-center">
				<a href="https://github.com/marcrobledo/RomPatcher.js" target="_blank" rel="noreferrer">
					Powered by Rom Patcher JS
				</a>
			</div>
		</>
	);
}

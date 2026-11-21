export type DownloadCounts = Record<string, number>;

export interface DownloadStore {
	getAll(): Promise<DownloadCounts>;
	increment(gameId: string): Promise<number>;
}

// TODO: counts need a backend Pages can't host (Supabase/Worker). Counters render "—" until then.
class NullDownloadStore implements DownloadStore {
	async getAll(): Promise<DownloadCounts> {
		throw new Error('downloads: no backend');
	}

	async increment(): Promise<number> {
		throw new Error('downloads: no backend');
	}
}

export const downloads: DownloadStore = new NullDownloadStore();

export function sum(counts: DownloadCounts): number {
	return Object.values(counts).reduce((a, b) => a + b, 0);
}

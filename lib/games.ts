export type GameStatus = 'visible' | 'unrevealed';

export interface Screenshot {
	src: string;
	alt: string;
}

export interface EmulatorSupport {
	pc: string[];
	ios: string[];
	android: string[];
}

export interface Patch {
	file: string;
	outputName: string;
	inputMd5?: string;
}

export interface Game {
	id: string;
	title: string;
	status: GameStatus;
	tagline?: string;
	description?: string[];
	tags?: string[];
	baseRom?: string;
	version?: string;
	logo?: string;
	mascot?: string;
	cover?: string;
	screenshots?: Screenshot[];
	emulators?: EmulatorSupport;
	patch?: Patch;
}

// TODO: real copy + assets from Gongas
export const GAMES: Game[] = [
	{
		id: 'royal-sapphire',
		title: 'Pokémon Royal Sapphire',
		status: 'visible',
		tags: ['tags1', 'tags2', 'tags3', 'tags4', 'tags'],
		screenshots: [],
		emulators: { pc: [], ios: [], android: [] },
	},
	{
		id: 'evergreen',
		title: 'Pokémon Evergreen',
		status: 'visible',
		tags: [],
		screenshots: [],
		emulators: { pc: [], ios: [], android: [] },
	},
];

export const VISIBLE_GAMES = GAMES.filter((g) => g.status === 'visible');

export function getGame(id: string): Game | undefined {
	return GAMES.find((g) => g.id === id);
}

export type GameStatus = 'visible' | 'unrevealed';

export interface Screenshot {
	src: string;
}

export interface EmulatorSupport {
	pc: string[];
	ios: string[];
	android: string[];
}

export interface Patch {
	file: string;
	description: string;
	outputName: string;
	inputCrc32?: string;
}

export interface GameLink {
	label: string;
	url: string;
}

export interface Feature {
	heading?: string;
	body?: string[];
	list?: string[];
	ordered?: boolean;
}

export interface Game {
	id: string;
	title: string;
	status: GameStatus;
	tagline?: string;
	description?: string[];
	features?: Feature[];
	faq?: Feature[];
	credits?: Feature[];
	links?: GameLink[];
	tags?: string[];
	baseRom?: string;
	version?: string;
	logo?: string;
	mascot?: string;
	cover?: string;
	trailer?: string;
	screenshots?: Screenshot[];
	emulators?: EmulatorSupport;
	patch?: Patch;
}

// TODO: real copy + assets from Gongas
export const GAMES: Game[] = [
	{
		id: 'royal-sapphire',
		title: 'Royal Sapphire',
		status: 'visible',
		tags: ['map changes', 'story changes', 'nuzlocke & casual friendly', 'high difficulty', 'enhancement'],
		description: [
			'In a nutshell, I changed the Storyline of Sapphire, while keeping the same nostalgic feel of it by keeping the same Gen 3 Mechanics and General Dex, as well as the Story beats remaining in a similar path, but expanded upon to make you feel as if it was your first time going through Hoenn once again. All maps, encounters, trainers, learnsets, and the general story are changed.',
			'The specifics of what parts have been changed are all in the paragraphs below!',
		],
		credits: [
			{
				list: [
					"Gongas - Hey It's me :)",
					'Buggford - Map Reconstruction Team / Playtesting Team / Encounters Group',
					'Llamarizzi - Map Reconstruction Team / Playtesting Team / Documentation',
					'E Man - Map Reconstruction Team / Playtesting Team',
					'Ordeaux26 - Map Reconstruction Team',
					'Damnittom - Map Reconstruction Team',
					'Bagon - Documentation, Data Insertion, Playtesting Team',
					'Viktrick - Playtesting Team, Documentation, Calculator Help',
					'Dreammeme0 - Playtesting Team',
					'Luducolo - Playtesting Team',
					'Vylegon - Playtesting Team',
					'Haven - Creator of HexManiacAdvance, the Tool used to create Royal Sapphire.',
					'Defa - HMA Story Script Help',
					'YeahPotato - HMA Story Script Help',
					'bonzosbunker - Gastly Sprite',
					'thedarkdragon11 - PokéCommunity Sprite Bank',
					'StarGaazar - Tauros, Heracross, Mew, Pidgey, Dewgong, Rattata Sprites',
					'Drayano - Thank you for handling my goofiness everyday and being a huge inspiration <3',
					'SinisterHoodedFigure - Most decisions & Kaizo Dev research were used as great inspiration.',
					'Skeli - Creator of Pokémon Unbound and CFRU, Unbound is a Genius inspiring hack.',
					'Rain - Creator of Pokémon Lucid, greatly helped me during the start of development.',
					'Pinkyj98 - Creator of Pokémon Sippy Cup Sapphire, great feedback and inspiration.',
					'SphericalIce - Creator of Pokémon Gaia, Story and Map were insane inspirations.',
					'HZLA - Creator of the HZLA Dynamic Calc, greatly helped create the RS Calc.',
					'IndigoNull - Made the LUA SCRIPT to help with Challenge runs!',
				],
			},
		],
		faq: [
			{
				heading: 'Why No Physical Special Split',
				body: ['Great question! It boils down to 3 Factors in my explanation and reason:'],
				ordered: true,
				list: [
					"This is a Binary hack! It uses the tools gamefreak gave us. If you want a bigger explanation on why this makes adding the split more complicated or outside unbalanced, watch KingCradi's Video on it! It's very much the same explanation I'd give.",
					'I wanted to keep the Generation 3 Ruby Sapphire feel intact. Same mechanics, basically the same game as base. I want to self myself from other rom hacks and most nowadays don\'t use these mechanics so I wanted to stay true to the source material!',
					'Adding the split would mean I\'d need to add SEVERAL moves to compensate for the lack of Physical or special moves for most types, and since this is binary, I cannot simply "Add" moves. Instead, I updated ALL learnsets to make More physical leaning mons learn Physical moves, and Special mons learn more special moves! + The game is all balanced around the old mechanics! So no worries there.',
				],
			},
			{
				heading: 'Is There a Hard Level Cap?',
				body: [
					'There is NOT a hard level cap. The reason behind this one is pretty simple:',
					"It's a binary hack, so I am limited and can't add it.",
					'Either way, there is no need for hard caps!',
					'The game is not hard enough for me to feel like people should be capped at a certain level, and since I want the game to be aimed at both casual play and challenge runners, I felt that option would be way better for the player to make.',
					"Finally, I will add that the game scales up, so the trainers won't be near the next gym leader's Level once you start a split. and you can play the game with that in mind without feeling the need to grind so much or candy your pokemon right away after beating a gym leader. Though its recommended you check the Documentation to know the trainer's levels! (Or don't, and have fun! <3)",
				],
			},
			{
				heading: 'Why No Infinite Candy/Repel?',
				body: [
					'Same reason yet again, Binary. I cannot add these key items. HOWEVER, I have played around this limitation by adding rare candies and repels to every single PokéMart for 1 PokéDollar! So this should never be something you have trouble withs you see in decomp hacks',
					"PS: You can also get infinite candies in the Player's home by talking to the GameCube",
				],
			},
			{
				heading: 'Where Can I Report A Bug?',
				body: [
					"Join Gongas' discord and post your bug in the #✧rs-bug-reports✧ .",
					"MAKE SURE TO READ THE CHANNEL RULES in the Bug channel's pinned messages.",
					'You can find the link to said discord down below in this post.',
				],
			},
			{
				heading: 'Are There Fairy Types?',
				body: [
					'Nope, full generation 3 mechanics and tools, and this includes No fairy type.',
					'I could in fact add this one, it\'s not a binary limitation, but it would also come with the same issues as the Physical special split; There\'s no fairy moves, and I can\'t just "add" moves.',
				],
			},
			{
				heading: 'Why Not Add Gen 4+ Pokémon?',
				body: [
					'It\'s binary! So I can\'t just "add" mons, i\'d need to replace some to add some.',
					"But since I started the project I already knew I didn't want post generation 3 pokemon in the game besides the regionals and one exception, but some exceptions people regularly ask are the Gen 4+ EVOS such as magnezone, farigiraf, gallade. The issue with these is the powercreep. They are not balanced for the generation 3 hoenn pokédex and the game's balance would not be great with them.",
				],
			},
			{
				heading: 'Are There Type Changes?',
				body: ['Nope, Not a single one. All types are the same as vanilla pokemon.'],
			},
			{
				heading: 'Are There Stat Changes?',
				body: [
					'Only the Royal Sapphire Starters (Slowbro Sneasler Qwilfish) And their evolution line had their stats changed to be more in line with each other and have an average instead of Overqwil having a way higher BST than Slowbro-Galar, for more information on these (7 Mons) that had their stats changed, just check the Pokemon Changes in the Royal Sapphire Main Hub sheet, linked down below.',
				],
			},
			{
				heading: 'Why Add Rare Candies?',
				body: [
					"Grinding should be optional! This is a rom hack, and I want everyone to have fun. Not only that but having them free for player use will also greatly help with challenge runs and less boredom. There's no EVs in the game, so you're not missing out on any kind of EV gaining by Not grinding! If you do grind though, there's infinite lucky eggs you can buy in rustboro and more exp shares in the map.",
				],
			},
			{
				heading: 'Where Can I Find Resources For X / Y?',
				body: [
					'The Links below have all the resources from the game. If you need anything else or are confused, join the discord and ask in #✧rs-casual✧ or #✧rs-nuzlockes✧, people there will help you out.',
				],
			},
			{
				heading: 'Do I Gain EVs? What about the Trainers? (Effort Values)',
				body: [
					'There are NO EVs. The Enemy Trainers DO NOT use them, and I incentivize the players to use rare candies, so I felt like removing EVs was always correct. The game was also balanced around this decision!',
				],
			},
			{
				heading: 'Where Can I Find X or Y Pokémon?',
				body: [
					"Use the Encounter Sheet linked below! If you can't find something and take too long and are unsure if there's a pokemon missing or a wrong typo in the document, please report it in the Discord (which you can find the link to down below) and send it in #✧rs-bug-reports✧!",
				],
			},
			{
				heading: 'Will You Keep Updating The Game?',
				body: [
					'I will update the game for bugs and for balance changes if those are needed. I do not plan on making a 2.0 one day, if anything this game will see a 1.1 and a 1.2 eventually if needed, but no major updates outside bugs and glitches that completely break the game.',
					'I do have plans to eventually revisit the game to make a "Challenge mode" and "Easy mode", but that is not something I want to think about for a while unless theres extremely high demand!',
				],
			},
			{
				heading: 'How Can I Support You?',
				body: [
					"Subscribe to my Youtube, Follow my Twitch, and join my discord! You can keep up to date on all my projects and stay up to date on all things royal sapphire as well as my nuzlocke or runs through the game or any other games, as I love to create In the scene. If you don't want to, that's okay too, but I hope you enjoy the game! :)",
				],
			},
		],
		features: [
			{
				heading: 'Generation 3 Mechanics. (No Physical/Special Split, 1/16 2x Crits)',
				body: [
					"Royal Sapphire uses Full generation 3 mechanics, exact same as Ruby/Sapphire, so the AI is all Expert AI (same as a Gym Leader) For every trainer, Switch AI is the exact same, There's no Physical Special Split, No Fairy type, Critical Hits are 1/16 and 2x Damage. If you want to know why that is, Check the FAQ section below.",
				],
			},
			{
				heading: 'New Starter Selection, Regional Forms, Added/Unavailable Mons',
				body: [
					'The starters are now Hisui Sneasel, Hisui Qwilfish, and Galar Slowpoke! Its a Poison trio with Fighting/Dark/Psychic.',
					'This upcoming list of pokemon have been changed to be their Regional Forms:',
					'Voltorb; Electrode; Growlithe; Arcanine; Exeggutor; Sandshrew; Sandslash; Raichu; Slowpoke; Slowbro; Slowking; Sneasel; Qwilfish',
					'This Upcoming list of pokemon have been added to the game:',
					'Sneasler; Overqwil; Meltan; Melmetal',
					'This Upcoming List of pokemon have been removed from the game:',
					"Ditto; Farfetch'd; Smeargle; Chimecho",
				],
			},
			{
				heading: 'Every Map has been Changed!',
				body: [
					'The title is pretty clear, every single map in the game has been changed. The main goal was to create a feel of you going through the Hoenn Region for the first time as you once did years ago.',
					'The Story Beats remain basically the same, Gym leader order is the exact same, and you go through each location at the same time as you would in the Original Ruby/Sapphire, with a few new or changed areas that you go to for additional storyline purposes or Important item scavenger hunts such as key items and HMs.',
				],
			},
			{
				heading: 'Custom Tilesets',
				body: [
					'Several tiles have been custom-edited by me to really make the region feel more fresh, so while it ALWAYS uses the original nostalgic Ruby Sapphire tiles as base, they also got updated to look more new and for aesthetic reasons!',
				],
			},
			{
				heading: 'New Trainer Sprites',
				body: [
					'Overworld Sprites were updated for several trainers, including all gym leaders, the main characters, the evil teams, and most overworld trainers!',
				],
			},
			{
				heading: 'New Custom UI',
				body: [
					'Pokemon Ruby and Sapphire have a RED UI during fights. I decided to embody the full blue spirit of the game and updated the UI to use several variations of the color blue. Hopefully you like it!',
				],
			},
			{
				heading: 'Expanded Team Aqua Storyline',
				body: [
					'Pokemon Royal Sapphire focuses a lot more on the storyline of Team Aqua. They succeed during their plans and have a much bigger and important role in the story, especially Matt, Shelly and Archie, with their goals not just being to awaken the Hoenn legendary Kyogre, but the overlord of the sea Lugia as well, to expand the ocean with eternal rain and deep waves. Basically, you will fight them a lot more during the story.',
				],
			},
			{
				heading: 'Changed NPC Dialogues',
				body: [
					"Go through each town's NPCs because several of them have had their dialogues entirely rewritten! Even if you don't know what they say in the original ruby and sapphire, it would still mean a lot to me if you paid attention to what they say during your playthrough!",
				],
			},
			{
				heading: 'Revamped Trainer Battles',
				body: [
					"Every Single Trainer Battle in the game has had their team, moves and items all carefully hand-crafted by myself, with the intent to make the game way more challenging. Think of Renegade platinum as the reference for how hard fights are. So while normal trainers aren't the most important of each section of the game, they do have updated teams to make you think just a tiny bit more while playing!",
				],
			},
			{
				heading: 'Harder Boss Fights',
				body: [
					'Just like mentioned before, every single trainer battle in the game was changed. This includes all Boss fights, including several brand new ones! As an example: Roxanne in Vanilla has a Level 14 Geodude and a Level 15 Nosepass. In Royal Sapphire she has a Lv14 Nidoran, Lv14 Kabuto, Lv14 Geodude, Lv15 Nosepass, Lv13 Onix, Level 13 Growlithe-Hisui.',
					'There are NO Potions. The ai will never use any super, hyper or full restores. There are however, held items on several pokemon and better movesets.',
				],
			},
			{
				heading: "No Stat/Type Changes BUT There's Changed Abilities",
				body: [
					'The game does not change any Pokémon types, and the only Stat changes made in this game were the balance changes done to the 7 Starter Pokemon (Sneasel Line, Qwilfish Line, Slowpoke Line) To make them more on-par with regular starters; Think of what fire red omega did to Elekid/Smoochum/Magby.',
					'The big changes come in the form of Ability changes! So many Pokemon have had their abilities changed to make them better such as Sharpedo with speed boost, Slowbro with shell armor, Furret with thick fat, Etc!',
				],
			},
			{
				heading: 'Evolution Modifications',
				body: [
					"Several Pokemon have had their evolution levels changed, such as Slugma going from a Level 38 Evolution, to a level 20 Evolution! Friendship evolutions evolve at 10, and Trade evolutions depend on the pokemon's strength, but they're in the 40-42 range!",
				],
			},
			{
				heading: 'Move Modifications',
				body: [
					"90% Of moves have had their Accuracy changed to be 100%. Several moves have had their PP changed to either be lowered or increases due to balance changes (Such as setup being lowered so the AI can't spam it and neither can the player) A lot of moves have also been removed in place of others in the game, such as All OHKO Moves being removed in place of; Ex:. Horn Drill is now Drill Run; Sheer Cold is now Draco Meteor; Guillotine is now Bullet punch. There's many more balance changes such as Spit up being an instant heal like Recover, and Teleport acting like Baton pass but with -6 priority, as well as Waterfall and Surf having their base powers swapped due to when you get them and finally strength and cut getting their types changed. Use the Move Changes document to know more!",
				],
			},
			{
				heading: 'Item & Mart Modifications',
				body: [
					'All PokéMarts have had their contents changed to Include Rare Candies, Max Repels, Great Heals, and several other items at a MUCH lower price; For example rare candies are now 1 Poké Dollar.',
					'The game corner TMs are insanely cheap now and they each give away 5 TMs per Purchase.',
					"There's no Wild held item's and thief/covet aren't available. All items you get are in the overworld, or Mart NPCs.",
				],
			},
			{
				heading: 'Trade & Egg Modifications',
				body: ['All 3 in-game Trades and Lavaridge Egg have been changed!'],
				list: [
					'Rustboro City: Sentret -> Sandshrew Alola',
					'Fortree City: Pikachu -> Wynaut',
					'Pacifidlog Isle: Electrode Hisui -> Larvitar',
					'Lavaridge Gift Egg: Eevee!',
				],
			},
			{
				heading: 'Documentation',
				body: [
					"The game is fully documented in the links far below, with a calculator and lua script being included for easier playthroughs and actions such as Exporting to the Calculator, Pre-Status'ing a Pokemon, or Simply checking it's IVs. The documents include Trainers, Item locations, Learnsets, Encounters, Move Changes, Trick House, Post Game, Links to important Resources and Credits.",
				],
			},
			{
				heading: 'Full Completable Postgame',
				body: [
					"The Postgame in Vanilla Sapphire is pretty bland, with Emerald being the one to implement a bigger postgame; well, I decided to give my own twist to change Royal Sapphire's postgame so you can expect the following:",
				],
				list: [
					'Gym Leader Rematches in The SS. Tidal',
					'Elite Four Rematches in their respective areas around the map',
					'Several Catchable Legendaries',
					'Several Catchable Mythicals',
					'Battle Tower Secret Maxie Fight',
					'Secret Boss Fight with Gongas',
					'Final Postgame Trick House Level with a Final secret boss (Bring your masterballs)',
					'Fully Completable PokéDex',
				],
			},
			{
				heading: 'Increased Shiny Odds',
				body: [
					'Pretty clear what it is! Shiny odds were altered from 1/8192 to 1/2048!',
					'Some shinies have issues, so check Known Bugs/Known Issues to fix.',
				],
			},
			{
				heading: 'Quality Of Life Improvements',
				list: [
					"Rare Candies Added to the player's gamecube as well as every PokéMart for no grinding.",
					'Full Restores, Max Repels, Max Elixirs in Most or Every PokéMart.',
					'Berries are Found as soon as they become available to the player in PokéMarts.',
					'PokeCenters now have Sponsor Corners! On the top left, Tutors, Marts and Deleters will appear!',
					'Every Mart Item in the Game has had their price altered to be easily bought.',
					'You get several TMs of each, most of the time.',
					'Game Corner has new TMs, and they’re all 10 Coins each and give away 5 per purchase.',
					'All Pokemon have custom Learnsets to make Physical/Special split a NON-Issue.',
					'Pokemon have had their abilities changed as a way to buff them.',
					'Evolution methods or levels changed to buff certain pokemon.',
				],
			},
		],
		logo: '/img/royal-sapphire/logo-2.png',
		cover: '/img/royal-sapphire/logo-2.png',
		trailer: 'MXkiPGt3iRc',
		links: [
			{
				label: 'Documentation',
				url: 'https://docs.google.com/spreadsheets/d/1kKrmjVlqrbwfh41vCeJryowJ_oXxPfDevBLw7qhmS6U/edit?gid=220601042#gid=220601042',
			},
			{
				label: 'Calc',
				url: 'https://hzla.github.io/Dynamic-Calc-Decomps/?data=bb8579a3798fd63b429d&dmgGen=3&gen=8&switchIn-3=&types=3&view=calculator',
			},
			{ label: 'Lua Script', url: 'https://drive.google.com/drive/folders/1hZ0DyIBjwqOarwoLA6NqSvZcf3zpFXHc?usp=sharing' },
		],
		screenshots: [
			{ src: '/img/royal-sapphire/screenshot-01.png' },
			{ src: '/img/royal-sapphire/screenshot-02.png' },
			{ src: '/img/royal-sapphire/screenshot-03.png' },
			{ src: '/img/royal-sapphire/screenshot-04.png' },
			{ src: '/img/royal-sapphire/screenshot-05.png' },
			{ src: '/img/royal-sapphire/screenshot-06.png' },
			{ src: '/img/royal-sapphire/screenshot-07.png' },
			{ src: '/img/royal-sapphire/screenshot-08.png' },
			{ src: '/img/royal-sapphire/screenshot-09.png' },
		],
		emulators: { pc: [], ios: [], android: [] },
		baseRom: "Pokémon Sapphire Version (U) (V 1.1)",
		patch: {
			file: "/patches/royal-sapphire-1.7.ups",
			description: "Released November 13 2025",
			outputName: "Royal Sapphire (Version 1.7)",
			inputCrc32: "bafedae5"
		},
	},
	{
		id: 'evergreen',
		title: 'Evergreen',
		status: 'visible',
		tags: [],
		logo: '/img/evergreen/logo.png',
		cover: '/img/evergreen/logo.png',
		screenshots: [],
		emulators: { pc: [], ios: [], android: [] },
	},
];

export const VISIBLE_GAMES = GAMES.filter((g) => g.status === 'visible');

export function getGame(id: string): Game | undefined {
	return GAMES.find((g) => g.id === id);
}

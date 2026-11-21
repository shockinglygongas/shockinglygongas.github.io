import { faDiscord, faTwitch, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Social {
	label: string;
	url: string;
	icon: IconDefinition;
}

export const SOCIALS: Social[] = [
	{ label: 'YouTube', url: 'https://www.youtube.com/@ShockinglyGongas', icon: faYoutube },
	{ label: 'Twitch', url: 'https://www.twitch.tv/ShockinglyGongas', icon: faTwitch },
	{ label: 'Discord', url: 'https://discord.com/invite/UPye6RZBpA', icon: faDiscord },
	{ label: 'X', url: 'https://x.com/ShckglyGongas', icon: faXTwitter },
];

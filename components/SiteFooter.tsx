import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIALS } from '@/lib/site';

export function SiteFooter() {
	return (
		<footer className="site-footer panel">
			<h2>SOCIALS & LINKS</h2>
			<ul className="socials">
				{SOCIALS.map((social) => (
					<li key={social.label}>
						<a href={social.url} target="_blank" rel="noreferrer" title={social.label}>
							<FontAwesomeIcon icon={social.icon} />
							<span>{social.label}</span>
						</a>
					</li>
				))}
			</ul>
		</footer>
	);
}

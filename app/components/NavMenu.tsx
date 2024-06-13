import Link from 'next/link';
import classes from './NavMenu.module.css';

export default function NavMenu() {
	return (
		<nav className={classes.nav}>
			<ul>
				<li className={classes.item}>
					<Link href="#work">Work</Link>
				</li>
				<li className={classes.item}>
					<Link href="#skills">Skills</Link>
				</li>
				<li className={classes.item}>
					<Link href="#contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
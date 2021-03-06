import "./index.scss";
import LogoM from "../../assets/images/logo-m.png";
import LogoSubtitle from "../../assets/images/logo-m_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faYoutube, faSkype, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHome, faUser, faEnvelope, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="nav-bar">
			<Link className="logo" to="/">
				<img src={LogoM} alt="Logo" />
				<img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
			</Link>
			<nav>
				<NavLink exact="true" activeclassname="active" to="/">
					<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
				</NavLink>
				<NavLink activeclassname="active" className="about-link" to="/about">
					<FontAwesomeIcon icon={faUser} color="#4d4d4e" />
				</NavLink>
				<NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
					<FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
				</NavLink>
				<NavLink activeclassname="active" className="contact-link" to="/contact">
					<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
				</NavLink>
			</nav>
			<ul>
				<li>
					<a href="https://www.linkedin.com/in/md-musleh-uddin-khan-83b15a1b0/" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
					</a>
				</li>
				<li>
					<a href="https://github.com/musleh0001" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
					</a>
				</li>
				<li>
					<a href="https://twitter.com/musleh_x_khan" rel="noreferrer" target="_blank">
						<FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;

import { ContactData } from "../Components/ContactData";
import styles from "./footer.module.scss";
import a from "../images/b.png";

const logos = [
	{ src: a, name: "facebook" },
	{ src: a, name: "facebook1" },
	{ src: a, name: "facebook2" },
	{ src: a, name: "facebook3" },
];

export const Footer = () => {
	return (
		<div className={styles.Footer}>
			<div className={styles.Contact}>
				<ContactData />
			</div>
			<div className={styles.LogosContainer}>
				{logos.map((logo) => (
					<div className={styles.Logo}>
						<img src={logo.src} alt={logo.name} />
					</div>
				))}
			</div>
		</div>
	);
};

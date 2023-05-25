import { ContactData } from "../Components/ContactData";
import styles from "./footer.module.scss";
// import logo4 from "./imgs/logo1.png";
// import logo1 from "./imgs/logo1.png";
// import logo2 from "./imgs/logo2.png";
// import logo3 from "./imgs/logo3.png";

const logos = [
	{ src: "./imgs/logo1.png", name: "logo1" },
	{ src: "./imgs/logo2.png", name: "logo2" },
	{ src: "./imgs/logo3.png", name: "logo3" },
	{ src: "./imgs/logo4.png", name: "logo4" },
];

export const Footer = () => {
	return (
		<div className={styles.Footer}>
			<div className={styles.Contact}>
				<ContactData />
			</div>
			<div className={styles.LogosContainer}>
				{logos.map((logo) => (
					<div className={styles.Logo} key={logo.name}>
						<img src={logo.src} alt={logo.name} />
					</div>
				))}
			</div>
		</div>
	);
};

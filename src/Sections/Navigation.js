import { useEffect } from "react";
import styles from "./navigation.module.scss";
export const Navigation = () => {
	useEffect(() => {
		window.document.addEventListener("scroll", () => {
			const navigation = window.document.getElementById("navigation");

			navigation.style.height = "7.6vh";
		});
	}, []);
	return (
		<div className={styles.Navigation} id="navigation">
			<div className={styles.Logo}>
				<h1>JPDSystem</h1>
			</div>
			<div className={styles.Buttons}>
				<button>Domofony</button>
				<button>Monitoring</button>
				<button>Alarmy</button>
				<button>Elektryka</button>
				<button>O nas</button>
				<button>Wyceny</button>
			</div>
		</div>
	);
};

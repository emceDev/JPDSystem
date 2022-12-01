import { useEffect } from "react";
import { Link } from "react-router-dom";
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
				<Link to="/">
					<h1>JPDSystem</h1>
				</Link>
			</div>
			<div className={styles.Buttons}>
				<Link to="/Domofony">
					<button>Domofony</button>
				</Link>
				<Link to="/Galeria">
					<button>Galeria </button>
				</Link>
				<button>Monitoring</button>
				<button>Alarmy</button>
				<button>Elektryka</button>
				<button>O nas</button>
				<button>Wyceny</button>
			</div>
		</div>
	);
};

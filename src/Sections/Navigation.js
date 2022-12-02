import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navigation.module.scss";
export const Navigation = () => {
	const [expanded, setExpanded] = useState(true);
	const [mobile, setMobile] = useState(true);
	const [mobileShown, setMobileShown] = useState(false);
	useEffect(() => {
		window.document.addEventListener("scroll", () => {
			const navigation = window.document.getElementById("navigation");

			navigation.style.height = "9vh";
		});
		setMobile(window.innerWidth < 900);
	}, []);

	return (
		<div
			className={styles.Navigation}
			id="navigation"
			onMouseEnter={() => setExpanded(true)}
			onMouseLeave={() => setExpanded(false)}
			style={{ height: expanded ? "15vh" : "9vh" }}
		>
			<div className={styles.Logo}>
				<Link to="/">
					<h1>JPDSystem</h1>
				</Link>
			</div>
			{mobile ? (
				<div style={{ position: "relative" }}>
					<span
						class="material-symbols-outlined"
						onClick={() => setMobileShown(!mobileShown)}
						style={{ position: "relative", color: "white" }}
					>
						menu
					</span>
					{mobileShown ? (
						<div className={styles.Dropdown}>
							<Buttons />
						</div>
					) : null}
				</div>
			) : (
				<Buttons />
			)}
		</div>
	);
};
const Buttons = () => {
	return (
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
	);
};

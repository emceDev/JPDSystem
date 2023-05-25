import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDeviceDetector } from "../Components/deviceDetector";
import { HamburgerSvg } from "../svgs/hamburger";
import styles from "./navigation.module.scss";
export const Navigation = () => {
	const [expanded, setExpanded] = useState(true);
	const [mobile, setMobile] = useState(true);
	const [mobileShown, setMobileShown] = useState(false);
	const device = useDeviceDetector();
	useEffect(() => {
		window.document.addEventListener("scroll", () => {
			const navigation = window.document.getElementById("navigation");

			navigation.style.height = "9vh";
		});
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
			{device === "Mobile" ? (
				<>
					<span onClick={() => setMobileShown(!mobileShown)}>
						<HamburgerSvg />
					</span>
					{mobileShown ? (
						<div
							className={styles.Dropdown}
							onClick={() => setMobileShown(!mobileShown)}
						>
							<Buttons device={device} />
						</div>
					) : null}
				</>
			) : (
				<Buttons />
			)}
		</div>
	);
};
const Buttons = (props) => {
	return (
		<div className={styles.Buttons}>
			{props.device === "Mobile" && <h1>JPDSystems</h1>}
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

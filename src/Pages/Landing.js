import styles from "./landing.module.scss";
import { ProjImage } from "../Components/Image";
import React, { Suspense } from "react";
const Contact = React.lazy(() => import("../Contact/Contact.js"));
export const Landing = () => {
	return (
		<div className={styles.Landing}>
			<img src="./imgs/landing.jpg" />
			<LandImgTxt />
			<Suspense fallback={<div>Wczytywanie...</div>}>
				<Contact />
			</Suspense>
		</div>
	);
};

const LandImgTxt = () => {
	return (
		<div className={styles.LandImgTxt}>
			<h1>JPDSystem.</h1>
			<h2>Szybkość profesjonalizm pewność od lat</h2>
			<div>Zadzwoń: xxx-xxx-xxx</div>
			<div className={styles.bgImgCont}>
				<div></div>
			</div>
		</div>
	);
};

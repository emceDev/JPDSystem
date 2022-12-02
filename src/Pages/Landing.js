import styles from "./landing.module.scss";

import { ContactData } from "../Components/ContactData";
import { ProjImage } from "../Components/Image";
export const Landing = () => {
	return (
		<div className={styles.Landing}>
			<ProjImage
				id={"landingImage"}
				image={"./imgs/b.png"}
				placeholder={"./imgs/lco_placeholder.webp"}
			/>
			<LandImgTxt />
			<Contact />
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
const Contact = () => {
	return (
		<div className={styles.Contact}>
			<div className={styles.left}>
				<ContactData />
			</div>
			<div className={styles.right}>
				<Map />
			</div>
		</div>
	);
};

const Map = () => {
	return (
		<iframe
			className={styles.Map}
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7959.18445011965!2d20.87283122381607!3d52.05667308015221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47193755c59ffe6f%3A0x536c1d8d685a8db3!2s05-552%20Kos%C3%B3w!5e0!3m2!1spl!2spl!4v1669820322006!5m2!1spl!2spl"
		></iframe>
	);
};

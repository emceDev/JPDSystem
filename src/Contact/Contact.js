import { ContactData } from "../Components/ContactData";
import {
	deviceDetector,
	useDeviceDetector,
} from "../Components/deviceDetector";
import { GmapsSvg } from "../Components/GmapsSVG";
import styles from "./contact.module.scss";
export default function Contact() {
	const type = useDeviceDetector();
	return (
		<div className={styles.Contact}>
			<div className={styles.left}>
				<ContactData />
			</div>
			<div className={styles.right}>
				{type === "Mobile" ? (
					<>
						<GmapsSvg
							style={{ height: "100px" }}
							onClick={() =>
								window.open(
									"https://www.google.com/maps/place/05-552+Kos%C3%B3w/@52.052109,20.825286,15z/data=!4m6!3m5!1s0x47193755c59ffe6f:0x536c1d8d685a8db3!8m2!3d52.0521095!4d20.8252856!16s%2Fm%2F04q9wxn?hl=pl",
									"_blank"
								)
							}
						/>
						<p>Znajdź nas na mapach</p>
					</>
				) : (
					<Map />
				)}
			</div>
		</div>
	);
}

const Map = () => {
	return (
		<iframe
			className={styles.Map}
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7959.18445011965!2d20.87283122381607!3d52.05667308015221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47193755c59ffe6f%3A0x536c1d8d685a8db3!2s05-552%20Kos%C3%B3w!5e0!3m2!1spl!2spl!4v1669820322006!5m2!1spl!2spl"
		></iframe>
	);
};

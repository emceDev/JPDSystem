import styles from "./contactData.module.scss";
export const ContactData = () => {
	return (
		<div className={styles.ContactData}>
			<div>
				<div>
					<h2>email:</h2>
					<p>biuro@JPDSystem.pl</p>
				</div>
				<div>
					<h2>telefon:</h2>
					<p>xxx-xxx-xxx</p>
				</div>
				<div>
					<h2>adres:</h2>
					<p>adresFirmy 43 32-100 adres</p>
				</div>
				<div>
					<h2>Godziny pracy:</h2>
					<p>PN-SOB 8-22</p>
				</div>
			</div>
		</div>
	);
};

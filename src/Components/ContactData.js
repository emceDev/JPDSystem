import styles from "./contactData.module.scss";
export const ContactData = () => {
	return (
		<div className={styles.ContactData}>
			<div>
				<div>
					<h3>email:</h3>
					<p>biuro@JPDSystem.pl</p>
				</div>
				<div>
					<h3>telefon:</h3>
					<p>xxx-xxx-xxx</p>
				</div>
				<div>
					<h3>adres:</h3>
					<p>adresFirmy 43 32-100 adres</p>
				</div>
				<div>
					<h3>Godziny pracy:</h3>
					<p>PN-SOB 8-22</p>
				</div>
			</div>
		</div>
	);
};

import { ProjImage } from "./Image";
import styles from "./post.module.scss";

export const Post = (props) => {
	const { title, paragraph, image, placeholder } = props.post;
	return (
		<div className={styles.Post}>
			<h2>{title}</h2>
			<div className={styles.ImgPCont}>
				<div className={styles.ImgContainer}>
					<ProjImage
						id={title.eng + title + "img"}
						image={image}
						placeholder={placeholder}
					/>
				</div>
				<p>&nbsp;{paragraph}</p>
			</div>
		</div>
	);
};

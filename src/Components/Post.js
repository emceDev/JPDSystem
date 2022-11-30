import styles from "./post.module.scss";

export const Post = (props) => {
	const { title, paragraph, image } = props.post;
	return (
		<div className={styles.Post}>
			<h2>{title}</h2>
			<div className={styles.ImgPCont}>
				<div className={styles.ImgContainer}>
					<img src={image}></img>
				</div>
				<p>&nbsp;{paragraph}</p>
			</div>
		</div>
	);
};

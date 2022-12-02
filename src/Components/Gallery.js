import { useEffect, useState } from "react";

import styles from "./gallery.module.scss";
import * as ReactDOM from "react-dom";
import { ProjImage } from "./Image";
const shortDesc =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const images = [
	{
		image: "./imgs/tree.webp ",
		placeholder: " ./imgs/tree_placeholder",
		title: "title1",
		desc: shortDesc,
	},
	{
		image: "./imgs/tree.webp ",
		placeholder: " ./imgs/tree_placeholder",
		title: "title2",
		desc: shortDesc,
	},
	{
		image: "./imgs/tree.webp ",
		placeholder: " ./imgs/tree_placeholder",
		title: "title3",
		desc: shortDesc,
	},
	{
		image: "./imgs/tree.webp ",
		placeholder: " ./imgs/tree_placeholder",
		title: "title4",
		desc: shortDesc,
	},
	{
		image: "./imgs/tree.webp ",
		placeholder: " ./imgs/tree_placeholder",
		title: "title5",
		desc: shortDesc,
	},
	{
		image: "./imgs/tree.webp ",
		placeholder: " ./imgs/tree_placeholder",
		title: "title2",
		desc: shortDesc,
	},
];
const Gallery = () => {
	const [choosen, setChoosen] = useState(false);
	const [modalOpen, setOpen] = useState(false);

	function handleOpen() {
		if (choosen === false) {
			return null;
		} else {
			return modalOpen ? null : setOpen(true);
		}
	}
	useEffect(() => {
		handleOpen();
	}, [choosen]);
	return (
		<div className={styles.Gallery}>
			<h1>Galeria</h1>

			<div className={styles.ImgList}>
				{images.map((img, index) => (
					<GalleryImg
						img={img}
						index={index}
						key={index + img.title}
						setChoosen={(index) => setChoosen(index)}
					/>
				))}
			</div>
			{modalOpen ? (
				<Portal>
					<Modal index={choosen} close={() => setOpen(false)} />
				</Portal>
			) : null}
		</div>
	);
};

const GalleryImg = (props) => {
	const [hover, setHover] = useState(false);
	const { title, image, placeholder } = props.img;
	return (
		<div
			className={styles.GalleryImg}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => {
				setHover(false);
			}}
			onClick={() => props.setChoosen(props.index)}
		>
			{hover && <h2>{title}</h2>}
			<div
				className={styles.ImgCont}
				style={{
					filter: hover ? "grayscale(0)" : "grayscale(1)",
					transition: "filter 0.5s",
				}}
			>
				<ProjImage
					id={title.eng + title + "img"}
					image={image}
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
};

const Portal = ({ children }) => {
	const [ready, setReady] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setReady(document.getElementById("App") !== null);
		}, 200);
	}, []);
	return (
		ready && ReactDOM.createPortal(children, document.getElementById("App"))
	);
};

const Modal = (props) => {
	const [index, setIndex] = useState(props.index);
	const handleClick = () => {
		props.close();
	};
	return (
		<div className={styles.Modal} onClick={(e) => handleClick(e)}>
			<div className={styles.Navs} onClick={(e) => e.stopPropagation()}>
				<button onClick={() => (index - 1 > 0 ? setIndex(index - 1) : null)}>
					<span class="material-symbols-outlined">arrow_back_ios_new</span>
				</button>
				<button
					onClick={() =>
						index + 1 < images.length ? setIndex(index + 1) : null
					}
				>
					<span class="material-symbols-outlined">arrow_forward_ios</span>
				</button>
				<button onClick={() => props.close()}>{"x"}</button>
			</div>
			<div className={styles.ImgCont} onClick={(e) => e.stopPropagation()}>
				<img src={images[index].image}></img>
			</div>
		</div>
	);
};

export default Gallery;

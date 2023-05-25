import { useEffect, useState } from "react";

export const ProjImage = (props) => {
	const { image, placeholder } = props;
	const [src, setSrc] = useState(placeholder);
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		const img = new Image();
		img.src = image;
		img.onload = () => {
			setLoaded(true);
			setSrc(img.src);
			props.imageLoaded();
		};
	}, []);

	return (
		<img
			src={src}
			alt={src}
			style={{
				filter: loaded ? "none" : "blur(10px)",
				transition: "all 0.5s",
				// width: loaded ? "auto" : "100%",
				width: "100%",
				// height: loaded ? "auto" : "100%",
			}}
		></img>
	);
};

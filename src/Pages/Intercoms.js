import styles from "./intercoms.module.scss";

import { Post } from "../Components/Post";
const Intercoms = () => {
	return (
		<div className={styles.Intercoms}>
			<h1>Domofony</h1>
			{posts.map((post) => (
				<Post post={post} />
			))}
		</div>
	);
};
const exampleText2 =
	"Sed ut perspiciatis unde omnis iste natus error sitvoluptatem accusantium doloremque laudantium, totam rem aperiam,eaque ips";
const exampleText =
	"Sed ut perspiciatis unde omnis iste natus error sitvoluptatem accusantium doloremque laudantium, totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasi architectobeatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quiavoluptas sit aspernatur aut odit aut fugit, sed quia consequunturmagni dolores eos qui ratione voluptatem sequi nesciunt. Neque porroquisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,adipisci velit, sed quia non numquam eius modi tempora incidunt utlabore et dolore magnam aliquam quaerat voluptatem. Ut enim adminima veniam, quis nostrum exercitationem ullam corporis suscipitlaboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autevel eum iure reprehenderit qui in ea voluptate velit esse quam nihilmolestiae consequatur, vel illum qui dolorem eum fugiat quo voluptasnulla pariatur?";
const posts = [
	{
		title: "tytuł",
		paragraph: exampleText + exampleText,
		image: "./imgs/tree.webp ",
		placeholder: " ./imgs/tree_placeholder",
	},
	{
		title: "tytuł1",
		paragraph: exampleText,
		image: "./imgs/tree.webp ",
		placeholder: " ./imgs/tree_placeholder",
	},
	{
		title: "tytuł2",
		paragraph: exampleText2,
		image: "./imgs/tree.webp ",
		placeholder: " ./imgs/tree_placeholder",
	},
];
export default Intercoms;

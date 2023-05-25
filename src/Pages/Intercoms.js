import styles from "./intercoms.module.scss";
import { Post } from "../Components/Post";
import { useState } from "react";

const Intercoms = () => {
	const [number, setNumber] = useState(1);
	const loaded = () => {
		number < posts.length && setNumber(number + 1);
	};
	return (
		<div className={styles.Intercoms}>
			<h1>Domofony</h1>
			{posts.slice(0, number).map((post) => (
				<Post post={post} loaded={loaded} />
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
		title:
			"Pasja i profesjonalizm w pracy nad domofonami: Bezpieczeństwo i wygoda w Twoim domu",
		paragraph:
			"Niezmiernie dumny jestem z mojej pracy nad domofonami. Dzięki mojej wiedzy i umiejętnościom mogę zapewnić klientom nie tylko wygodę, ale przede wszystkim poczucie bezpieczeństwa w ich domach. Każdy projekt domofonowy traktuję jako wyzwanie, dbając o dokładność instalacji i dostosowanie systemu do indywidualnych potrzeb klienta. Współpracując z najlepszymi dostawcami, staram się zapewnić najwyższą jakość dźwięku i obrazu, aby zapewnić kompleksową ochronę dla każdego domu. Moje zadowolenie płynie z widoku zadowolonych klientów, którzy dzięki mojej pracy mogą cieszyć się spokojem i wygodą korzystania z domofonów.",
		image: "./imgs/intercom3.png",
		placeholder: " ./imgs/tree_placeholder",
	},
	{
		title: "Domofony - ułatwienie i bezpieczeństwo w Twoim domu",
		paragraph:
			"Domofony stanowią nieodzowny element systemów bezpieczeństwa i komunikacji w dzisiejszych domach. Pozwalają na identyfikację osób znajdujących się przed wejściem i umożliwiają swobodną komunikację z nimi, zanim otworzysz drzwi. Elektryk specjalizujący się w domofonach to kluczowa postać w instalacji, konserwacji i naprawie tych systemów. \n Elektryk odpowiedzialny za domofony ma nie tylko wiedzę techniczną, ale także doświadczenie w instalacji różnych rodzajów domofonów. Współpracując z domownikami, pomaga dobrać odpowiedni system, który spełni ich potrzeby. Może to być prosty domofon audio, zaawansowany system wideo z kamerą i monitoringiem, a nawet inteligentne rozwiązania umożliwiające zdalne sterowanie.",
		image: "./imgs/intercom1.jpg ",
		placeholder: " ./imgs/tree_placeholder",
	},
	{
		title: "Wybór odpowiedniego domofonu - poradnik dla domowników",
		paragraph:
			"Wybór odpowiedniego domofonu to ważna decyzja, która wpływa na bezpieczeństwo i komfort Twojego domu. Elektryk specjalizujący się w domofonach może pomóc Ci podjąć właściwe decyzje. Oto kilka czynników, które warto wziąć pod uwag Rodzaj systemu: Istnieją różne rodzaje domofonów, takie jak audio, wideo, czy nawet systemy inteligentne. Zastanów się, jaki poziom bezpieczeństwa i funkcjonalności Cię interesuje. Liczba jednostek: Zdecyduj, ile jednostek chciałbyś zainstalować w domu. Czy potrzebujesz tylko jednego domofonu przy wejściu głównym, czy może dodatkowych przy innych wejściach? Jakość dźwięku i obrazu: Sprawdź, jakie parametry dźwięku i obrazu oferuje dany system. W przypadku domofonów wideo zwróć uwagę na rozdzielczość kamery i funkcje takie jak podgląd w nocy. Funkcje dodatkowe: Niektóre systemy oferują dodatkowe funkcje, takie jak zdalne sterowanie za pomocą",
		image: "./imgs/intercom2.jpg",
		placeholder: " ./imgs/tree_placeholder",
	},
];
export default Intercoms;

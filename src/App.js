import { Gallery } from "./Components/Gallery";
import { Intercoms } from "./Pages/Intercoms";
import { Landing } from "./Pages/Landing";
import { Footer } from "./Sections/Footer";
import { Navigation } from "./Sections/Navigation";
import styles from "./styles/index.scss";
function App() {
	return (
		<div className="App" id="App">
			<Navigation />
			<Landing />
			{/* <Intercoms /> */}
			{/* <Gallery /> */}
			<Footer />
		</div>
	);
}

export default App;

import { Route, Routes } from "react-router-dom";
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

			<Routes>
				<Route path="/" element={<Landing />}></Route>
				<Route path="/Domofony" element={<Intercoms />}></Route>
				<Route path="/Galeria" element={<Gallery />}></Route>
			</Routes>

			<Footer />
		</div>
	);
}

export default App;

import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Gallery from "./Components/Gallery";
// import { Intercoms } from "./Pages/Intercoms";
import { Landing } from "./Pages/Landing";
import { Footer } from "./Sections/Footer";
import { Navigation } from "./Sections/Navigation";
import styles from "./styles/index.scss";

const Intercoms = React.lazy(() => import("./Pages/Intercoms"));
const Gallery = React.lazy(() => import("./Components/Gallery"));

function App() {
	return (
		<div className="App" id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<Landing />}></Route>
				<Route
					path="/Domofony"
					element={
						<React.Suspense fallback={<>...</>}>
							<Intercoms />
						</React.Suspense>
					}
				></Route>
				<Route
					path="/Galeria"
					element={
						<React.Suspense fallback={<>...</>}>
							<Gallery />
						</React.Suspense>
					}
				></Route>
			</Routes>

			<Footer />
		</div>
	);
}

export default App;

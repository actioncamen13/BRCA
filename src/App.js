import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import LayoutApp from "./pages/Teams_Page/LayoutApp";
import ClubSecy from "./pages/ClubSecy_Page/LayoutApp";
import ClubsApp from "./pages/Clubs_Page/ClubsApp";
import SacBooking from "./pages/SacBooking/SacBooking";
import Recognitions from "./pages/Recognition_Page/Recognitions";
import PFC from "./pages/pfc/pfc";
import Dance from "./pages/dance/dance";
import Design from "./pages/design/design";
import Debsoc from "./pages/Debsoc/debating";
import Music from "./pages/music/music";
import Quizzing from "./pages/quizzing/quizzing";
import Literati from "./pages/literati/literati";
import Dramatics from "./pages/dramatics/dramatics";
import Facc from "./pages/facc/facc";
import Spicmacay from "./pages/spicmacay/spicmacay";
import Teams from "./pages/Secy_Page/Teams";
import Faculty from "./pages/Faculty_Page/Faculty";
import Hindisamiti from "./pages/HindiSamiti/hindisamiti";

function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/clubs' element={<ClubsApp />} />
					<Route path='/teamsecy' element={<LayoutApp />} />
					<Route path='/clubsecy' element={<ClubSecy />} />
					<Route path='/teams' element={<Teams />} />
					<Route path='/faculty' element={<Faculty />} />
					<Route path='/recognitions' element={<Recognitions />} />
					<Route path='/home' element={<Home />} />
					<Route path='/sacbooking' element={<SacBooking />} />
					<Route path='/pfc' element={<PFC />} />
					<Route path='/dance' element={<Dance />} />
					<Route path='/design' element={<Design />} />
					<Route path='/music' element={<Music />} />
					<Route path='/quizzing' element={<Quizzing />} />
					<Route path='/literati' element={<Literati />} />
					<Route path='/dramatics' element={<Dramatics />} />
					<Route path='/facc' element={<Facc />} />
					<Route path='/spicmacay' element={<Spicmacay />} />
					<Route path='/debating' element={<Debsoc />} />
					<Route path='/hindisamiti' element={<Hindisamiti />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

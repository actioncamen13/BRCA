import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import LayoutApp from "./pages/Teams_Page/LayoutApp";
import ClubsApp from "./pages/Clubs_Page/ClubsApp";
import SacBooking from "./frame5/Sac_booking";
import Recognitions from "./pages/Recognition_Page/Recognitions";
import Teams from "./pages/Secy_Page/Teams";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubs" element={<ClubsApp />} />
          <Route path="/teamsecy" element={<LayoutApp />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/recognitions" element={<Recognitions />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sacbooking" element={<SacBooking />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

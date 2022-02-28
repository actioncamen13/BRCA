import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutApp from "./pages/Teams_Page/LayoutApp";
import ClubsApp from "./pages/Clubs_Page/ClubsApp";
import SacBooking from "./frame5/SacBooking";
import Recognitions from "./frame5/Recognitions";
import Teams from "./frame5/Teams";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/clubs" element={<ClubsApp />} />
          <Route path="/teamsecy" element={<LayoutApp />} />
          <Route path="/sacbooking" element={<SacBooking />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/recognitions" element={<Recognitions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import Home from "./pages/home";
import Events from './pages/events';
import Competitions from "./pages/competitions";
import Guests from "./pages/guests";
import Contacts from "./pages/contacts";
import Store from "./pages/Store";
import Accommodation from "./pages/Accommodation";
import Team from "./pages/team";
import Media from "./pages/media";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/guests" element={<Guests />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/store" element={<Store />} />
        <Route path="/accommodations" element={<Accommodation/>}></Route>
        <Route path='/team' element={<Team/>}></Route>
        <Route path="/media" element = {<Media/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

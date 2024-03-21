import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PointsVsEfg from "./components/pointsvseff";
import TeamRatings from "./components/teamRatings";
import Player from "./components/player";
import Home from "./components/home";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/ptsefg" element={<PointsVsEfg />}></Route>
          <Route exact path="/teamRatings" element={<TeamRatings />}></Route>
          <Route exact path="/players" element={<Player />}></Route>
          <Route exact path="/team" element={<Team />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

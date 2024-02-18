import logo from "./logo.svg";
import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PointsVsEfg from "./components/pointsvseff";
import TeamRatings from "./components/teamRatings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/ptsefg" element={<PointsVsEfg />}></Route>
          <Route exact path="/teamRatings" element={<TeamRatings />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

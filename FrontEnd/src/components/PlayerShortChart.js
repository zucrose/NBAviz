import axios from "axios";
import Navbar from "./navbar";
import { useEffect, useRef, useState } from "react";
import { serverUrl } from "../utils/constants";
import createShotChart from "../utils/createShotChart";

export default function PlayerShortChart({ playerID }) {
  const [shotChart, setShortChart] = useState(null);
  const [selectSeason, setSelectSeason] = useState("2023-24");
  const [seasonType, setSeasonType] = useState("Regular Season");
  const chartRef = useRef();
  //console.log(playerID);
  const getShots = async () => {
    const { data: data } = await axios.get(serverUrl + "shots", {
      params: {
        pid: playerID,
        Season: selectSeason,
        SeasonType: seasonType,
      },
    });
    setShortChart(data);
  };
  useEffect(() => {
    getShots();
  }, [playerID, selectSeason, seasonType]);
  useEffect(() => createShotChart(shotChart, chartRef), [shotChart]);
  // console.log(shotChart.shot_Chart_Detail);
  return (
    <>
      {" "}
      <div className="">
        <select
          value={selectSeason}
          onChange={(e) => setSelectSeason(e.target.value)}
          className="col m-2"
        >
          <option>2021-22</option>
          <option>2022-23</option>
          <option>2023-24</option>
        </select>
        <select
          value={seasonType}
          onChange={(e) => setSeasonType(e.target.value)}
          className="col m-2"
        >
          <option>Regular Season</option>
          <option>Playoffs</option>
        </select>
      </div>
      <div className="d-flex justify-content-center">
        <div ref={chartRef} />
      </div>
    </>
  );
}

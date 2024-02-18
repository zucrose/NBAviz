import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { serverUrl } from "../utils/constants";
import * as Plot from "@observablehq/plot";
import TeamRatingsTable from "./teamRatingsTable";
import { arrMax, arrMin } from "../utils/arrayFunctions";
export default function TeamRatings() {
  const [teamRatingsArray, setTeamRatingsArray] = useState(null);
  const [selectSeason, setSelectSeason] = useState("2023-24");
  const [selectLastNGames, setSelectLastNGames] = useState("Season");
  const chartRef = useRef();
  const getTeamRating = async () => {
    let lastN = selectLastNGames;
    if (selectLastNGames === "Season") lastN = "0";
    const { data: data } = await axios.get(serverUrl + "teamRatings", {
      params: {
        Season: selectSeason,
        LastNGames: lastN,
      },
    });
    // console.log(data);
    setTeamRatingsArray(data);
  };
  //console.log(teamRatingsArray);
  console.log(selectLastNGames, selectSeason);
  useEffect(() => {
    getTeamRating();
  }, []);
  useEffect(() => {
    getTeamRating();
  }, [selectLastNGames, selectSeason]);

  useEffect(() => {
    if (teamRatingsArray === null) return;
    else {
      const xyline = [];
      const highest = Math.max(
        arrMax(teamRatingsArray.ratings, "defRating"),
        arrMax(teamRatingsArray.ratings, "offRating")
      );
      const lowest = Math.min(
        arrMin(teamRatingsArray.ratings, "defRating"),
        arrMin(teamRatingsArray.ratings, "offRating")
      );
      //console.log(highest, lowest);
      for (let i = lowest - 1; i < highest + 1; i++) {
        let y =
          i - teamRatingsArray.avgDefRating + teamRatingsArray.avgOffRating;
        xyline.push({ defRating: i, offRating: y });
      }
      //  console.log(xyline);
      const plot = Plot.plot({
        x: { reverse: true },
        grid: true,
        inset: 20,
        marks: [
          Plot.dot(teamRatingsArray.ratings, {
            x: "defRating",
            y: "offRating",

            fill: "teamName",
            tip: { fill: "#63D4BE", stroke: "green" },
            channels: { "Net Rating": "netRating" },
          }),
          Plot.line(xyline, { x: "defRating", y: "offRating" }),
          Plot.ruleX([teamRatingsArray.avgDefRating], {
            stroke: "white",
          }),
          Plot.ruleY([teamRatingsArray.avgOffRating], { stroke: "white" }),
        ],
      });
      chartRef.current.append(plot);
      return () => plot.remove();
    }
  }, [teamRatingsArray]);
  return (
    <>
      {teamRatingsArray !== null ? (
        <div className="container">
          {" "}
          <div className="d-flex justify-content-center">
            <div className="row  mt-5">
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
                value={selectLastNGames}
                onChange={(e) => setSelectLastNGames(e.target.value)}
                className="col m-2"
              >
                <option>10</option>
                <option>20</option>
                <option>Season</option>
              </select>
            </div>
          </div>
          <div className="d-flex justify-content-center my-5">
            <div ref={chartRef} />
          </div>
          <div className="d-flex justify-content-center">
            <div className="table-responsive my-5">
              <TeamRatingsTable data={teamRatingsArray.ratings} />
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

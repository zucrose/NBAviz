import { redirect, useLocation } from "react-router-dom";
import PlayerShortChart from "./PlayerShortChart";
import Navbar from "./navbar";
import { serverUrl } from "../utils/constants";
import axios from "axios";
import { useEffect, useState } from "react";
import PlayerStatsTable from "./PlayerStatsTable";

export default function Player() {
  const { state } = useLocation();
  const [playerProfile, setPlayerProfile] = useState(null);
  const [playerStats, setPlayerStats] = useState(null);
  const [headlineStats, setHeadlineStats] = useState(null);
  const getPlayerInfo = async () => {
    const { data: data } = await axios.get(serverUrl + "playerInfo", {
      params: {
        PlayerID: state.playerID,
        SeasonType: "Regular Season",
        PerMode: "PerGame",
      },
    });

    console.log(data);

    const bday = new Date(
      Date.parse(data.playerInfo.commonPlayerInfo[0].birthdate)
    );
    const age = (Date.now() - bday.getTime()) / 3.15576e10;

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    data.playerInfo.commonPlayerInfo[0].birthdate = bday.toLocaleDateString(
      undefined,
      options
    );
    data.playerInfo.commonPlayerInfo[0]["age"] = age;

    // console.log(bday.toLocaleDateString(undefined, options));
    setHeadlineStats(data.playerInfo.playerHeadlineStats[0]);
    setPlayerProfile(data.playerInfo.commonPlayerInfo[0]);
    setPlayerStats(data.playerProfile);
  };

  useEffect(() => {
    getPlayerInfo();
  }, [state.playerID]);

  if (state.playerID === undefined) redirect("/team");
  return (
    <>
      <Navbar />
      {playerProfile !== null ? (
        <div className="navbarpadding">
          {
            <div className="d-flex align-items-center justify-content-center">
              <div className="flex col ">
                <h1 className="display-3">{playerProfile.displayFirstLast}</h1>
                <h3>
                  #{playerProfile.jersey} | {playerProfile.position} |{" "}
                  {playerProfile.teamCity + " " + playerProfile.teamName}
                </h3>
                <p className="lead h5">
                  {playerProfile.country} | {playerProfile.birthdate}
                </p>
              </div>
              <div className="flex col">
                <table>
                  <tr>
                    <td className="px-2 h4">Points</td>
                    <td className="px-2 h4">Rebounds</td>
                    <td className="px-2 h4">Assists</td>
                  </tr>
                  <tr>
                    <th className="px-2 h4 lead">{headlineStats.pts}</th>
                    <th className="px-2 h4 lead">{headlineStats.reb}</th>
                    <th className="px-2 h4 lead">{headlineStats.ast}</th>
                  </tr>

                  <tr>
                    <td className="px-2 h4">Age</td>
                    <td className="px-2 h4">Weight</td>
                    <td className="px-2 h4">Height</td>
                  </tr>
                  <tr>
                    <th className="px-2 h4 lead">
                      {playerProfile.age.toPrecision(4)}
                    </th>
                    <th className="px-2 h4 lead">{playerProfile.weight} lb</th>
                    <th className="px-2 h4 lead">{playerProfile.height}</th>
                  </tr>
                </table>
              </div>
              <div className="flex col m-2">
                {" "}
                {
                  <PlayerShortChart
                    playerID={state.playerID}
                  ></PlayerShortChart>
                }
              </div>
            </div>
          }
          {
            <div className="m-5">
              <PlayerStatsTable playerStats={playerStats}></PlayerStatsTable>
            </div>
          }
        </div>
      ) : (
        <div>LOADING.....</div>
      )}
    </>
  );
}

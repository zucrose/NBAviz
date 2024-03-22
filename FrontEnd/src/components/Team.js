import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../utils/constants";
import Navbar from "./navbar";
import rankSuffix from "../utils/arrayFunctions";
import TeamStatsTable from "./tables/TeamStatsTable";
export default function Team() {
  const { state } = useLocation();
  const [currentTeam, setCurrentTeam] = useState(state.teamID);
  const [teamBase, setTeamBase] = useState();
  const [teamAdv, setTeamAdv] = useState();
  const [commonInfo, setCommonInfo] = useState();
  const [season, setSeason] = useState("2023-24");
  const fetchStats = async () => {
    const { data: data } = await axios.get(serverUrl + "teamStats", {
      params: {
        Season: season,
        LastNGames: "0",
        TeamID: currentTeam,
      },
    });
    console.log(data);
    setTeamBase(
      data.base.filter((ele) => {
        if (ele.teamId === currentTeam) return ele;
      })[0]
    );
    setTeamAdv(
      data.advanced.filter((ele) => {
        if (ele.teamId === currentTeam) return ele;
      })[0]
    );
    setCommonInfo(data.commonInfo);
  };
  useEffect(() => {
    fetchStats();
  }, [currentTeam, season]);
  return (
    <>
      <Navbar></Navbar>

      <div className="navbarpadding container">
        {teamBase != undefined ? (
          <>
            {" "}
            <div className=" row align-items-center justify-content-center p-2">
              <div className="col-5">
                <h3>{teamBase.teamName} </h3>
                <h5 className="lead">
                  {commonInfo.teamInfoCommon[0].w}-
                  {commonInfo.teamInfoCommon[0].l}
                  {" | "}
                  {rankSuffix(commonInfo.teamInfoCommon[0].confRank)}
                  {" in "}
                  {commonInfo.teamInfoCommon[0].teamConference}
                </h5>
              </div>
              <div className="col-3">
                <div className="row">
                  <div className="col h5 font-monospace">PPG</div>
                  <div className="col h5 font-monospace">APG</div>
                  <div className="col h5 font-monospace">RPG</div>
                  <div className="col h5 font-monospace">OPPG</div>
                </div>
                <div className="row">
                  <div className="col fw-bolder">
                    {commonInfo.teamSeasonRanks[0].ptsPg}
                  </div>
                  <div className="col fw-bolder">
                    {commonInfo.teamSeasonRanks[0].astPg}
                  </div>
                  <div className="col fw-bolder">
                    {commonInfo.teamSeasonRanks[0].rebPg}
                  </div>
                  <div className="col fw-bolder">
                    {commonInfo.teamSeasonRanks[0].oppPtsPg}
                  </div>
                </div>
                <div className="row">
                  <div className="col fw-light">
                    {rankSuffix(commonInfo.teamSeasonRanks[0].ptsRank)}
                  </div>
                  <div className="col fw-light ">
                    {rankSuffix(commonInfo.teamSeasonRanks[0].astRank)}
                  </div>
                  <div className="col fw-light">
                    {rankSuffix(commonInfo.teamSeasonRanks[0].rebRank)}
                  </div>
                  <div className="col fw-light">
                    {rankSuffix(commonInfo.teamSeasonRanks[0].oppPtsRank)}
                  </div>
                </div>
              </div>
              <div className="col-4"></div>
            </div>
            <div className="row">
              <TeamStatsTable
                teamBase={teamBase}
                teamAdv={teamAdv}
                season={season}
                setSeason={setSeason}
              ></TeamStatsTable>
            </div>
          </>
        ) : (
          <div>LOADING...</div>
        )}
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { serverUrl } from "../utils/constants";
import axios from "axios";
import Navbar from "./navbar";
import Statleader from "./StatLeader";
import Standings from "./Standings";

export default function Home() {
  const [statLeaders, setStatLeaders] = useState();
  const [standingData, setStandingData] = useState();
  const [teamLeaders, setTeamLeaders] = useState();
  const getStats = async () => {
    const { data: statdata } = await axios.get(serverUrl + "homepage", {
      params: {
        PlayerOrTeam: "Player",
      },
    });

    setStatLeaders(statdata);
    const { data: teamData } = await axios.get(serverUrl + "homepage", {
      params: {
        PlayerOrTeam: "Team",
      },
    });
    console.log(teamData);
    setTeamLeaders(teamData);
    const { data: standdata } = await axios.get(serverUrl + "scoreboard");
    //console.log(standdata);
    setStandingData(standdata);
  };
  useEffect(() => {
    getStats();
  }, []);
  // console.log(standingData);
  return (
    <>
      <Navbar></Navbar>
      {statLeaders != undefined && standingData != undefined ? (
        <div className=" navbarpadding ">
          <div className="d-flex justify-content-around align-items-start p-5">
            <Statleader statLeaders={statLeaders}></Statleader>
            <Standings standingData={standingData}></Standings>
          </div>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </>
  );
}

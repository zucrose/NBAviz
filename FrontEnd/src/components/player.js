import { redirect, useLocation } from "react-router-dom";
import PlayerShortChart from "./PlayerShortChart";
import Navbar from "./navbar";
import { serverUrl } from "../utils/constants";
import axios from "axios";
import { useEffect } from "react";

export default function Player() {
  const { state } = useLocation();
  const getPlayerInfo = async () => {
    const { data: data } = await axios.get(serverUrl + "playerInfo", {
      params: {
        PlayerID: state.playerID,
      },
    });
    console.log(data);
  };
  useEffect(() => {
    getPlayerInfo();
  }, []);
  if (state.playerID === undefined) redirect("/team");
  return (
    <>
      <Navbar />
      <div className="navbarpadding">
        {<PlayerShortChart playerID={state.playerID}></PlayerShortChart>}
      </div>
    </>
  );
}

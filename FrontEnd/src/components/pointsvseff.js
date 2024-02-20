import React, { useEffect, useRef, useState } from "react";
import * as Plot from "@observablehq/plot";

import axios from "axios";
import useTableSort from "./useTableSort";
import PointsVsEffTable from "./pointsVsEffTable";
import { serverUrl } from "../utils/constants";
import Navbar from "./navbar";
export default function PointsVsEfg() {
  const chartRef = useRef();
  const [ptsefg, setPtsefg] = useState(null);
  const [leagueAvg, setLeageuAvg] = useState(null);
  const [leaguePPG, setLeageuPPG] = useState(null);

  const getStats = async () => {
    const {
      data: { pointsEfg: pointsEfg, leagueTs: leagueAvg, leaguePPG: leaguePPG },
    } = await axios.get(serverUrl + "getPtsVsEfg");
    setPtsefg(pointsEfg);
    setLeageuAvg(leagueAvg);
    setLeageuPPG(leaguePPG);
  };
  useEffect(() => {
    getStats();
  }, []);
  useEffect(() => {
    if (ptsefg === null) return;
    const plot = Plot.plot({
      grid: true,
      inset: 20,
      marks: [
        Plot.dot(ptsefg, {
          x: "TrueShooting",
          y: "PointsPerMinute",
          r: "PointsPerGame",
          fill: "Team",
          tip: { fill: "#63D4BE", stroke: "green" },
          channels: { Name: "player" },
        }),
        Plot.ruleX([leagueAvg], {
          stroke: "white",
        }),
        Plot.ruleY([leaguePPG], { stroke: "white" }),
      ],
    });

    chartRef.current.append(plot);
    return () => plot.remove();
  }, [ptsefg]);
  console.log(leagueAvg);

  return (
    <>
      <Navbar></Navbar>
      {ptsefg !== null ? (
        <div className="container navbarpadding">
          <div className="d-flex justify-content-center mt-5">
            <div ref={chartRef} />
          </div>
          <div className="d-flex justify-content-center">
            <div className="table-responsive mt-5 mb-5">
              <PointsVsEffTable data={ptsefg} />
            </div>
          </div>
        </div>
      ) : (
        <div>LOADING....</div>
      )}
    </>
  );
}

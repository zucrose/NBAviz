import { useState } from "react";

export default function Standings({ standingData }) {
  //console.log("std", standingData);
  const [eastOrWest, setEastVsWest] = useState("East");
  const [currentData, setCurrentData] = useState(standingData.eastTeams);
  return (
    <>
      <div
        className="card text-white"
        style={{ backgroundColor: "#111111", maxWidth: "50vw" }}
      >
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs ">
            <li className="nav-item ">
              <a
                className={
                  +(eastOrWest === "East")
                    ? "nav-link active text-white"
                    : " nav-link text-white "
                }
                style={{ backgroundColor: "#111111" }}
                href="#"
                onClick={() => {
                  console.log("east");
                  setEastVsWest("East");
                  setCurrentData(standingData.eastTeams);
                }}
              >
                East
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  +(eastOrWest === "West")
                    ? "nav-link active text-white"
                    : " nav-link text-white "
                }
                style={{ backgroundColor: "#111111" }}
                href="#"
                onClick={() => {
                  console.log("west");
                  setEastVsWest("West");
                  setCurrentData(standingData.westTeams);
                }}
              >
                West
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div className="d-flex ">
            <div
              className="flex-fill p-2 text-start"
              style={{ width: "200px" }}
            >
              Team
            </div>
            <div className="flex p-2" style={{ width: "50px" }}>
              W
            </div>
            <div className="flex p-2" style={{ width: "50px" }}>
              L
            </div>
            <div className="flex p-2" style={{ width: "60px" }}>
              Win%
            </div>
            <div className="flex p-2" style={{ width: "80px" }}>
              {" "}
              Home
            </div>
            <div className="flex p-2" style={{ width: "80px" }}>
              Away
            </div>
            <div className="flex p-2" style={{ width: "80px" }}>
              Last 10
            </div>
          </div>
          <hr></hr>
          {currentData.map((element, index) => {
            return (
              <div className="d-flex ">
                <div
                  className="flex-fill p-2 text-start"
                  style={{ width: "200px" }}
                >
                  <span className="">{index + 1}</span>
                  {". "}
                  {element.TeamCity + " " + element.TeamName}
                </div>
                <div className="flex p-2" style={{ width: "50px" }}>
                  {element.WINS}
                </div>
                <div className="flex p-2" style={{ width: "50px" }}>
                  {element.LOSSES}
                </div>
                <div className="flex p-2" style={{ width: "60px" }}>
                  {element.WinPCT}
                </div>
                <div className="flex p-2" style={{ width: "80px" }}>
                  {" "}
                  {element.HOME}
                </div>
                <div className="flex p-2" style={{ width: "80px" }}>
                  {element.ROAD}
                </div>
                <div className="flex p-2" style={{ width: "80px" }}>
                  {element.L10}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

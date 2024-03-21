import { useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
export default function Statleader({ statLeaders }) {
  const [currentStat, setCurrentStat] = useState("Points");
  const [currentStatAbv, setCurrentStatAbv] = useState("pts");
  const [statData, setStatData] = useState(statLeaders.homePageStat1);
  const navigate = useNavigate();
  return (
    <Card
      style={{
        maxWidth: "40vw",
        backgroundColor: "#111111",
        minWidth: "300px",
      }}
      className=" mb-3 text-white "
      border="light"
    >
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <button
              className="btn btn-dark"
              onClick={() => {
                setCurrentStat("Points");
                setCurrentStatAbv("pts");
                setStatData(statLeaders.homePageStat1);
              }}
            >
              <span className="tip">
                PTS
                <span className="tooltiptext">Points Per Game</span>
              </span>
            </button>

            <button
              className="btn btn-dark"
              onClick={() => {
                setCurrentStat("Rebounds");
                setCurrentStatAbv("reb");
                setStatData(statLeaders.homePageStat2);
              }}
            >
              <span className="tip">
                REB
                <span className="tooltiptext">Rebounds Per Game</span>
              </span>
            </button>

            <button
              className="btn btn-dark"
              onClick={() => {
                setCurrentStat("Assist");
                setCurrentStatAbv("ast");
                setStatData(statLeaders.homePageStat3);
              }}
            >
              <span className="tip">
                AST
                <span className="tooltiptext">Assists Per Game</span>
              </span>
            </button>

            <button
              className="btn btn-dark"
              onClick={() => {
                setCurrentStat("Steal");
                setCurrentStatAbv("stl");
                setStatData(statLeaders.homePageStat4);
              }}
            >
              <span className="tip">
                STL
                <span className="tooltiptext">Steals Per Game</span>
              </span>
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                setCurrentStat("Field Goal %");
                setCurrentStatAbv("fgPct");
                setStatData(statLeaders.homePageStat5);
              }}
            >
              <span className="tip">
                FG%
                <span className="tooltiptext">Field Goal Percentage</span>
              </span>
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                setCurrentStat("Free Throw %");
                setCurrentStatAbv("ftPct");
                setStatData(statLeaders.homePageStat6);
              }}
            >
              <span className="tip">
                FT%
                <span className="tooltiptext">Free Throw Percentage</span>
              </span>
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                setCurrentStat("3 Point %");
                setCurrentStatAbv("fg3Pct");
                setStatData(statLeaders.homePageStat7);
              }}
            >
              <span className="tip">
                FG3%
                <span className="tooltiptext">3 Point Percentage</span>
              </span>
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                setCurrentStat("Blocks");
                setCurrentStatAbv("blk");
                setStatData(statLeaders.homePageStat8);
              }}
            >
              <span className="tip">
                BLK
                <span className="tooltiptext">Blocks Per Game</span>
              </span>
            </button>
          </li>
        </ul>
      </div>

      <div className="card-body">
        <h3 className="text-primary">{currentStat} Leaders</h3>
        <hr></hr>
        {statData.map((element, index) => {
          if (index != 0)
            return (
              <>
                <div className="d-flex justify-content-between">
                  <a
                    className=" text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    onClick={() =>
                      navigate("/players", {
                        state: { playerID: element.playerId },
                      })
                    }
                  >
                    {element.player}({element.teamAbbreviation}){"  "}
                  </a>
                  <p className=" "> {element[currentStatAbv]}</p>
                </div>
              </>
            );
          else
            return (
              <>
                <strong>
                  <div className="d-flex justify-content-between">
                    <a
                      className=" text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                      onClick={() =>
                        navigate("/players", {
                          state: { playerID: element.playerId },
                        })
                      }
                    >
                      {element.player}({element.teamAbbreviation}){"  "}
                    </a>
                    <p className=" "> {element[currentStatAbv]}</p>
                  </div>
                </strong>
              </>
            );
        })}
      </div>
    </Card>
  );
}

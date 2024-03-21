import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
export default function TeamLeaders({ teamData }) {
  const navigate = useNavigate();
  return (
    <Card
      style={{
        maxWidth: "40vw",
        backgroundColor: "#111111",
        minWidth: "300px",
      }}
      border="light"
      className="text-white "
    >
      <Tabs defaultActiveKey="PPG" className="colTab">
        <Tab eventKey="PPG" title="PTS" className="px-2">
          <h3 className="text-center p-2 text-primary">
            Points Per Game Leaders
          </h3>
          <hr></hr>
          {teamData.homePageStat1.map((element, index) => {
            if (index != 0)
              return (
                <div>
                  <p className="d-flex justify-content-between px-2">
                    <span className="text-left">
                      <a
                        className=" text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                        onClick={() =>
                          navigate("/team", {
                            state: { teamID: element.teamId },
                          })
                        }
                      >
                        {element.teamName}
                      </a>
                    </span>
                    <span className="text-right">{element.pts}</span>
                  </p>
                </div>
              );
            else
              return (
                <strong>
                  <p className="d-flex justify-content-between px-2">
                    <span className="text-left">
                      <a
                        className=" text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                        onClick={() =>
                          navigate("/team", {
                            state: { teamID: element.teamId },
                          })
                        }
                      >
                        {element.teamName}
                      </a>
                    </span>
                    <span className="text-right">{element.pts}</span>
                  </p>
                </strong>
              );
          })}
        </Tab>
        <Tab eventKey="reb" title="REB" className="px-2">
          <h3 className="text-center  p-2 text-primary">
            Rebounds Per Game Leaders
          </h3>
          <hr></hr>
          {teamData.homePageStat2.map((element, index) => {
            if (index != 0)
              return (
                <div>
                  <div>
                    <p className="d-flex justify-content-between px-2">
                      <span className="text-left">
                        <a
                          className=" text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                          onClick={() =>
                            navigate("/team", {
                              state: { teamID: element.teamId },
                            })
                          }
                        >
                          {element.teamName}
                        </a>
                      </span>
                      <span className="text-right">{element.reb}</span>
                    </p>
                  </div>
                </div>
              );
            else
              return (
                <strong>
                  <div>
                    <p className="d-flex justify-content-between px-2">
                      <span className="text-left">
                        <a
                          className=" text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                          onClick={() =>
                            navigate("/team", {
                              state: { teamID: element.teamId },
                            })
                          }
                        >
                          {element.teamName}
                        </a>
                      </span>
                      <span className="text-right">{element.reb}</span>
                    </p>
                  </div>
                </strong>
              );
          })}
        </Tab>
        <Tab eventKey="ast" title="AST" className="px-2">
          <h3 className="text-center  p-2 text-primary">
            Assists Per Game Leaders
          </h3>
          <hr></hr>
          {teamData.homePageStat3.map((element, index) => {
            if (index != 0)
              return (
                <div>
                  <div>
                    <p className="d-flex justify-content-between px-2">
                      <span className="text-left">
                        <a
                          className=" text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                          onClick={() =>
                            navigate("/team", {
                              state: { teamID: element.teamId },
                            })
                          }
                        >
                          {element.teamName}
                        </a>
                      </span>
                      <span className="text-right">{element.ast}</span>
                    </p>
                  </div>
                </div>
              );
            else
              return (
                <strong>
                  <div>
                    <p className="d-flex justify-content-between px-2">
                      <span className="text-left">
                        <a
                          className=" text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                          onClick={() =>
                            navigate("/team", {
                              state: { teamID: element.teamId },
                            })
                          }
                        >
                          {element.teamName}
                        </a>
                      </span>
                      <span className="text-right">{element.ast}</span>
                    </p>
                  </div>
                </strong>
              );
          })}
        </Tab>
        <Tab eventKey="stl" title="STL" className="px-2">
          <h3 className="text-center  p-2 text-primary">
            Steals Per Game Leaders
          </h3>
          <hr></hr>
          {teamData.homePageStat4.map((element, index) => {
            if (index != 0)
              return (
                <div>
                  <div>
                    <p className="d-flex justify-content-between px-2">
                      <span className="text-left">
                        <a
                          className=" text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                          onClick={() =>
                            navigate("/team", {
                              state: { teamID: element.teamId },
                            })
                          }
                        >
                          {element.teamName}
                        </a>
                      </span>
                      <span className="text-right">{element.stl}</span>
                    </p>
                  </div>
                </div>
              );
            else
              return (
                <strong>
                  <div>
                    <p className="d-flex justify-content-between px-2">
                      <span className="text-left">
                        <a
                          className=" text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                          onClick={() =>
                            navigate("/team", {
                              state: { teamID: element.teamId },
                            })
                          }
                        >
                          {element.teamName}
                        </a>
                      </span>
                      <span className="text-right">{element.stl}</span>
                    </p>
                  </div>
                </strong>
              );
          })}
        </Tab>
        <Tab eventKey="fg%" title="FG%" className="px-2">
          <h3 className="text-center  p-2 text-primary">
            Field Goals % Leaders
          </h3>
          <hr></hr>
          {teamData.homePageStat5.map((element, index) => {
            if (index != 0)
              return (
                <div>
                  <div>
                    <p className="d-flex justify-content-between px-2">
                      <span className="text-left">
                        <a
                          className=" text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                          onClick={() =>
                            navigate("/team", {
                              state: { teamID: element.teamId },
                            })
                          }
                        >
                          {element.teamName}
                        </a>
                      </span>
                      <span className="text-right">{element.fgPct}</span>
                    </p>
                  </div>
                </div>
              );
            else
              return (
                <strong>
                  <div>
                    <p className="d-flex justify-content-between px-2">
                      <span className="text-left">
                        <a
                          className=" text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                          onClick={() =>
                            navigate("/team", {
                              state: { teamID: element.teamId },
                            })
                          }
                        >
                          {element.teamName}
                        </a>
                      </span>
                      <span className="text-right">{element.fgPct}</span>
                    </p>
                  </div>
                </strong>
              );
          })}
        </Tab>
        <Tab eventKey="FT%" title="FT%" className="px-2">
          <h3 className="text-center  p-2 text-primary">
            Free Throw % Leaders
          </h3>
          <hr></hr>
          {teamData.homePageStat6.map((element, index) => {
            if (index != 0)
              return (
                <div>
                  <div>
                    <p className="d-flex justify-content-between px-2">
                      <span className="text-left">
                        <a
                          className=" text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                          onClick={() =>
                            navigate("/team", {
                              state: { teamID: element.teamId },
                            })
                          }
                        >
                          {element.teamName}
                        </a>
                      </span>
                      <span className="text-right">{element.ftPct}</span>
                    </p>
                  </div>
                </div>
              );
            else
              return (
                <strong>
                  <div>
                    <p className="d-flex justify-content-between px-2">
                      <span className="text-left">
                        <a
                          className=" text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                          onClick={() =>
                            navigate("/team", {
                              state: { teamID: element.teamId },
                            })
                          }
                        >
                          {element.teamName}
                        </a>
                      </span>
                      <span className="text-right">{element.ftPct}</span>
                    </p>
                  </div>
                </strong>
              );
          })}
        </Tab>
        <Tab eventKey="FG3%" title="FG3%" className="px-2">
          <h3 className="text-center  p-2 text-primary">3 Point % Leaders</h3>
          <hr></hr>
          {teamData.homePageStat7.map((element, index) => {
            if (index != 0)
              return (
                <div>
                  <div>
                    <p className="d-flex justify-content-between px-2">
                      <span className="text-left">
                        <a
                          className=" text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                          onClick={() =>
                            navigate("/team", {
                              state: { teamID: element.teamId },
                            })
                          }
                        >
                          {element.teamName}
                        </a>
                      </span>
                      <span className="text-right">{element.fg3Pct}</span>
                    </p>
                  </div>
                </div>
              );
            else
              return (
                <strong>
                  <div>
                    <p className="d-flex justify-content-between px-2">
                      <span className="text-left">
                        <a
                          className=" text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                          onClick={() =>
                            navigate("/team", {
                              state: { teamID: element.teamId },
                            })
                          }
                        >
                          {element.teamName}
                        </a>
                      </span>
                      <span className="text-right">{element.fg3Pct}</span>
                    </p>
                  </div>
                </strong>
              );
          })}
        </Tab>
        <Tab eventKey="BLK" title="BLK" className="px-2">
          <h3 className="text-center  p-2 text-primary">
            Blocks Per Game Leaders
          </h3>
          <hr></hr>
          {teamData.homePageStat8.map((element, index) => {
            if (index != 0)
              return (
                <div>
                  <div>
                    <p className="d-flex justify-content-between px-2">
                      <span className="text-left">
                        <a
                          className=" text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                          onClick={() =>
                            navigate("/team", {
                              state: { teamID: element.teamId },
                            })
                          }
                        >
                          {element.teamName}
                        </a>
                      </span>
                      <span className="text-right">{element.blk}</span>
                    </p>
                  </div>
                </div>
              );
            else
              return (
                <strong>
                  <div>
                    <p className="d-flex justify-content-between px-2">
                      <span className="text-left">
                        <a
                          className=" text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                          onClick={() =>
                            navigate("/team", {
                              state: { teamID: element.teamId },
                            })
                          }
                        >
                          {element.teamName}
                        </a>
                      </span>
                      <span className="text-right">{element.blk}</span>
                    </p>
                  </div>
                </strong>
              );
          })}
        </Tab>
      </Tabs>
    </Card>
  );
}

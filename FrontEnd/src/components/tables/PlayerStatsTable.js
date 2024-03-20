import {
  playerPercentileRgb,
  playerPercentileRgbRig,
} from "../../utils/arrayFunctions";
import useTableSort from "../useTableSort";

export default function PlayerStatsTable({ playerStats }) {
  const { sortedData, requestSort, sortConfig } = useTableSort(
    playerStats.seasonTotalsRegularSeason
  );
  const seasonRanking = playerStats.seasonRankingsRegularSeason;

  return (
    <>
      {sortedData !== null ? (
        <table className="table table-dark  ">
          <thead>
            <tr>
              <th onClick={() => requestSort("seasonId")}>
                Season{" "}
                {sortConfig.columnName === "seasonId" ? (
                  sortConfig.dir === "asc" ? (
                    <i className="bi bi-sort-alpha-down"></i>
                  ) : (
                    <i
                      className="bi
                      bi-sort-alpha-down-alt"
                    ></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("gp")}>
                <span className="tip">
                  GP<span className="tooltiptext">Games Played</span>
                </span>
                {sortConfig.columnName === "gp" ? (
                  sortConfig.dir === "asc" ? (
                    <i className="bi bi-sort-numeric-down "></i>
                  ) : (
                    <i className="bi bi-sort-numeric-down-alt "></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("min")}>
                <span className="tip">
                  Min<span className="tooltiptext">Minutes per game</span>
                </span>
                {sortConfig.columnName === "min" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("pts")}>
                <span className="tip">
                  Pts<span className="tooltiptext">Points Per Game</span>
                </span>
                {sortConfig.columnName === "pts" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("fgm")}>
                <span className="tip">
                  FGM<span className="tooltiptext">Field Goals Made </span>
                </span>
                {sortConfig.columnName === "fgm" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("fga")}>
                <span className="tip">
                  FGA<span className="tooltiptext">Field Goals Attempted</span>
                </span>
                {sortConfig.columnName === "fga" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("fgPct")}>
                <span className="tip">
                  FG%<span className="tooltiptext">Field Goal Percentage</span>
                </span>
                {sortConfig.columnName === "fgPct" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("fG3M")}>
                <span className="tip">
                  3FGM
                  <span className="tooltiptext">3 Point field goals made</span>
                </span>
                {sortConfig.columnName === "fG3M" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("fG3A")}>
                <span className="tip">
                  3FGA
                  <span className="tooltiptext">
                    3 Point field goals Attempted
                  </span>
                </span>
                {sortConfig.columnName === "fG3A" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("fg3Pct")}>
                <span className="tip">
                  FG3%
                  <span className="tooltiptext">
                    3 Point Field Goal Percentage
                  </span>
                </span>
                {sortConfig.columnName === "fg3Pct" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("ftm")}>
                <span className="tip">
                  FTM<span className="tooltiptext">Free Throws Made</span>
                </span>
                {sortConfig.columnName === "ftm" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("fta")}>
                <span className="tip">
                  FTA<span className="tooltiptext">Free Throws Attempted</span>
                </span>
                {sortConfig.columnName === "fta" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("ftPct")}>
                <span className="tip">
                  FT%<span className="tooltiptext">Free Throw Percentage</span>
                </span>
                {sortConfig.columnName === "ftPct" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("dreb")}>
                <span className="tip">
                  DReb
                  <span className="tooltiptext">
                    Defensive Rebounds per game
                  </span>
                </span>
                {sortConfig.columnName === "dreb" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("oreb")}>
                <span className="tip">
                  OReb
                  <span className="tooltiptext">
                    Offensive Rebounds per game
                  </span>
                </span>
                {sortConfig.columnName === "oreb" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("reb")}>
                <span className="tip">
                  Reb
                  <span className="tooltiptext">Rebounds per game</span>
                </span>
                {sortConfig.columnName === "reb" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("ast")}>
                <span className="tip">
                  Ast
                  <span className="tooltiptext">Assists per game</span>
                </span>
                {sortConfig.columnName === "ast" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("blk")}>
                <span className="tip">
                  Blk
                  <span className="tooltiptext">Blocks per game</span>
                </span>
                {sortConfig.columnName === "blk" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("stl")}>
                <span className="tip">
                  Stl
                  <span className="tooltiptext">Steals per game</span>
                </span>
                {sortConfig.columnName === "stl" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("tov")}>
                <span className="tip">
                  Tov
                  <span className="tooltiptext">Turnovers per game</span>
                </span>
                {sortConfig.columnName === "tov" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((element) => {
              let index = 0;
              for (let x = 0; x < seasonRanking.length; x++) {
                if (seasonRanking[x].seasonId === element.seasonId) index = x;
              }
              return (
                <tr>
                  <td>{element.seasonId}</td>
                  <td>{element.gp}</td>
                  <td>{element.min}</td>
                  <td
                    style={{
                      backgroundColor: `rgb(${playerPercentileRgb(
                        seasonRanking[index].rankPgPts
                      )})`,
                    }}
                  >
                    <span className="tip">
                      {element.pts}
                      <span className="tooltiptext">
                        League Rank: {seasonRanking[index].rankPgPts}
                      </span>
                    </span>
                  </td>
                  <td
                    style={{
                      backgroundColor: `rgb(${playerPercentileRgb(
                        seasonRanking[index].rankPgFgm
                      )})`,
                    }}
                  >
                    <span className="tip">
                      {element.fgm}
                      <span className="tooltiptext">
                        League Rank: {seasonRanking[index].rankPgFgm}
                      </span>
                    </span>
                  </td>
                  <td
                    style={{
                      backgroundColor: `rgb(${playerPercentileRgb(
                        seasonRanking[index].rankPgFga
                      )})`,
                    }}
                  >
                    <span className="tip">
                      {element.fga}
                      <span className="tooltiptext">
                        League Rank: {seasonRanking[index].rankPgFga}
                      </span>
                    </span>
                  </td>
                  <td
                    style={{
                      backgroundColor: `rgb(${playerPercentileRgbRig(
                        seasonRanking[index].rankFgPct
                      )})`,
                    }}
                  >
                    <span className="tip">
                      {element.fgPct}
                      <span className="tooltiptext">
                        League Rank: {seasonRanking[index].rankFgPct}
                      </span>
                    </span>
                  </td>
                  <td
                    style={{
                      backgroundColor: `rgb(${playerPercentileRgb(
                        seasonRanking[index].rankPgFg3m
                      )})`,
                    }}
                  >
                    <span className="tip">
                      {element.fG3M}
                      <span className="tooltiptext">
                        League Rank: {seasonRanking[index].rankPgFg3m}
                      </span>
                    </span>
                  </td>
                  <td
                    style={{
                      backgroundColor: `rgb(${playerPercentileRgb(
                        seasonRanking[index].rankPgFg3m
                      )})`,
                    }}
                  >
                    <span className="tip">
                      {element.fG3A}

                      <span className="tooltiptext">
                        League Rank: {seasonRanking[index].rankPgFg3m}
                      </span>
                    </span>
                  </td>
                  <td
                    style={{
                      backgroundColor: `rgb(${playerPercentileRgbRig(
                        seasonRanking[index].rankFg3Pct
                      )})`,
                    }}
                  >
                    <span className="tip">
                      {element.fg3Pct}
                      <span className="tooltiptext">
                        League Rank: {seasonRanking[index].rankFg3Pct}
                      </span>
                    </span>
                  </td>
                  <td
                    style={{
                      backgroundColor: `rgb(${playerPercentileRgb(
                        seasonRanking[index].rankPgFtm
                      )})`,
                    }}
                  >
                    <span className="tip">
                      {element.ftm}
                      <span className="tooltiptext">
                        League Rank: {seasonRanking[index].rankPgFtm}
                      </span>
                    </span>
                  </td>
                  <td
                    style={{
                      backgroundColor: `rgb(${playerPercentileRgb(
                        seasonRanking[index].rankPgFta
                      )})`,
                    }}
                  >
                    <span className="tip">
                      {element.fta}
                      <span className="tooltiptext">
                        League Rank: {seasonRanking[index].rankPgFta}
                      </span>
                    </span>
                  </td>
                  <td
                    style={{
                      backgroundColor: `rgb(${playerPercentileRgbRig(
                        seasonRanking[index].rankFtPct
                      )})`,
                    }}
                  >
                    <span className="tip">
                      {element.ftPct}
                      <span className="tooltiptext">
                        League Rank: {seasonRanking[index].rankFtPct}
                      </span>
                    </span>
                  </td>
                  <td
                    style={{
                      backgroundColor: `rgb(${playerPercentileRgb(
                        seasonRanking[index].rankPgDreb
                      )})`,
                    }}
                  >
                    <span className="tip">
                      {element.dreb}
                      <span className="tooltiptext">
                        League Rank: {seasonRanking[index].rankPgDreb}
                      </span>
                    </span>
                  </td>
                  <td
                    style={{
                      backgroundColor: `rgb(${playerPercentileRgb(
                        seasonRanking[index].rankPgOreb
                      )})`,
                    }}
                  >
                    <span className="tip">
                      {element.oreb}
                      <span className="tooltiptext">
                        League Rank: {seasonRanking[index].rankPgOreb}
                      </span>
                    </span>
                  </td>
                  <td
                    style={{
                      backgroundColor: `rgb(${playerPercentileRgb(
                        seasonRanking[index].rankPgReb
                      )})`,
                    }}
                  >
                    <span className="tip">
                      {element.reb}
                      <span className="tooltiptext">
                        League Rank: {seasonRanking[index].rankPgReb}
                      </span>
                    </span>
                  </td>
                  <td
                    style={{
                      backgroundColor: `rgb(${playerPercentileRgb(
                        seasonRanking[index].rankPgAst
                      )})`,
                    }}
                  >
                    <span className="tip">
                      {element.ast}
                      <span className="tooltiptext">
                        League Rank: {seasonRanking[index].rankPgAst}
                      </span>
                    </span>
                  </td>
                  <td
                    style={{
                      backgroundColor: `rgb(${playerPercentileRgb(
                        seasonRanking[index].rankPgBlk
                      )})`,
                    }}
                  >
                    <span className="tip">
                      {element.blk}
                      <span className="tooltiptext">
                        League Rank: {seasonRanking[index].rankPgBlk}
                      </span>
                    </span>
                  </td>
                  <td
                    style={{
                      backgroundColor: `rgb(${playerPercentileRgb(
                        seasonRanking[index].rankPgStl
                      )})`,
                    }}
                  >
                    <span className="tip">
                      {element.stl}
                      <span className="tooltiptext">
                        League Rank: {seasonRanking[index].rankPgStl}
                      </span>
                    </span>
                  </td>
                  <td
                    style={{
                      backgroundColor: `rgb(${playerPercentileRgb(
                        seasonRanking[index].rankPgTov
                      )})`,
                    }}
                  >
                    <span className="tip">
                      {element.tov}
                      <span className="tooltiptext">
                        League Rank: {seasonRanking[index].rankPgTov}
                      </span>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </>
  );
}

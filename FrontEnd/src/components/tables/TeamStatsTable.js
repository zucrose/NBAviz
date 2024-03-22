import Card from "react-bootstrap/Card";
import { availableSeasons } from "../../utils/constants";
import { TeamPercentileRgbRig } from "../../utils/arrayFunctions";
function TableCellComponent({ data, rank }) {
  return (
    <td
      style={{
        backgroundColor: `rgb(${TeamPercentileRgbRig(rank)}) `,
      }}
      className="text-dark "
    >
      <span className="tip">
        {data}
        <span className="tooltiptext text-white">League Rank: {rank}</span>
      </span>
    </td>
  );
}
export default function TeamStatsTable({
  teamBase,
  teamAdv,
  season,
  setSeason,
}) {
  return (
    <Card style={{ backgroundColor: "#111111" }}>
      <Card.Body className="text-white">
        <label className="px-2">Seasons</label>
        <select
          className="text-white m-2"
          style={{ backgroundColor: "#111111" }}
          onChange={(e) => setSeason(e.target.value)}
          value={season}
        >
          {availableSeasons.map((ele) => (
            <option>{ele}</option>
          ))}
        </select>
        <h3 className="">Base Stats</h3>
        <table className="table table-dark">
          <thead>
            <tr>
              <th className="px-2">Name</th>
              <th className="px-2">Record</th>
              <th className="px-2">Win%</th>
              <th className="px-2">Pts</th>
              <th className="px-2">FGA</th>
              <th className="px-2">FGM</th>
              <th className="px-2">FG%</th>
              <th className="px-2">FG3A</th>
              <th className="px-2">FG3M</th>
              <th className="px-2">FG3%</th>
              <th className="px-2">FTA</th>
              <th className="px-2">FTM</th>
              <th className="px-2">FT%</th>
              <th className="px-2">Ast</th>
              <th className="px-2">DReb</th>
              <th className="px-2">OReb</th>
              <th className="px-2">Reb</th>
              <th className="px-2">Stl</th>
              <th className="px-2">Blk</th>
              <th className="px-2">Tov</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            <tr>
              <td>{teamBase.teamName}</td>

              <TableCellComponent
                data={teamBase.w + "-" + teamBase.l}
                rank={teamBase.wPctRank}
              />
              <TableCellComponent
                data={teamBase.wPct}
                rank={teamBase.wPctRank}
              />
              <TableCellComponent data={teamBase.pts} rank={teamBase.ptsRank} />
              <TableCellComponent data={teamBase.fgm} rank={teamBase.fgmRank} />
              <TableCellComponent data={teamBase.fga} rank={teamBase.fgaRank} />
              <TableCellComponent
                data={teamBase.fgPct}
                rank={teamBase.fgPctRank}
              />
              <TableCellComponent
                data={teamBase.fG3A}
                rank={teamBase.fg3mRank}
              />
              <TableCellComponent
                data={teamBase.fG3M}
                rank={teamBase.fg3aRank}
              />
              <TableCellComponent
                data={teamBase.fg3Pct}
                rank={teamBase.fg3PctRank}
              />
              <TableCellComponent data={teamBase.ftm} rank={teamBase.ftmRank} />
              <TableCellComponent data={teamBase.fta} rank={teamBase.ftaRank} />
              <TableCellComponent
                data={teamBase.ftPct}
                rank={teamBase.ftPctRank}
              />
              <TableCellComponent data={teamBase.ast} rank={teamBase.astRank} />
              <TableCellComponent
                data={teamBase.dreb}
                rank={teamBase.drebRank}
              />
              <TableCellComponent
                data={teamBase.oreb}
                rank={teamBase.orebRank}
              />
              <TableCellComponent data={teamBase.reb} rank={teamBase.rebRank} />
              <TableCellComponent data={teamBase.stl} rank={teamBase.stlRank} />
              <TableCellComponent data={teamBase.blk} rank={teamBase.blkRank} />
              <TableCellComponent data={teamBase.tov} rank={teamBase.tovRank} />
            </tr>
          </tbody>
        </table>
        <h3 className="">Advanced Stats</h3>
        <table className="table table-dark">
          <thead>
            <tr>
              <th className="px-2">Name</th>
              <th className="px-2">Record</th>
              <th className="px-2">Win%</th>
              <th className="px-2">Pace</th>
              <th className="px-2">Off Rating</th>
              <th className="px-2">Def Rating</th>
              <th className="px-2">Net Rating</th>
              <th className="px-2">EFG%</th>
              <th className="px-2">TS%</th>
              <th className="px-2">Ast%</th>
              <th className="px-2">Ast Ratio</th>
              <th className="px-2">Ast To</th>
              <th className="px-2">DReb%</th>
              <th className="px-2">OReb%</th>
              <th className="px-2">Reb%</th>
              <th className="px-2">Team To%</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            <tr>
              <td>{teamBase.teamName}</td>

              <TableCellComponent
                data={teamBase.w + "-" + teamBase.l}
                rank={teamBase.wPctRank}
              />
              <TableCellComponent
                data={teamBase.wPct}
                rank={teamBase.wPctRank}
              />
              <TableCellComponent data={teamAdv.pace} rank={teamAdv.paceRank} />
              <TableCellComponent
                data={teamAdv.offRating}
                rank={teamAdv.offRatingRank}
              />
              <TableCellComponent
                data={teamAdv.defRating}
                rank={teamAdv.defRatingRank}
              />
              <TableCellComponent
                data={teamAdv.netRating}
                rank={teamAdv.netRatingRank}
              />
              <TableCellComponent
                data={teamAdv.efgPct}
                rank={teamAdv.efgPctRank}
              />
              <TableCellComponent
                data={teamAdv.tsPct}
                rank={teamAdv.tsPctRank}
              />
              <TableCellComponent
                data={teamAdv.astPct}
                rank={teamAdv.astPctRank}
              />
              <TableCellComponent
                data={teamAdv.astRatio}
                rank={teamAdv.astRatioRank}
              />
              <TableCellComponent
                data={teamAdv.astTo}
                rank={teamAdv.astToRank}
              />
              <TableCellComponent
                data={teamAdv.drebPct}
                rank={teamAdv.drebPctRank}
              />
              <TableCellComponent
                data={teamAdv.orebPct}
                rank={teamAdv.orebPctRank}
              />
              <TableCellComponent
                data={teamAdv.rebPct}
                rank={teamAdv.rebPctRank}
              />
              <TableCellComponent
                data={teamAdv.tmTovPct}
                rank={teamAdv.tmTovPctRank}
              />
            </tr>
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
}

import useTableSort from "../useTableSort";

export default function PointsVsEffTable({ data }) {
  const { sortedData, requestSort, sortConfig } = useTableSort(data);

  return (
    <>
      {sortedData !== null ? (
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th onClick={() => requestSort("player")}>
                Name (team){" "}
                {sortConfig.columnName === "player" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-alpha-down"></i>
                  ) : (
                    <i
                      class="bi
                    bi-sort-alpha-down-alt"
                    ></i>
                  )
                ) : null}
              </th>

              <th onClick={() => requestSort("PointsPerGame")}>
                Points Per Game{" "}
                {sortConfig.columnName === "PointsPerGame" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>

              <th onClick={() => requestSort("PointsPerMinute")}>
                Points per Minute{" "}
                {sortConfig.columnName === "PointsPerMinute" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("TrueShooting")}>
                True Shooting %{" "}
                {sortConfig.columnName === "TrueShooting" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("efg")}>
                Effective Field Goal %{" "}
                {sortConfig.columnName === "efg" ? (
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
              //console.log(element);
              return (
                <tr>
                  <td>
                    {element.player}({element.Team})
                  </td>
                  <td>{element.PointsPerGame}</td>
                  <td>{element.PointsPerMinute.toPrecision(3)}</td>
                  <td>{element.TrueShooting.toPrecision(3)}</td>
                  <td>{element.efg.toPrecision(3)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </>
  );
}

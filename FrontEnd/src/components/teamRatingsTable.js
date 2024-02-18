import useTableSort from "./useTableSort";

export default function TeamRatingsTable({ data }) {
  const { sortedData, requestSort, sortConfig } = useTableSort(data);

  return (
    <>
      {sortedData !== null ? (
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>S.No</th>
              <th onClick={() => requestSort("teamName")}>
                Team{" "}
                {sortConfig.columnName === "teamName" ? (
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

              <th onClick={() => requestSort("w")}>
                Wins-Loss
                {sortConfig.columnName === "w" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>

              <th onClick={() => requestSort("wPct")}>
                Win%
                {sortConfig.columnName === "wPct" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("offRating")}>
                Offensive Rating
                {sortConfig.columnName === "offRating" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("defRating")}>
                Defensive Rating
                {sortConfig.columnName === "defRating" ? (
                  sortConfig.dir === "asc" ? (
                    <i class="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i class="bi bi-sort-numeric-down-alt"></i>
                  )
                ) : null}
              </th>
              <th onClick={() => requestSort("netRating")}>
                Net Rating
                {sortConfig.columnName === "netRating" ? (
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
            {sortedData.map((element, index) => {
              //console.log(element);
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{element.teamName}</td>
                  <td>
                    {element.w}-{element.l}
                  </td>
                  <td>{element.wPct.toPrecision(3)}</td>
                  <td>{element.offRating.toPrecision(4)}</td>
                  <td>{element.defRating.toPrecision(4)}</td>
                  <td>{element.netRating.toPrecision(3)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </>
  );
}

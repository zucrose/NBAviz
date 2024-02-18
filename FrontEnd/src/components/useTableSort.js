import { useMemo, useState } from "react";
export default function useTableSort(data) {
  const [sortConfig, setSortConfig] = useState({ columnName: null, dir: null });

  const sortTable = useMemo(() => {
    const tableData = [...data];
    if (sortConfig !== null) {
      tableData.sort((a, b) => {
        if (a[sortConfig.columnName] < b[sortConfig.columnName])
          return sortConfig.dir === "desc" ? 1 : -1;
        else return sortConfig.dir === "desc" ? -1 : 1;
      });
    }

    return tableData;
  }, [data, sortConfig]);
  function requestSort(columnName) {
    let dir = "desc";
    if (columnName === sortConfig.columnName && "desc" === sortConfig.dir)
      dir = "asc";
    setSortConfig({ columnName: columnName, dir: dir });
  }
  return { sortedData: sortTable, requestSort, sortConfig };
}

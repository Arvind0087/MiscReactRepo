import React, { useState } from "react";
import Checkbox from "@mui/joy/Checkbox";
import Table from "@mui/joy/Table";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import rows from "./order";
import MuiPagination from "./MuiPagination";

function OrderTable() {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);

  const slicedRows = rows?.slice(page * 10 - 10, page * 10);
  console.log("slicedRows", slicedRows);

  return (
    <div style={{ margin: "20px auto", width: "1200px" }}>
      <Table
        aria-labelledby="tableTitle"
        stickyHeader
        hoverRow
        sx={{
          // "--TableCell-headBackground": "var(--joy-palette-background-level1)",
          "--Table-headerUnderlineThickness": "1px",
          // "--TableRow-hoverBackground": "var(--joy-palette-background-level1)",
          "--TableCell-paddingY": "4px",
          "--TableCell-paddingX": "8px",
          width: "600px",
        }}
      >
        <thead>
          <tr>
            <th style={{ width: 48, textAlign: "center", padding: "12px 6px" }}>
              <Checkbox
                size="sm"
                indeterminate={
                  selected.length > 0 && selected.length !== slicedRows.length
                }
                checked={selected?.length === slicedRows?.length}
                onChange={(event) => {
                  setSelected(
                    event.target.checked ? slicedRows.map((row) => row.id) : []
                  );
                }}
              />
            </th>
            <th style={{ width: 140, padding: "12px 6px" }}>Invoice</th>
            <th style={{ width: 140, padding: "12px 6px" }}>Date</th>
            <th style={{ width: 140, padding: "12px 6px" }}>Status</th>
            <th style={{ width: 240, padding: "12px 6px" }}>Customer</th>
            <th style={{ width: 140, padding: "12px 6px" }}> </th>
          </tr>
        </thead>
        <tbody>
          {slicedRows?.map((item, i) => {
            return (
              <tr key={i + "row"}>
                <td
                  style={{
                    width: 48,
                    textAlign: "center",
                    padding: "12px 6px",
                  }}
                >
                  <Checkbox
                    size="sm"
                    checked={selected.includes(item.id)}
                    onChange={(event) => {
                      setSelected((ids) =>
                        event.target.checked
                          ? ids.concat(item.id)
                          : ids.filter((itemId) => itemId !== item.id)
                      );
                    }}
                  />
                </td>
                <td>{item?.id}</td>
                <td>{item?.date}</td>
                <td>{item?.status}</td>
                <td>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Avatar size="sm">{item?.customer?.initial}</Avatar>
                    <div>
                      <Typography level="body-xs">
                        {item?.customer?.name}
                      </Typography>
                      <Typography level="body-xs">
                        {item?.customer?.email}
                      </Typography>
                    </div>
                  </Box>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <div style={{ marginTop: "20px" }}>
        <MuiPagination
          totalItems={rows?.length}
          itemsPerPage={10}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

export default OrderTable;

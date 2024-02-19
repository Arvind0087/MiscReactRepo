import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";

function MuiPagination({ itemsPerPage, totalItems, page, setPage }) {
  const count = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleKeyDown = (event) => {
    if (page < count) {
      setPage((prevPage) => prevPage + 1);
    } else if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <Pagination
      count={count}
      page={page}
      color="primary"
      onChange={handlePageChange}
      onKeyDown={handleKeyDown}
      sx={{
        "& .MuiPaginationItem-root": {
          //   color: "white",
          //   fontSize: "1rem",
        },
        "& .MuiPaginationItem-page.Mui-selected": {
          //   backgroundColor: "primary",
        },
      }}
    />
  );
}

export default MuiPagination;

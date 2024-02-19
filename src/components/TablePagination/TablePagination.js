import React, { useState } from "react";
import styles from "./Pagination.module.css";
import countries from "./countries";

function TablePagination() {
  const [page, setPage] = useState(1);
  const countriesLength = countries?.length;

  const paginationHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= countriesLength / 10) {
      setPage(selectedPage);
    }
  };

  return (
    <div className={styles.pagination_top}>
      <div className={styles.products}></div>
      <div className={styles.pagination}>
        <span
          className={
            page < countriesLength / 10 ? "" : styles.pagination__disable
          }
          onClick={() => paginationHandler(page + 1)}
        >
          ▶
        </span>

        {[...Array(countriesLength / 10)].map((_, index) => (
          <span
            onClick={() => paginationHandler(index + 1)}
            className={page === index + 1 ? "pagination__selected" : ""}
            key={`page + ${index}`}
          >
            {index + 1}
          </span>
        ))}

        <span
          className={page > 1 ? "" : styles.pagination__disable}
          onClick={() => paginationHandler(page - 1)}
        >
          ▶
        </span>
      </div>
    </div>
  );
}

export default TablePagination;

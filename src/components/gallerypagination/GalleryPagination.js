import React, { useState, useEffect } from "react";
import "../../Pagination.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import img1 from "../assets/images/img1.jpg"

function GalleryPagination() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  let prodLength = products?.length / 10;

  useEffect(() => {
    const importAll = (r) => {
      return r.keys().map(r);
    };
    let images = importAll(
      require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
    );
    setProducts(images);
  }, []);

  const selectPageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  const slicedArray = products?.slice(page * 10 - 10, page * 10);

  return (
    <div className="pagination-top">
      <h3>Pagination</h3>
      <div className="products">
        {slicedArray?.map((item, index) => (
          <span className="products__single" key={index}>
            {/*<img src={item} alt="Image missing" />*/}

            <LazyLoadImage
              alt="Image missing"
              // height={100}
              src={item}
              // width={100}
            />
          </span>
        ))}
      </div>

      <div className="pagination">
        <span
          onClick={() => selectPageHandler(page > 1 ? page - 1 : page)}
          className={page > 1 ? "" : "pagination__disable"}
        >
          ◀
        </span>
        {[...Array(prodLength)].map((_, index) => (
          <span
            onClick={() => selectPageHandler(index + 1)}
            className={page === index + 1 ? "pagination__selected" : ""}
            key={`page + ${index}`}
          >
            {index + 1}
          </span>
        ))}

        <span
          onClick={() => selectPageHandler(page < prodLength ? page + 1 : page)}
          className={page < prodLength ? "" : "pagination__disable"}
        >
          ▶
        </span>
      </div>
    </div>
  );
}

export default GalleryPagination;

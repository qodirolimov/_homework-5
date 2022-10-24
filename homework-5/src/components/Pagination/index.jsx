import React, { useContext, useRef } from "react";
import context from "../../context";
import "./pagination.scss";

const index = () => {
  const liRef = useRef();

  const { data, totalPage, paginate } = useContext(context);
  let pageNumber = [];

  for (let i = 1; i <= Math.ceil(data.length / totalPage); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <ul className="pagination__ul__list">
        {pageNumber.map((e) => {
          return (
            <li
              ref={liRef}
              className="pagination__ul__list__li__item"
              onClick={() => paginate(e)}
            >
              {e}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default index;

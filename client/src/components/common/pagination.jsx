import React from "react";
import PropTypes from "prop-types";
import _ from "lodash"; //javascript library called underscore //

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize); //returns nearest integer to floating point number//
  console.log(currentPage);

  if (pagesCount === 1) return null;
  console.log(pagesCount);
  const pages = _.range(1, pagesCount + 1); //adding +1 makes sure last page is included

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// type checking for props ///
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;

// check for prop types in react documentation

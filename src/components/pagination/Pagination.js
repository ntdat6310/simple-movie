import React from "react";
import ReactPaginate from "react-paginate";
import "../../scss/pagination.scss";

export default function Pagination({
  totalPages,
  currentPage,
  onPaginationClick,
  pageRangeDisplayed = 3,
}) {
  // ! themoviedb doesn't accept page more than 500
  // ! {"errors":["page must be less than or equal to 500"],"success":false}
  totalPages = totalPages < 500 ? totalPages : 500;

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newPage = event.selected + 1;
    onPaginationClick(newPage);
  };

  return (
    <div className="pagination">
      <ReactPaginate
        forcePage={currentPage - 1} // Start from 0
        breakLabel="..."
        nextLabel={<i className="fa fa-angle-right"></i>}
        previousLabel={<i className="fa fa-angle-left"></i>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={pageRangeDisplayed}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

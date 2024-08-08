import React from "react";
import "./CustomPagination.css";

function CustomPagination(props) {
  const { currentPage, totalPages, onPageChange } = props;

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageItems = () => {
    const pageItems = [];

    for (let i = 1; i <= totalPages; i++) {
      pageItems.push(
        <button
          key={i}
          className={`pagination-item ${i === currentPage ? 'active' : ''}`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    return pageItems;
  };

  return (
    <div className="pagination-container">
      <button
        className="pagination-nav"
        disabled={currentPage === 1}
        onClick={() => handlePageClick(currentPage - 1)}
      >
        &lt;
      </button>
      {renderPageItems()}
      <button
        className="pagination-nav"
        disabled={currentPage === totalPages}
        onClick={() => handlePageClick(currentPage + 1)}
      >
        &gt;
      </button>
    </div>
  );
}

export default CustomPagination;

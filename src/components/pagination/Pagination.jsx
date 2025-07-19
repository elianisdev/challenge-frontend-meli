import React from 'react';
import './Pagination.scss';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const getPageNumbers = () => {
    const pages = [];
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);
    if (currentPage <= 3) end = Math.min(5, totalPages);
    if (currentPage >= totalPages - 2) start = Math.max(1, totalPages - 4);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <nav className="pagination">
      {currentPage > 1 && (
        <button className="pagination__btn" onClick={handlePrev}>
          <span className="pagination__btn-text">{'<'} Anterior</span>
        </button>
      )}
      {getPageNumbers().map((page) => (
        <button
          key={page}
          className={`pagination__btn${page === currentPage ? ' pagination__btn--active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          <span className="pagination__btn-text">{page}</span>
        </button>
      ))}
      {currentPage < totalPages && (
        <button className="pagination__btn" onClick={handleNext}>
          <span className="pagination__btn-text">Siguiente {'>'}</span>
        </button>
      )}
    </nav>
  );
};

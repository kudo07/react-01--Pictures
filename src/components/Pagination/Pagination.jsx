import React from 'react';
import { Typography, Button } from '@mui/material';
import './styles.css';
function Pagination({ currentPage, setPage, totalPages }) {
  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <div className="container">
      <Button
        onClick={handlePrev}
        variant="contained"
        className="button"
        color="primary"
        type="button"
      >
        Prev
      </Button>
      <Typography variant="h4" className="pageNumber">
        {currentPage}
      </Typography>
      <Button
        onClick={handleNext}
        variant="contained"
        className="button"
        color="primary"
        type="button"
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;

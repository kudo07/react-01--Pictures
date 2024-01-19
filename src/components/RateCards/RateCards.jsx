import { Box, Typography } from '@mui/material';
import React from 'react';
import Movie from '../Movie/Movie';

const RateCards = ({ title, movies }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box display="flex" flexWrap="wrap" className="container">
        {movies?.results.map((movie, i) => (
          <Movie key={movie.id} movie={movie} i={i} />
        ))}
      </Box>
    </Box>
  );
};

export default RateCards;

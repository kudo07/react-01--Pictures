import { Grid } from '@mui/material';
import React from 'react';
import './index.css';
import Movie from '../Movie/Movie';
const MovieList = ({ movies }) => {
  return (
    <Grid className="moviesContainer">
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;

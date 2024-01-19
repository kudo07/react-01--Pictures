import { Grid } from '@mui/material';
import React from 'react';
import './index.css';
import Movie from '../Movie/Movie';
const MovieList = ({ movies, numberOfMovies, excludeFirst }) => {
  const startFrom = excludeFirst ? 1 : 0;
  return (
    <Grid className="moviesContainer">
      {movies.results.slice(startFrom, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;

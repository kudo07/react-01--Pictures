import React, { useState } from 'react';
import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useGetMoviesQuery } from '../../service/TMDB';
import MovieList from '../MovieList/MovieList';
import { useSelector } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import FeaturedMovie from '../FeaturedMovies.jsx/FeaturedMovies';

const Movies = () => {
  const numberOfMovies = 13;
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });
  // pass it to the TMDB.js which get the result from the particular id got from the store and fetch the specific daata
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please searh for something else.
        </Typography>
      </Box>
    );
  }

  if (error) return 'An error has occured.';
  // console.log(data);
  return (
    <div>
      <FeaturedMovie movie={data.results[0]} />
      <MovieList movies={data} numberOfMovies={numberOfMovies} excludeFirst />

      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_pages}
      />
    </div>
  );
};

export default Movies;

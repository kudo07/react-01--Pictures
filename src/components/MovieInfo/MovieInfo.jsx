import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../../service/TMDB';
import { Box, CircularProgress, Grid, Rating, Typography } from '@mui/material';
import genreIcons from '../../assets/genres';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const MovieInfo = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  const { data, error, isFetching } = useGetMovieQuery(id);
  if (isFetching) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <Link to="/"> Something Went Wrong-GO BACK SIMON</Link>
      </Box>
    );
  }
  return (
    <div>
      <Grid container className="containerSpaceAround">
        <Grid item sm={12} lg={4} align="center">
          <img
            src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
            className="poster"
            alt={data?.title}
          />
        </Grid>
        <Grid item container direction="column" lg={7}>
          <Typography varient="h3" align="center" gutterBottom>
            {data?.title}({data.release_date.split('-')[0]})
          </Typography>
          <Typography>{data?.tagline}</Typography>
          <Grid item className="containerSpaceAroud">
            <Box display="flex" align="center">
              <Rating readOnly value={data.vote_average / 2} />
              <Typography
                gutterBottom
                variant="subtitle1"
                style={{ marginLeft: '10px' }}
              >
                {data?.vote_average}/10
              </Typography>
            </Box>
            <Typography gutterBottom variant="h6" align="center">
              {data?.runtime}min
            </Typography>
          </Grid>
          <Grid item className="genresContainer">
            {data?.genres?.map((genre) => (
              <Link
                className="links"
                key={genre.name}
                to="/"
                onClick={() => dispatch(selectGenreOrCategory(genre.id))}
              >
                <img
                  src={genreIcons[genre.name.toLowerCase()]}
                  className="genreImage"
                  height={30}
                  alt={data?.title}
                />
                <Typography color="textPrimary" variant="subtitle1">
                  {genre?.name}
                </Typography>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieInfo;

import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import './index.css';
function Movie({ movie, i }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className="movie">
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className="links" to={`/movie/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="image"
          />
          <Typography className="title" variant="h5">
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
}

export default Movie;

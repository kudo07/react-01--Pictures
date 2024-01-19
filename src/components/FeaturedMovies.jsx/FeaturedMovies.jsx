import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import './style.css';

function FeaturedMovie({ movie }) {
  if (!movie) return null;

  return (
    <Box
      component={Link}
      to={`/movie/${movie.id}`}
      className="featuredCardContainer"
    >
      <Card className="card cardRoot">
        <CardMedia
          media="picture"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          title={movie.title}
          className="cardMedia"
        />
        <Box padding="20px">
          <CardContent className="cardContent cardContentRoot">
            <Typography variant="h5" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="body2">{movie.overview}</Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}

export default FeaturedMovie;

import { ExitToApp, Favorite } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useGetListQuery } from '../../service/TMDB';
import RateCards from '../RateCards/RateCards';

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({
    listName: 'favorite/movies',
    accountId: user.id,
    sessionId: localStorage.getItem('session_id'),
    page: 1,
  });
  const { data: watchlistMovies, refetch: refetchWatchlisted } =
    useGetListQuery({
      listName: 'watchlist/movies',
      accountId: user.id,
      sessionId: localStorage.getItem('session_id'),
      page: 1,
    });
  //
  //

  //
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  // return <div>profile-{user.username}</div>;
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          MY PROFILE
        </Typography>
        <Button color="inherit" onClick={logout}>
          LogOut &nbsp;
          <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
        <Typography variant="h5">
          Add favourite or watchlist same movies to see them here!
        </Typography>
      ) : (
        <Box>
          <RateCards title="Favorite Movies" movies={favoriteMovies} />
          <RateCards title="Watchlist" movies={watchlistMovies} />
        </Box>
      )}
    </Box>
  );
};

export default Profile;

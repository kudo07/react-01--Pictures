import { ExitToApp, Favorite } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const favoriteMovies = [];
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
      {!favoriteMovies.length ? (
        <Typography variant="h5">
          Add Favorite or watchList some movies to see them here!
        </Typography>
      ) : (
        <Box>FAVORITE MOVIES</Box>
      )}
    </Box>
  );
};

export default Profile;
